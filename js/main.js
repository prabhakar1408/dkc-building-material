const CALL = "+919919291985";
const WA = "919919291985";
const wa = (msg = "Namaste, mujhe building material ki requirement batani hai.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const PRODUCTS = [
  { name: "Cement", img: "cement.jpg", desc: "Construction ke har kaam ke liye cement." },
  { name: "Morang", img: "morang.jpg", desc: "Plaster aur construction ke liye morang." },
  { name: "Gitti", img: "gitti.jpg", desc: "Concrete aur foundation ke liye gitti." },
  { name: "Chhad / Sariya", img: "sariya.jpg", desc: "Mazboot structure ke liye steel rods." },
  { name: "Hardware Products", img: "hardware.jpg", desc: "Construction aur repair ke hardware items." },
];

const WAVE = `<svg class="wave bottom" viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,60 C240,120 480,0 720,50 C960,100 1200,20 1440,70 L1440,120 L0,120Z" fill="#fbf5ee"/></svg>`;
const WAVE_TOP = WAVE.replace("wave bottom", "wave top");

const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const NAV = [["Home","index.html"],["About","about.html"],["Products","products.html"],["Gallery","gallery.html"],["Contact","contact.html"]];

function header() {
  return `<header class="header"><div class="container nav">
    <a href="index.html" class="logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a>
    <div class="nav-right">
      <nav class="nav-links" id="navLinks">${NAV.map(([n,h]) => `<a href="${h}" class="${page===h?"active":""}">${n}</a>`).join("")}</nav>
      <a class="btn btn-yellow btn-sm" href="tel:${CALL}">Call Now</a>
      <a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>
    </div></div></header>`;
}

function ctaBanner() {
  return `<div class="container"><div class="cta-banner">
    <h2>Ready to Build?</h2>
    <p>Apni requirement batayein &mdash; hum jaldi sampark karenge.</p>
    <div class="btns">
      <a class="btn btn-yellow" href="tel:${CALL}">Call +91 9919291985</a>
      <a class="btn btn-green" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <a class="btn btn-dark" href="contact.html">Send Enquiry</a>
    </div></div></div>`;
}

function footer() {
  return `<footer class="footer"><div class="container">
    <div class="footer-grid">
      <div><h4>DK Chaudhary</h4><p>Building Material &amp; Hardware<br>Dihwa Chauraha, Barahua, Basti,<br>Uttar Pradesh, India</p><p class="phone">+91 9919291985</p></div>
      <div><h4>Pages</h4><ul>${NAV.map(([n,h])=>`<li><a href="${h}">${n}</a></li>`).join("")}</ul></div>
      <div><h4>Products</h4><ul>${PRODUCTS.map(p=>`<li><a href="products.html">${p.name.replace(" Products","")}</a></li>`).join("")}</ul></div>
      <div><h4>Quick Enquiry</h4><p>Call ya WhatsApp par apni requirement batayein.</p><br><a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp Us</a></div>
    </div>
    <div class="copy">&copy; 2026 DK Chaudhary Building Material &amp; Hardware. All rights reserved.</div>
  </div></footer>`;
}

const img = (f, alt) => `<img src="images/${f}" alt="${alt}" loading="lazy" onerror="fb(this)">`;

function renderCategories(el) {
  el.innerHTML = PRODUCTS.map(p => `<a class="cat" href="products.html"><div class="circle">${img(p.img,p.name)}</div>${p.name}</a>`).join("");
}

function renderProducts(el) {
  el.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <div class="circle">${img(p.img,p.name)}</div>
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div class="actions">
        <a class="btn btn-red btn-sm" href="contact.html?product=${encodeURIComponent(p.name)}">Enquire Now</a>
        <a class="btn btn-green btn-sm" target="_blank" rel="noopener" href="${wa("Namaste, mujhe "+p.name+" ki jaankari chahiye.")}">WhatsApp</a>
      </div></div>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  set("site-header", header());
  set("site-cta", ctaBanner());
  set("site-footer", footer());
  document.querySelectorAll("[data-wave]").forEach(e => e.insertAdjacentHTML("beforeend", e.dataset.wave==="both" ? WAVE_TOP+WAVE : WAVE));
  const c = document.getElementById("categories"); if (c) renderCategories(c);
  const p = document.getElementById("product-grid"); if (p) renderProducts(p);
  const btn = document.getElementById("menuBtn");
  if (btn) btn.onclick = () => document.getElementById("navLinks").classList.toggle("open");
});