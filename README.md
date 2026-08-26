# Criar Consciente — Sitio web (MVP)

Sitio completo del MVP de Criar Consciente: contenido, Generador de rutinas, Quiz de recomendación, placeholders de Blog/App y captura de mails.

---

## ⚠️ Antes de desplegar — 3 cosas que tenés que completar vos

Estas son decisiones que no estaban resueltas en los documentos que me pasaste, así que las dejé marcadas en vez de inventarlas:

1. **Número de WhatsApp real.** Ahora mismo el botón flotante y el del footer apuntan a un número de ejemplo (`5491100000000`). Buscá y reemplazá ese número en los 6 archivos HTML (`index.html`, `sobre-mi.html`, `faq.html`, `generador.html`, `quiz.html`, `blog.html`, `app.html`) por tu número real en formato internacional sin espacios ni "+" (ej: `5491122334455`).
2. **Tu foto en "Sobre mí".** El bloque de la foto en `sobre-mi.html` está con un placeholder ilustrado. Cuando tengas la foto, reemplazá el `<div class="about-photo">...</div>` por una etiqueta `<img src="/img/natalia.jpg" alt="Natalia Levy">` y subí la foto a `public/img/`.
3. **Dominio propio.** El sitio queda funcionando en un subdominio gratis de Vercel (`algo.vercel.app`). Conectar un dominio propio es un paso aparte, más abajo te explico cómo.

---

## Cómo está armado

```
criar-consciente/
├── public/              → todo lo que ve el usuario (estático)
│   ├── index.html        → Crianza con sentido (home)
│   ├── sobre-mi.html
│   ├── faq.html
│   ├── generador.html    → Generador de rutinas
│   ├── quiz.html          → Quiz de recomendación
│   ├── blog.html          → placeholder "muy pronto"
│   ├── app.html            → placeholder + captura de mail
│   ├── css/style.css
│   └── js/
│       ├── nav.js         → menú mobile
│       ├── generador.js   → las 9 reglas fijas del generador
│       └── quiz.js        → las 3 preguntas y 5 perfiles fijos
├── api/
│   └── subscribe.js      → función serverless: guarda el mail (Resend)
├── vercel.json
├── package.json
└── .env.example
```

**Nada de esto usa IA en tiempo real.** El generador y el quiz funcionan con tablas de reglas fijas escritas directamente en `generador.js` y `quiz.js`, tal como definieron los documentos de reglas — igual que un buscador de talles o una calculadora, no un chatbot.

---

## Paso a paso para publicarlo (sin GitHub ni Vercel conectados desde acá)

No tengo los conectores de GitHub ni de Vercel disponibles en este chat, así que este último tramo lo hacés vos — son ~15 minutos.

