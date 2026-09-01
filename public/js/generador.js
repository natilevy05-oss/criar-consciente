/* ============================================================
   GENERADOR DE RUTINAS — Criar Consciente
   Reglas fijas predefinidas (sin generación libre en tiempo real).
   Fuente: reglas_logica_generador_rutinas_y_quiz.md
   ============================================================ */

var ROUTINES = {
  "0-2": {
    manana: {
      intro: "A esta edad el adulto guía casi todo, pero ya podés sumar pequeñas elecciones para que tu hijo/a empiece a sentirse parte de su propia mañana.",
      steps: [
        { title: "Despertar con calma", text: "Nada de apuro desde el primer minuto. Un rato de upa o de luz natural antes de arrancar hace diferencia." },
        { title: "Elegir entre 2 opciones", text: "“¿remera roja o azul?” ya es autonomía real, aunque parezca chiquito." },
        { title: "Vestirse con ayuda mínima", text: "Dejalo/a intentar meter el brazo o la pierna solo/a, aunque tarde más. Ahí se juega tu paciencia." },
        { title: "Desayuno sensorial y sin apuro", text: "Que pueda tocar, ensuciarse, probar con su propia cuchara." },
        { title: "Despedida con ritual fijo", text: "Un gesto que se repita siempre (un beso, chocar las manos, una frase corta) ayuda a anticipar la separación." }
      ]
    },
    comidas: {
      intro: "A esta edad comer es, ante todo, explorar. El desorden y el ritmo lento son parte esperable del proceso, no algo para corregir.",
      steps: [
        { title: "Sentarse siempre en el mismo lugar", text: "Una sillita a su altura ayuda a anticipar que llegó el momento de comer." },
        { title: "Elegir entre 2 opciones simples", text: "“¿banana o manzana?” ya es una decisión real, aunque parezca chica." },
        { title: "Explorar con las manos y los sentidos", text: "Tocar, aplastar, ensuciarse es parte de aprender a comer, no un problema." },
        { title: "Comer a su propio ritmo", text: "Sin apurar ni completar por él/ella; respetar cuándo abre la boca y cuándo la cierra." },
        { title: "Reconocer que terminó", text: "Un gesto o palabra simple (“listo”) que vos validás, sin insistir en que coma un poco más." }
      ]
    },
    sueno: {
      intro: "El objetivo a esta edad no es que se duerma solo/a rápido, sino que su cuerpo reconozca que se acerca el sueño a través de señales repetidas.",
      steps: [
        { title: "Baño o momento de agua tibia", text: "Ayuda a bajar el ritmo del cuerpo después del día." },
        { title: "Piyama y ambiente en penumbra", text: "Luz tenue desde este paso en adelante, siempre." },
        { title: "Canción o sonido repetido", text: "La misma melodía o frase suave todas las noches, como señal de que ya llega el sueño." },
        { title: "Contacto físico cercano", text: "Al principio suele ser upa sostenida; más adelante ese acompañamiento va tomando otras formas — sentarte al lado, mecer sin upa, una mano o una caricia — sin perder la cercanía." },
        { title: "Cierre según lo que necesite esa noche", text: "Es habitual que concilien el sueño con el adulto presente, y recién ahí el adulto se retira. También puede pasar que se duerman solos/as después del ritual, con una despedida breve. Ninguna forma es mejor que otra: lo que importa es que el cierre sea calmo y predecible." }
      ]
    }
  },
  "3-5": {
    manana: {
      intro: "Acá ya podés sumar tarjetas de secuencia visual: una hilera de 4-5 imágenes simples que tu hijo/a revise solo/a, aunque todavía no lea.",
      steps: [
        { title: "Mirar la secuencia visual", text: "Antes de arrancar, que la repase por su cuenta." },
        { title: "Vestirse con ropa preparada la noche anterior", text: "Elegida entre 2 opciones el día antes, para sacarle decisiones a la mañana." },
        { title: "Higiene personal simple", text: "Lavarse cara y dientes con elementos a su alcance." },
        { title: "Desayunar y guardar su lugar", text: "Llevar el plato o la taza a la pileta, aunque sea simbólico." },
        { title: "Revisar la mochila junto a un adulto", text: "Ya empieza a sumar objetos él/ella mismo/a, acompañado/a." }
      ]
    },
    comidas: {
      intro: "Ya puede sumarse a tareas simples de preparación y servirse solo/a, con elementos pensados para su tamaño.",
      steps: [
        { title: "Ayudar en algo concreto", text: "Lavar una fruta, mezclar una ensalada, poner los individuales en la mesa." },
        { title: "Servirse su porción", text: "Con una jarra o cucharón chico, aunque al principio derrame." },
        { title: "Elegir entre 2 opciones ya preparadas", text: "Sostiene la autonomía sin convertir la comida en negociación abierta." },
        { title: "Comer sin pantallas ni distracciones", text: "Un momento tranquilo, acompañado, sin apuro." },
        { title: "Reconocer su propia saciedad", text: "Puede decir “no quiero más” sin que eso sea motivo de conflicto." }
      ]
    },
    sueno: {
      intro: "Ya puede anticipar los pasos con una secuencia visual, aunque sigue necesitando presencia cercana del adulto durante el ritual.",
      steps: [
        { title: "Mirar la secuencia visual", text: "Baño → piyama → cuento → luz apagada, siempre en el mismo orden." },
        { title: "Elegir entre 2 opciones", text: "“¿este piyama o este otro?”, “¿este cuento o este otro?” — autonomía dentro de un marco fijo." },
        { title: "Cuento con acompañamiento sostenido", text: "Quedarte cerca o sentado/a durante la lectura, no solo dar la instrucción desde la puerta." },
        { title: "Luz tenue y ambiente tranquilo", text: "Bajar estímulos antes de apagar la luz, no de golpe." },
        { title: "Despedida con ritual fijo", text: "Corta, cálida y siempre igual, sin el “una vez más” que alarga la transición. Transmitile que vas a estar cerca y que podés acudir si te necesita: a esta edad puede aparecer el miedo a dormir solo/a." }
      ]
    }
  },
  "6-10": {
    manana: {
      intro: "A esta edad podés soltar más el control: una checklist propia, visual o escrita, que revise solo/a, con vos cerca para acompañar, no para dirigir cada paso.",
      steps: [
        { title: "Revisar su checklist personal", text: "Armada junto a vos, pero que la chequee de forma independiente." },
        { title: "Vestirse y armar su mochila sin supervisión directa", text: "Vos estás cerca, pero sin meterte en cada paso." },
        { title: "Desayunar con horario flexible pero acordado", text: "Un rango de tiempo, no un minuto exacto." },
        { title: "Organizar sus propias pertenencias", text: "Útiles, merienda, tarea, como responsabilidad suya, no algo que el adulto termina reemplazando." },
        { title: "Salir con tiempo de margen", text: "Ya empieza a manejar su propio ritmo dentro de lo que acordaron en familia." }
      ]
    },
    comidas: {
      intro: "A esta edad puede colaborar en partes reales de la comida familiar y entender un poco más de dónde viene lo que come.",
      steps: [
        { title: "Colaborar en preparar parte de la comida", text: "Cortar con cuchillo de niño/a, armar una ensalada, ayudar a cocinar algo simple." },
        { title: "Servirse solo/a de la fuente o la olla", text: "Con supervisión cercana, pero sin intervención directa." },
        { title: "Poner y levantar su lugar en la mesa", text: "Parte natural de comer, no una “tarea extra”." },
        { title: "Comer en un ambiente tranquilo y compartido", text: "Sin pantallas, con charla familiar como parte del momento." },
        { title: "Entender de dónde viene la comida", text: "Si se da, sumar alguna noción simple (huerta, mercado, estación del año) como curiosidad, no como clase." }
      ]
    },
    sueno: {
      intro: "Acá el adulto se corre del rol de ejecución para pasar a un rol de cierre breve, dejando que el niño/a sostenga más su propia rutina.",
      steps: [
        { title: "Prepararse de forma más independiente", text: "Piyama, higiene, ordenar su espacio, con supervisión liviana." },
        { title: "Momento de lectura o calma propia", text: "Dentro de un margen horario acordado, no un minuto exacto impuesto." },
        { title: "Ambiente sin pantallas antes de dormir", text: "Parte del acuerdo familiar, no una imposición de último momento." },
        { title: "Chequeo breve del adulto", text: "Pasar a saludar o conversar un minuto, más simbólico que necesario para la rutina en sí." },
        { title: "Despedida corta que respeta su autonomía", text: "Reconociendo que ya arma su propio cierre del día." }
      ]
    }
  }
};

