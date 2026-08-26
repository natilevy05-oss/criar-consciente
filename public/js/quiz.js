/* ============================================================
   QUIZ DE RECOMENDACIÓN — Criar Consciente
   3 preguntas → 5 perfiles fijos (sin generación libre).
   Fuente: reglas_logica_generador_rutinas_y_quiz.md
   ============================================================ */

var ETSY_URL = "https://www.etsy.com/shop/PeacefulKidsLab";

var QUIZ_QUESTIONS = [
  {
    key: "edad",
    q: "¿Qué edad tiene tu peque?",
    options: [
      { value: "0-2", label: "0 a 2 años" },
      { value: "3-5", label: "3 a 5 años" },
      { value: "6-10", label: "6 a 10+ años" }
    ]
  },
  {
    key: "desafio",
    q: "¿Cuál es el desafío que más te está costando estos días?",
    options: [
      { value: "manana", label: "Las mañanas (vestirse, salir a horario, el caos antes de irse)" },
      { value: "comidas", label: "Las comidas (que se sienten a comer, que prueben cosas nuevas)" },
      { value: "sueno", label: "El sueño (dormirse, quedarse dormido/a, despertares)" },
      { value: "berrinches", label: "Los berrinches y los límites" }
    ]
  },
  {
    key: "estilo",
    q: "Cuando pensás en lo que necesitás hoy, ¿qué te ayudaría más?",
    options: [
      { value: "estructura", label: "Más estructura y organización en el día a día" },
      { value: "emocional", label: "Herramientas para acompañar las emociones (mías y de mi peque)" }
    ]
  }
];

var PROFILES = {
  rutinas_calma: {
    tag: "Rutinas con calma",
    text: "Lo que más te está pidiendo el cuerpo ahora es orden — no rigidez, sino una estructura simple que le dé previsibilidad al día. Cuando los más chicos saben qué viene después, todo se vuelve un poco menos caótico (para ellos y para vos).",
    recurso: "Rutina de mañana",
    publicado: true,
    recursoTexto: "es justo el tipo de herramienta pensada para esto. La tenés disponible ahora mismo en la tienda."
  },
  noches_tranquilas: {
    tag: "Noches tranquilas",
    text: "El sueño es de esos temas que cuando no funciona, afecta todo lo demás. Armar una rutina simple antes de dormir — siempre en el mismo orden, sin apuro — suele ser la base para que las noches (y las mañanas siguientes) mejoren.",
    recurso: "Guía de sueño",
    publicado: false
  },
  limites_conexion: {
    tag: "Límites con conexión",
    text: "Buscás poner límites sin perder la calidez — y se puede. Un berrinche no es un \u201cmal comportamiento\u201d a corregir, es una emoción que todavía no sabe cómo salir. Vos podés sostener el límite y acompañar la emoción al mismo tiempo.",
    recurso: "Guía de límites y berrinches",
    publicado: false
  },
  estructura_grandes: {
    tag: "Estructura para grandes desafíos",
    text: "Cuando los límites cuestan, muchas veces ayuda más una rutina clara que una charla larga. Saber qué se espera en cada momento del día reduce la cantidad de veces que hay que \u201cpelear\u201d por lo mismo.",
    recurso: "Set de rutinas + límites",
    publicado: false
  },
  herramientas_emocionales: {
    tag: "Herramientas emocionales del día a día",
    text: "No es solo el horario lo que se traba, es la parte emocional del momento (una comida que se convierte en pulseada, una salida que empieza con lágrimas). Tener recursos concretos para nombrar y acompañar esas emociones cambia el clima del día.",
    recurso: "Tarjetas/cartas emocionales",
    publicado: false
  }
};

// Tabla de reglas: (desafio, estilo) -> perfil
function resolveProfile(desafio, estilo) {
  if (desafio === "sueno") return "noches_tranquilas";
  if (desafio === "berrinches" && estilo === "emocional") return "limites_conexion";
  if (desafio === "berrinches" && estilo === "estructura") return "estructura_grandes";
  if ((desafio === "manana" || desafio === "comidas") && estilo === "estructura") return "rutinas_calma";
  if ((desafio === "manana" || desafio === "comidas") && estilo === "emocional") return "herramientas_emocionales";
  return "rutinas_calma"; // fallback defensivo, no debería ocurrir con las 3 preguntas fijas
}

