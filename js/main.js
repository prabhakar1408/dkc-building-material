const CALL = "+919919291985";
const WA = "919919291985";
const wa = (msg = "Namaste, mujhe building material ki requirement batani hai.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

const ALL_PRODUCTS = [
  { name: "Cement", img: "cement.jpg", a1: "#ff5d73", a2: "#c9184a", desc: "Top brands ka cement, har construction kaam ke liye.", items: [
    { n: "UltraTech Cement", s: "PPC, 50 kg", d: "UltraTech PPC cement, 50 kg bag. Plaster, brickwork aur RCC ke kaam ke liye.", i: "UT", k: "ultratech" },
    { n: "ACC Cement", s: "50 kg bag", d: "ACC cement, 50 kg bag. Ghar aur building ke har kaam ke liye.", i: "ACC", k: "acc" },
    { n: "Ambuja Cement", s: "Cement", d: "Ambuja cement. Mazboot construction ke liye.", i: "AMB", k: "ambuja" } ] },
  { name: "Morang", img: "morang.jpg", a1: "#ffb703", a2: "#e07a00", desc: "Plaster aur construction ke liye morang.", items: [
    { n: "Plaster Morang (Mahin)", s: "Fine", d: "Plaster aur finishing ke kaam ke liye mahin morang.", i: "M", k: "plaster-morang" },
    { n: "Moti Morang", s: "Coarse", d: "Concrete, slab aur chinai ke kaam ke liye.", i: "M", k: "moti-morang" } ] },
  { name: "Gitti", img: "gitti.jpg", a1: "#2ec4b6", a2: "#0b6e6e", desc: "Concrete aur foundation ke liye gitti.", items: [
    { n: "Gitti 20 mm", s: "20 mm", d: "RCC, slab aur beam ke kaam ke liye.", i: "G", k: "gitti-20" } ] },
  { name: "Chhad / Sariya", img: "sariya.jpg", a1: "#7c8cff", a2: "#3a3fb5", desc: "Mazboot structure ke liye steel rods. Size aur availability ke liye humse puchhein.", items: [
    { n: "TMT Bar (Sariya)", s: "TMT", d: "Ghar, slab aur column ke liye mazboot sariya. Size aur rate ke liye puchhein.", i: "T", k: "tmt" },
    { n: "Binding Wire", s: "Accessories", d: "Sariya bandhne ke liye binding wire.", i: "B", k: "binding-wire" } ] },
  { name: "Hardware Products", img: "hardware.jpg", a1: "#ff9a5a", a2: "#e5532d", desc: "Construction aur ghar ke repair ke hardware items.", items: [
    { n: "Nails & Screws (Keel / Pech)", s: "Fasteners", d: "Lakdi aur diwar ke kaam ke liye alag-alag size.", i: "N", k: "nails-screws" },
    { n: "Nuts & Bolts", s: "Fasteners", d: "Furniture, gate aur fitting ke liye.", i: "N", k: "nuts-bolts" },
    { n: "Hammer (Hathoda)", s: "Hand Tool", d: "Thokne aur todne ke kaam ke liye.", i: "H", k: "hammer" },
    { n: "Pliers & Spanner (Plas / Pana)", s: "Hand Tool", d: "Kasne, kaatne aur pakadne ke kaam ke liye.", i: "P", k: "pliers-spanner" },
    { n: "Screwdriver Set", s: "Tool Set", d: "Alag-alag size ke screwdriver.", i: "S", k: "screwdriver" },
    { n: "Door Locks & Latches (Tala / Kundi)", s: "Security", d: "Darwaze aur gate ki suraksha ke liye.", i: "L", k: "door-lock" },
    { n: "Hinges & Handles (Kabja)", s: "Door Fitting", d: "Darwaze, khidki aur almari ke liye.", i: "H", k: "hinges" },
    { n: "Taps & Pipe Fittings (Nal / Tonti)", s: "Plumbing", d: "Bathroom aur kitchen ki plumbing ke liye.", i: "T", k: "taps-fittings" },
    { n: "Paint Brush & Roller", s: "Painting", d: "Rang-rogan aur putty ke kaam ke liye.", i: "P", k: "paint-brush" },
    { n: "Measuring Tape & Level", s: "Measuring", d: "Naap-tol aur seedhai check karne ke liye.", i: "M", k: "measuring-tape" } ] }
];

const PIMG = (typeof PRODUCT_IMAGES !== "undefined" && PRODUCT_IMAGES) ? PRODUCT_IMAGES : {};
const PRODUCTS = ALL_PRODUCTS
  .map(p => {
    const items = p.items.filter(i => PIMG[i.k]);
    return Object.assign({}, p, { items: items, img: items.length ? "products/" + PIMG[items[0].k] : p.img });
  })
  .filter(p => p.items.length);
const WAVE = `<svg class="wave bottom" viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,60 C240,120 480,0 720,50 C960,100 1200,20 1440,70 L1440,120 L0,120Z" fill="#fff8ec"/></svg>`;
const WAVE_TOP = WAVE.replace("wave bottom", "wave top");

const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const NAV = [["Home","index.html"],["About","about.html"],["Products","products.html"],["Gallery","gallery.html"],["Contact","contact.html"]];
const catLink = n => `products.html?cat=${encodeURIComponent(n)}`;

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
      <div><a href="index.html" class="f-logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a><p>Building Material &amp; Hardware<br>Dihwa Chauraha, Barahua, Basti,<br>Uttar Pradesh, India</p><p class="phone"><a href="tel:+919919291985">Call: +91 9919291985</a></p><p class="phone"><a href="mailto:dkchaudharybuildingmaterial@gmail.com">dkchaudharybuildingmaterial@gmail.com</a></p><p class="phone"><a href="https://www.instagram.com/dkchaudharybuildingmaterial" target="_blank" rel="noopener">Instagram: @dkchaudharybuildingmaterial</a></p></div>
      <div><h4>Pages</h4><ul>${NAV.map(([n,h])=>`<li><a href="${h}">${n}</a></li>`).join("")}</ul></div>
      <div><h4>Products</h4><ul>${PRODUCTS.map(p=>`<li><a href="${catLink(p.name)}">${p.name.replace(" Products","")}</a></li>`).join("")}</ul></div>
      <div><h4>Quick Enquiry</h4><p>Call ya WhatsApp par apni requirement batayein.</p><br><a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp Us</a></div>
    </div>
    <div class="copy">&copy; 2026 DK Chaudhary Building Material &amp; Hardware. All rights reserved.</div>
  </div></footer>`;
}

const img = (f, alt) => `<img src="images/${f}" alt="${alt}" loading="lazy" onerror="fb(this)">`;

const pimg = k => PIMG[k] ? ('<img class="pimg" src="images/products/' + PIMG[k] + '" alt="" loading="lazy" onload="this.closest(\'.var-card\').classList.add(\'has-img\')">') : "";
function pfb(i){var n=+i.dataset.t||0,x=["png","webp","jpeg"];if(n>=x.length){i.remove();return;}i.dataset.t=n+1;i.src=i.src.replace(/\.[a-z]+$/i,"."+x[n]);}

function catCard(p, idx, asButton) {
  const chips = p.items.slice(0,3).map(i=>`<span>${i.n}</span>`).join("") + (p.items.length>3 ? `<span>+${p.items.length-3} aur</span>` : "");
  const btn = asButton
    ? `<button class="btn btn-red btn-sm" data-cat="${p.name}">View Types &rarr;</button>`
    : `<a class="btn btn-red btn-sm" href="${catLink(p.name)}">View Types &rarr;</a>`;
  return `<article class="pc" style="--a1:${p.a1};--a2:${p.a2}">
    <div class="pc-top"><span class="pc-num">0${idx+1}</span><span class="pc-count">${p.items.length} Types</span>
      <div class="circle">${img(p.img,p.name)}</div></div>
    <div class="pc-body">
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div class="mini-chips">${chips}</div>
      <div class="pc-actions">${btn}
        <a class="pc-wa" target="_blank" rel="noopener" aria-label="WhatsApp" href="${wa("Namaste, mujhe "+p.name+" ki jaankari chahiye.")}">${WA_ICON}</a>
      </div>
    </div></article>`;
}

function renderCategories(el) {
  el.innerHTML = PRODUCTS.map(p => `<a class="cat" href="${catLink(p.name)}"><div class="circle">${img(p.img,p.name)}</div>${p.name}</a>`).join("");
}
function renderProducts(el) {
  el.innerHTML = PRODUCTS.map((p,i) => catCard(p, i, false)).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; };
  set("site-header", header());
  set("site-cta", ctaBanner());
  set("site-footer", footer());
  document.querySelectorAll("[data-wave]").forEach(e => e.insertAdjacentHTML("beforeend", e.dataset.wave==="both" ? WAVE_TOP+WAVE : WAVE));
  const c = document.getElementById("categories"); if (c) renderCategories(c);
  const p = document.getElementById("product-grid"); if (p) renderProducts(p);
  const st = document.getElementById("statTypes"); if (st) st.textContent = PRODUCTS.reduce((s,x)=>s+x.items.length,0);
  const btn = document.getElementById("menuBtn");
  if (btn) btn.onclick = () => document.getElementById("navLinks").classList.toggle("open");
});

/* ---- header with Call / WhatsApp / Mail icons (mobile) ---- */
const EMAIL = ""; // yahan apna email likho, jaise "dkchaudhary@gmail.com" (khali = mail icon nahi dikhega)
const PHONE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
const MAIL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>';
function header() {
  const mail = EMAIL ? `<a class="hc hc-mail" href="mailto:${EMAIL}?subject=Enquiry" aria-label="Email">${MAIL_ICON}</a>` : "";
  return `<header class="header"><div class="container nav">
    <a href="index.html" class="logo"><img src="images/logo.png" alt="DK Chaudhary" onerror="fb(this)"></a>
    <div class="nav-right">
      <nav class="nav-links" id="navLinks">${NAV.map(([n,h]) => `<a href="${h}" class="${page===h?"active":""}">${n}</a>`).join("")}</nav>
      <a class="btn btn-yellow btn-sm" href="tel:${CALL}">Call Now</a>
      <a class="btn btn-green btn-sm" href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>
      <div class="hdr-contact">
        <a class="hc hc-call" href="tel:${CALL}" aria-label="Call">${PHONE_ICON}</a>
        <a class="hc hc-wa" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${WA_ICON}</a>
        ${mail}
      </div>
      <button class="menu-btn" id="menuBtn" aria-label="Menu">&#9776;</button>
    </div></div></header>`;
}

/* dynamic counts */
document.addEventListener("DOMContentLoaded", () => {
  const n = PRODUCTS.length;
  const pl = document.querySelector(".pills span");
  if (pl) pl.textContent = n + " Product Categories";
  document.querySelectorAll(".stat").forEach(s => {
    const b = s.querySelector("b"), l = s.querySelector("span");
    if (b && l && /Main Categories/.test(l.textContent)) b.textContent = n;
  });
});