### 1. Crear el repositorio en GitHub
1. Entrá a [github.com](https://github.com) e iniciá sesión (o creá una cuenta gratis).
2. Botón verde **"New repository"** → nombre `criar-consciente` → **Create repository**.
3. En tu computadora, dentro de la carpeta `criar-consciente` que te compartí, abrí una terminal y corré:
   ```bash
   git init
   git add .
   git commit -m "Sitio Criar Consciente — MVP"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/criar-consciente.git
   git push -u origin main
   ```

### 2. Crear la cuenta de Resend (para guardar los mails)
1. Andá a [resend.com](https://resend.com) → **Sign up** (podés entrar con tu cuenta de Google).
2. Una vez dentro, andá a **API Keys** → **Create API Key** → copiá el valor (empieza con `re_...`). Esto es tu `RESEND_API_KEY`.
3. Andá a **Audiences** → **Create Audience** → llamala por ejemplo "Criar Consciente — interesados". Copiá el ID que te muestra. Ese es tu `RESEND_AUDIENCE_ID`.
4. *(Opcional pero recomendado)* En **Domains**, agregá tu dominio propio cuando lo tengas, para poder enviar desde una dirección tipo `hola@criarconsciente.com` en vez de la genérica de prueba. Hasta entonces, podés dejar `FROM_EMAIL` sin definir (el sitio usa una dirección de prueba de Resend por defecto).
5. Definí `NOTIFY_EMAIL` como tu propio mail — ahí vas a recibir un aviso cada vez que alguien deje su mail en el generador, el quiz o la sección de la app.

### 3. Desplegar en Vercel
1. Andá a [vercel.com](https://vercel.com) → **Sign up** → entrá con tu cuenta de GitHub (así quedan conectados).
2. **Add New... → Project** → elegí el repositorio `criar-consciente` → **Import**.
3. Vercel va a detectar automáticamente que es un proyecto estático + funciones serverless (gracias al `vercel.json`). No hace falta tocar nada en "Build settings".
4. Antes de darle a Deploy, abrí **Environment Variables** y cargá las 4 variables de `.env.example`:
   - `RESEND_API_KEY` → la que copiaste de Resend
   - `RESEND_AUDIENCE_ID` → la que copiaste de Resend
   - `NOTIFY_EMAIL` → tu mail
   - `FROM_EMAIL` → dejalo vacío por ahora (o `onboarding@resend.dev`)
5. Click en **Deploy**. En 1-2 minutos te da un link tipo `criar-consciente.vercel.app` — ese es tu sitio funcionando.

### 4. Conectar el dominio propio (cuando lo tengas)
En Vercel: tu proyecto → **Settings → Domains** → agregá tu dominio y seguí las instrucciones para apuntar el DNS desde donde lo compraste. Esto se puede hacer en cualquier momento después del lanzamiento, sin volver a desplegar nada.

### 5. Probar que todo funcione (antes de la entrega)
- [ ] Navegar las 7 secciones desde el menú (desktop y mobile)
- [ ] Generador: probar varias combinaciones de edad + desafíos
- [ ] Quiz: completarlo con distintas respuestas, revisar que el perfil "Rutinas con calma" lleve directo a Etsy y que los otros 4 muestren el formulario de mail
- [ ] Dejar un mail de prueba en el generador, el quiz y en "La app" → revisar que llegue el aviso a tu casilla y que el contacto aparezca en tu Audiencia de Resend
- [ ] Botón de WhatsApp (una vez que cargues tu número real)
- [ ] Botones a Etsy (que abran en pestaña nueva)

---

## Decisiones y criterios (para tu PDF de entrega)

Algunos puntos que probablemente quieras documentar:

- **Hosting: Vercel**, decisión ya tomada por vos. Se evaluó Netlify como alternativa, pero se optó por Vercel porque cuenta con conector MCP oficial para gestionar despliegues desde Claude, coincide con el método enseñado en el curso, y es gratuito para las necesidades del proyecto.
- **Generador y Quiz sin IA en tiempo real:** ambas herramientas funcionan con tablas de reglas fijas (edad × desafío para el generador; desafío × estilo de ayuda para el quiz), definidas por vos y cargadas directamente en el código — no hay ninguna llamada a un modelo de lenguaje cuando alguien usa el sitio.
- **Captura de mails con Resend Audiences:** en vez de armar una base de datos propia, se usa la funcionalidad de "Audiencias" de Resend, pensada exactamente para este caso (lista simple de contactos). Cada mail nuevo también te llega como notificación, así tenés visibilidad inmediata además de la lista acumulada.
- **CTA del quiz siempre hacia la tienda general:** para los 4 perfiles cuyo recurso todavía no está publicado, el botón lleva igual a la tienda de Etsy (para no mostrar nunca una página vacía o rota), y se ofrece dejar el mail para avisar cuando el recurso puntual esté listo.
- **Sin conector de GitHub/Vercel en el chat de construcción:** el código se generó completo en este chat, pero la publicación (crear repo + importar a Vercel + cargar variables de entorno) se hizo manualmente siguiendo la guía de este README, ya que esos conectores no estaban disponibles en esta conversación.

---

## Alcance que quedó fuera de este MVP (a propósito)

Según el PRD, esto no se construyó y no debería construirse en esta etapa: blog con artículos reales, asistente conversacional dentro del sitio, bot de WhatsApp automatizado, integración en tiempo real con Etsy, app móvil, ni el cambio de nombre de la tienda Etsy (esa es una decisión de negocio aparte, todavía sin resolver).