document.addEventListener("DOMContentLoaded", function () {
  var quizRoot = document.getElementById("quiz-root");
  if (!quizRoot) return;

  var answers = {};
  var currentStep = 0;

  function renderQuestion(index) {
    var q = QUIZ_QUESTIONS[index];
    var html = '<div class="tool-panel">';
    html += '<p class="eyebrow">Pregunta ' + (index + 1) + ' de ' + QUIZ_QUESTIONS.length + '</p>';
    html += '<h2>' + q.q + '</h2>';
    html += '<div class="option-list" role="radiogroup" aria-label="' + q.q + '">';
    q.options.forEach(function (opt, i) {
      html += '<label class="option-card" for="opt-' + index + '-' + i + '">' +
        '<input type="radio" name="q-' + index + '" id="opt-' + index + '-' + i + '" value="' + opt.value + '"> ' +
        opt.label + '</label>';
    });
    html += '</div></div>';
    quizRoot.innerHTML = html;

    var inputs = quizRoot.querySelectorAll('input[type="radio"]');
    inputs.forEach(function (input) {
      input.addEventListener("change", function () {
        answers[q.key] = input.value;
        inputs.forEach(function (i2) { i2.closest(".option-card").classList.remove("selected"); });
        input.closest(".option-card").classList.add("selected");
        setTimeout(function () {
          if (index < QUIZ_QUESTIONS.length - 1) {
            currentStep = index + 1;
            renderQuestion(currentStep);
          } else {
            renderResult();
          }
        }, 220);
      });
    });
  }

  function renderResult() {
    var profileKey = resolveProfile(answers.desafio, answers.estilo);
    var profile = PROFILES[profileKey];
    var ageLabel = { "0-2": "0 a 2 años", "3-5": "3 a 5 años", "6-10": "6 a 10+ años" }[answers.edad] || "";

    var html = '<div class="tool-panel">';
    html += '<span class="result-tag">Tu resultado</span>';
    html += '<h2>' + profile.tag + '</h2>';
    html += '<p>' + profile.text + '</p>';

    if (profile.publicado) {
      html += '<p><strong>Te puede servir: ' + profile.recurso + '</strong> — ' + profile.recursoTexto + '</p>';
      html += '<a class="btn btn-clay" href="' + ETSY_URL + '" target="_blank" rel="noopener">Mirá lo que ya tenés disponible →</a>';
    } else {
      html += '<p><strong>Te puede servir: ' + profile.recurso + '</strong> — muy pronto vas a encontrarlo/a en la tienda.</p>';
      html += '<div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0 22px;">' +
        '<a class="btn btn-clay" href="' + ETSY_URL + '" target="_blank" rel="noopener">Mirá lo que ya tenés disponible →</a>' +
        '</div>';
      html += '<div class="card" style="background:var(--paper-2);border:none;">' +
        '<p style="margin-bottom:14px;"><strong>¿Querés que te avisemos apenas esté listo?</strong> Dejá tu mail y te escribimos ni bien publiquemos "' + profile.recurso + '".</p>' +
        '<form id="quiz-email-form" data-profile="' + profileKey + '" data-recurso="' + profile.recurso + '">' +
        '<div class="field"><label for="quiz-email" class="visually-hidden">Tu email</label>' +
        '<input type="email" id="quiz-email" name="email" placeholder="tu@email.com" required></div>' +
        '<button type="submit" class="btn btn-sage">Avisame cuando esté listo</button>' +
        '<p class="field-hint">Usamos tu mail solo para avisarte sobre este recurso y novedades de Criar Consciente — nunca lo compartimos con terceros.</p>' +
        '<div id="quiz-email-msg"></div>' +
        '</form></div>';
    }

    html += '<div style="margin-top:22px;"><button class="btn btn-outline btn-sm" id="quiz-restart" type="button">Volver a hacer el quiz</button></div>';
    html += '</div>';
    quizRoot.innerHTML = html;

    var restartBtn = document.getElementById("quiz-restart");
    if (restartBtn) {
      restartBtn.addEventListener("click", function () {
        answers = {};
        currentStep = 0;
        renderQuestion(0);
        quizRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    var emailForm = document.getElementById("quiz-email-form");
    if (emailForm) {
      emailForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var msgEl = document.getElementById("quiz-email-msg");
        var email = document.getElementById("quiz-email").value;
        var submitBtn = emailForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";

        fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            origen: "quiz",
            perfil: profile.tag,
            recurso: profile.recurso
          })
        })
          .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
          .then(function (result) {
            if (result.ok) {
              msgEl.innerHTML = '<div class="msg msg-ok">¡Listo! Te vamos a avisar apenas esté disponible.</div>';
              emailForm.querySelector("#quiz-email").value = "";
              submitBtn.textContent = "Avisame cuando esté listo";
              submitBtn.disabled = false;
            } else {
              throw new Error(result.data && result.data.error);
            }
          })
          .catch(function () {
            msgEl.innerHTML = '<div class="msg msg-error">Uy, algo falló. Probá de nuevo en un rato.</div>';
            submitBtn.textContent = "Avisame cuando esté listo";
            submitBtn.disabled = false;
          });
      });
    }
  }

  renderQuestion(0);
});
