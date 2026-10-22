(function () {
  const G = (typeof GALLERY !== "undefined" && Array.isArray(GALLERY)) ? GALLERY : [];
  const DEMO = [
    { f: "images/storefront.jpg", c: "Branding", t: "Building Materials", p: "images/" },
    { f: "cement.svg", c: "Cement", t: "Cement", p: "images/" },
    { f: "sariya.svg", c: "Sariya", t: "Sariya", p: "images/" },
    { f: "morang.svg", c: "Morang & Gitti", t: "Morang", p: "images/" },
    { f: "gitti.svg", c: "Morang & Gitti", t: "Gitti", p: "images/" }
  ];
  const ORDER = ["Dukaan", "Cement", "Morang & Gitti", "Sariya", "Hardware", "Branding"];
  const src = it => (it.p || "images/gallery/") + encodeURIComponent(it.f);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

  function layout(n) {
    const sp = [];
    let i = 0;
    while (i < n) {
      const left = n - i;
      if (left >= 5) { sp.push([7, 4], [5, 2], [5, 2], [6, 3], [6, 3]); i += 5; }
      else if (left === 4) { sp.push([6, 3], [6, 3], [6, 3], [6, 3]); i += 4; }
      else if (left === 3) { sp.push([4, 3], [4, 3], [4, 3]); i += 3; }
      else if (left === 2) { sp.push([6, 3], [6, 3]); i += 2; }
      else { sp.push([12, 4]); i += 1; }
    }
    return sp;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<button class="lb-x" aria-label="Close">&times;</button><button class="lb-p" aria-label="Previous">&#10094;</button><button class="lb-n" aria-label="Next">&#10095;</button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(box);
    const im = box.querySelector("img");
    let cur = [], idx = 0;
    function show() {
      const it = cur[idx];
      im.classList.remove("in");
      im.onload = () => im.classList.add("in");
      im.src = src(it);
      im.alt = it.t;
      box.querySelector("figcaption").textContent = it.t + " \u00b7 " + it.c;
    }
    function openLB(list, i) { cur = list; idx = i; box.classList.add("open"); document.body.style.overflow = "hidden"; show(); }
    function closeLB() { box.classList.remove("open"); document.body.style.overflow = ""; }
    function step(d) { idx = (idx + d + cur.length) % cur.length; show(); }
    box.querySelector(".lb-x").onclick = closeLB;
    box.querySelector(".lb-p").onclick = () => step(-1);
    box.querySelector(".lb-n").onclick = () => step(1);
    box.addEventListener("click", e => { if (e.target === box) closeLB(); });
    document.addEventListener("keydown", e => {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
    let tx = 0;
    box.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    });

    const grid = document.getElementById("gallery");
    if (grid) {
      const list = G.length ? G : DEMO;
      const cats = ORDER.filter(c => list.some(i => i.c === c));
      list.forEach(i => { if (cats.indexOf(i.c) < 0) cats.push(i.c); });
      const fEl = document.getElementById("filters");
      let active = "All";
      let view = [];
      function draw() {
        view = list.filter(i => active === "All" || i.c === active);
        const sp = layout(view.length);
        grid.innerHTML = view.map((it, i) =>
          '<figure class="g-item" data-i="' + i + '" tabindex="0" style="grid-column:span ' + sp[i][0] + ';grid-row:span ' + sp[i][1] + '">' +
          '<img src="' + src(it) + '" alt="' + esc(it.t) + '" loading="lazy" onerror="this.closest(\'.g-item\').style.display=\'none\'">' +
          '<span class="cat-badge">' + esc(it.c) + '</span><span class="label">' + esc(it.t) + '</span><span class="zoom">&#10530;</span></figure>'
        ).join("");
      }
      if (fEl) {
        if (cats.length > 1) {
          fEl.innerHTML = ["All"].concat(cats).map(c => '<button class="filter-btn' + (c === active ? " active" : "") + '" data-f="' + esc(c) + '">' + esc(c) + '</button>').join("");
          fEl.querySelectorAll(".filter-btn").forEach(b => {
            b.onclick = () => {
              active = b.dataset.f;
              fEl.querySelectorAll(".filter-btn").forEach(x => x.classList.toggle("active", x === b));
              draw();
            };
          });
        } else { fEl.style.display = "none"; }
      }
      grid.addEventListener("click", e => {
        const f = e.target.closest(".g-item[data-i]");
        if (f) openLB(view, +f.dataset.i);
      });
      grid.addEventListener("keydown", e => {
        if (e.key !== "Enter") return;
        const f = e.target.closest(".g-item[data-i]");
        if (f) openLB(view, +f.dataset.i);
      });
      draw();
    }

    const pg = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const anchor = document.getElementById("site-cta");
    if (anchor && G.length && (pg === "index.html" || pg === "about.html")) {
      const pick = G.slice(0, 5);
      const html = '<section class="section showcase"><div class="container">' +
        '<div class="section-head"><span class="tag">Our Work</span><h2>Hamari <span>Jhalak</span></h2><p>Hamari dukaan aur material ki kuch tasveerein.</p></div>' +
        '<div class="collage" id="collage">' +
        pick.map((it, k) => '<figure class="frame f' + k + '" data-i="' + k + '"><img src="' + src(it) + '" alt="' + esc(it.t) + '" loading="lazy"><figcaption>' + esc(it.t) + '</figcaption></figure>').join("") +
        '</div><div style="text-align:center;margin-top:34px"><a class="btn btn-red" href="gallery.html">Poori Gallery Dekhein</a></div></div></section>';
      anchor.insertAdjacentHTML("beforebegin", html);
      const col = document.getElementById("collage");
      col.addEventListener("click", e => {
        const f = e.target.closest(".frame");
        if (f) openLB(G, +f.dataset.i);
      });
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(en => {
          if (en[0].isIntersecting) { col.classList.add("in"); io.disconnect(); }
        }, { threshold: 0.15 });
        io.observe(col);
      } else { col.classList.add("in"); }
    }
  });
})();