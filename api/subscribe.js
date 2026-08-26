// api/subscribe.js
// Función serverless de Vercel — recibe un email desde el generador/quiz/app
// y lo guarda en una Audiencia de Resend + le avisa a Natalia por mail.
//
// Variables de entorno necesarias (configurar en Vercel → Settings → Environment Variables):
//   RESEND_API_KEY       -> API key de Resend
//   RESEND_AUDIENCE_ID   -> ID de la audiencia creada en Resend (ver README)
//   NOTIFY_EMAIL         -> mail de Natalia donde llegan los avisos de nuevos leads
//   FROM_EMAIL           -> remitente verificado en Resend (ej: hola@criarconsciente.com)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { email, origen, perfil, recurso } = req.body || {};

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const notifyEmail = process.env.NOTIFY_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("Falta RESEND_API_KEY en las variables de entorno");
      return res.status(500).json({ error: "Configuración incompleta del servidor" });
    }

    // 1) Guardar el contacto en la Audiencia de Resend (lista simple de contactos)
    if (audienceId) {
      const contactRes = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            unsubscribed: false
          })
        }
      );
      if (!contactRes.ok) {
        const errText = await contactRes.text();
        console.error("Error guardando contacto en Resend:", errText);
        // No cortamos el flujo: igual intentamos notificar a Natalia.
      }
    }

    // 2) Avisar a Natalia por mail que llegó un lead nuevo
    if (notifyEmail) {
      const originLabel =
        origen === "quiz"
          ? `Quiz — perfil "${perfil || ""}", recurso "${recurso || ""}"`
          : origen === "generador"
          ? "Generador de rutinas"
          : origen === "app"
          ? "Interés en la futura app"
          : origen || "Sitio Criar Consciente";

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: notifyEmail,
          subject: "Nuevo mail capturado en Criar Consciente",
          text: `Nuevo contacto: ${email}\nOrigen: ${originLabel}`
        })
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error en /api/subscribe:", err);
    return res.status(500).json({ error: "Error interno" });
  }
}
