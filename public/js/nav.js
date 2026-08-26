// Menú de navegación — toggle mobile
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var shelf = document.querySelector(".nav-shelf");
  var cta = document.querySelector(".nav-cta");

  if (!toggle || !shelf) return;

  toggle.addEventListener("click", function () {
    var isOpen = shelf.classList.toggle("open");
    if (cta) cta.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
