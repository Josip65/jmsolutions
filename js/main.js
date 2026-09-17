/* ===== JM Solutions — glavni JS ===== */

// --- Mobilni meni ---
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
}

// --- Kontakt forma (lokalni demo; na Netlifyju zamijeni s Netlify formom) ---
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = form.querySelector(".form-msg");
    if (msg) msg.textContent = "";
    // Ako je na Netlifyju, forma se šalje automatski (data-netlify). Ovdje samo simuliramo.
    if (form.hasAttribute("data-netlify")) return; // pusti Netlify da preuzme
    const ok = document.createElement("p");
    ok.className = "form-msg";
    ok.style.color = "var(--electric-2)";
    const lang = document.documentElement.dataset.lang || "hr";
    const dict = { hr: "Hvala! Vaš upit je zabilježen. Kontaktirat ćemo vas uskoro.", en: "Thank you! Your inquiry has been recorded. We'll contact you soon.", de: "Danke! Ihre Anfrage wurde erfasst. Wir melden uns in Kürze." };
    ok.textContent = dict[lang] || dict.hr;
    form.appendChild(ok);
    form.reset();
  });
}

// --- Aktivni link u navigaciji ---
function initActiveLink() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });
}

// --- Godina u footeru ---
function initYear() {
  document.querySelectorAll(".year").forEach(el => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initContactForm();
  initActiveLink();
  initYear();
});