var AGE_LABELS = { "0-2": "0 a 2 años", "3-5": "3 a 5 años", "6-10": "6 a 10+ años" };
var CHALLENGE_LABELS = { manana: "🌅 Mañanas", comidas: "🍽️ Comidas", sueno: "🌙 Hora de dormir" };
var RANGE_NOTE = "Estos rangos son una guía aproximada, no un corte exacto. Cada niño y niña tiene sus propios tiempos de desarrollo, y eso hay que respetarlo siempre. En Montessori, por ejemplo, se suele hablar de otra división (0-3 / 3-6 / 6-10+), ligada a los planos del desarrollo. Si tu hijo/a está en una edad “bisagra” — como los 2 o los 5 años — probá generar la rutina del rango anterior y la del siguiente, y quedate con la que más se ajuste a su momento actual.";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("routine-form");
  var resultEl = document.getElementById("routine-result");
  if (!form) return;

  var ageChips = Array.prototype.slice.call(form.querySelectorAll(".age-chip"));
  var momentCards = Array.prototype.slice.call(form.querySelectorAll(".moment-card"));

  function syncSelectedClasses() {
    ageChips.forEach(function (chip) {
      chip.classList.toggle("selected", chip.querySelector("input").checked);
    });
    momentCards.forEach(function (card) {
      card.classList.toggle("selected", card.querySelector("input").checked);
    });
  }
  syncSelectedClasses();

  function clearResult() {
    resultEl.innerHTML = "";
  }

  ageChips.concat(momentCards).forEach(function (el) {
    el.querySelector("input").addEventListener("change", function () {
      syncSelectedClasses();
      clearResult();
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var age = form.querySelector('input[name="edad"]:checked');
    var challenges = Array.prototype.slice
      .call(form.querySelectorAll('input[name="desafio"]:checked'))
      .map(function (el) { return el.value; });

    if (challenges.length === 0) { challenges = ["manana"]; }

    var ageKey = age.value;
    var tagLabel = AGE_LABELS[ageKey] + " · " + challenges.map(function (ch) { return CHALLENGE_LABELS[ch]; }).join(" + ");

    var html = '<div class="result-block">';
    html += '<div class="blob blob-rose-corner" aria-hidden="true"></div>';
    html += '<span class="result-tag">' + tagLabel + '</span>';
    html += '<h2>Tu rutina de muestra</h2>';
    html += '<div class="note-box" style="position:relative;z-index:1;margin:0 0 20px;">' + RANGE_NOTE + '</div>';

    var n = 0;
    challenges.forEach(function (ch) {
      var block = ROUTINES[ageKey][ch];
      html += '<p class="moment-intro">' + CHALLENGE_LABELS[ch] + '</p>';
      html += '<p class="moment-lede">' + block.intro + '</p>';
      block.steps.forEach(function (step) {
        n += 1;
        html += '<div class="step-row">' +
          '<span class="step-badge">' + n + '</span>' +
          '<div><p class="step-title">' + step.title + '</p><p class="step-text">' + step.text + '</p></div>' +
          '</div>';
      });
    });

    html += '<p class="result-note">Podés adaptarla a tu rutina.</p>';
    html += '<div class="result-actions">' +
      '<a class="btn btn-olive" href="https://www.etsy.com/shop/PeacefulKidsLab" target="_blank" rel="noopener">Ver tu recurso personalizado en Etsy</a>' +
      '<button type="button" class="btn btn-outline-olive" id="routine-reset">Probar con otra edad</button>' +
      '</div>';

    html += '<div class="email-card">' +
      '<p><strong>¿Querés recibir más recursos gratis como este?</strong> Dejá tu mail y te vamos avisando sobre nuevas guías y novedades de Criar Consciente.</p>' +
      '<form id="routine-email-form">' +
      '<div class="field"><label for="routine-email" class="visually-hidden">Tu email</label>' +
      '<input type="email" id="routine-email" name="email" placeholder="tu@email.com" required></div>' +
      '<button type="submit" class="btn btn-olive">Quiero recibir más recursos gratis</button>' +
      '<p class="field-hint">Usamos tu mail solo para esto — nunca lo compartimos con terceros.</p>' +
      '<div id="routine-email-msg"></div>' +
      '</form></div>';

    html += '</div>';

    resultEl.innerHTML = html;
    resultEl.scrollIntoView({ behavior: "smooth", block: "start" });

    var resetBtn = document.getElementById("routine-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        clearResult();
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    var emailForm = document.getElementById("routine-email-form");
    if (emailForm) {
      emailForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var msgEl = document.getElementById("routine-email-msg");
        var email = document.getElementById("routine-email").value;
        var submitBtn = emailForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";

        fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, origen: "generador" })
        })
          .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
          .then(function (result) {
            if (result.ok) {
              msgEl.innerHTML = '<div class="msg msg-ok">¡Gracias! Ya sos parte de la lista.</div>';
              emailForm.reset();
              submitBtn.textContent = "Quiero recibir más recursos gratis";
              submitBtn.disabled = false;
            } else {
              throw new Error();
            }
          })
          .catch(function () {
            msgEl.innerHTML = '<div class="msg msg-error">Uy, algo falló. Probá de nuevo en un rato.</div>';
            submitBtn.textContent = "Quiero recibir más recursos gratis";
            submitBtn.disabled = false;
          });
      });
    }
  });
});
