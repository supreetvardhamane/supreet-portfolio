/* Minimal progressive enhancement — no dependencies.
   Fully usable with JS disabled; this just adds nicety. */
(function () {
  "use strict";

  /* current year */
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  /* scrollspy: highlight the active section in BOTH the top nav and the bottom dock */
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav] .nav-link[href^="#"]'));
  var groups = {};   // section id -> [links]
  var sections = [];
  var seen = {};

  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (id === "top") id = "top";
    (groups[id] = groups[id] || []).push(link);
    var sec = document.getElementById(id);
    if (sec && !seen[id]) { seen[id] = 1; sections.push(sec); }
  });

  function activate(id) {
    links.forEach(function (l) { l.classList.remove("is-active"); });
    (groups[id] || []).forEach(function (l) { l.classList.add("is-active"); });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) activate(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
