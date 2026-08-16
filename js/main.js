// VisitTaniti — vanilla JS interactions (no framework, no build step)

(function () {
  "use strict";

  function init() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
    setupBurger();
    setupFaq();
    setupContactForm();
    setupReveal();
  }

  // ----- Mobile menu -----
  function setupBurger() {
    var burger = document.querySelector("[data-testid='nav-burger']");
    var mobile = document.querySelector("[data-testid='mobile-menu']");
    if (!burger || !mobile) return;

    burger.addEventListener("click", function () {
      var isOpen = mobile.classList.toggle("open");
      burger.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });

    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("open");
      });
    });
  }

  // ----- FAQ accordion -----
  function setupFaq() {
    var items = document.querySelectorAll(".tn-faq-item");
    if (!items.length) return;
    items.forEach(function (item) {
      var btn = item.querySelector(".tn-faq-q");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var willOpen = !item.classList.contains("open");
        items.forEach(function (i) { i.classList.remove("open"); });
        if (willOpen) item.classList.add("open");
        btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      });
    });
  }

  // ----- Contact form (client-side only) -----
  function setupContactForm() {
    var form = document.querySelector("[data-testid='contact-form']");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameInput = form.querySelector("[data-testid='input-name']");
      var name = (nameInput && nameInput.value.trim()) || "traveler";
      var wrapper = document.getElementById("contact-form-wrapper");

      var confirm = document.createElement("div");
      confirm.className = "tn-confirm";
      confirm.setAttribute("data-testid", "contact-confirm");
      confirm.innerHTML =
        '<i data-lucide="check-circle-2" style="width:40px;height:40px;margin-bottom:8px;"></i>' +
        '<h3>Thanks, ' + escapeHtml(name) + '!</h3>' +
        '<p style="margin:0;">Your booking request has been received. ' +
        'The Taniti Visitor Center will be in touch shortly.</p>';

      wrapper.innerHTML = "";
      wrapper.appendChild(confirm);
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // ----- Scroll reveal (progressive enhancement) -----
  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
