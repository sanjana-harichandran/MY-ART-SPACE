/* =========================================================
   EDIT YOUR CONTENT HERE. You shouldn't need to touch the rest.
   Anything in [BRACKETS] is a placeholder to replace.
   ========================================================= */
const PORTFOLIO = {
  shortName: "Sanjana",
  tagline:
    "Content creator, designer and Web Development student at SRH Berlin. I film, edit, design and build — and I know first-hand what international students want to see.",

  email: "100010081@stud.srh-university.de",
  socials: [
    { label: "GitHub", url: "https://github.com/sanjana-harichandran/MY-ART-SPACE" },
  ],

  tools: ["CapCut", "Canva", "Procreate", "Instagram Reels", "TikTok", "HTML / CSS / JavaScript", "Teamwork & events"],

  about: [
    "I'm Sanjana, from India and now in Berlin, studying for a Bachelor's in Web Development at SRH Berlin. I'm also part of the campus student ambassador team, welcoming new students and representing the university.",
    "Outside class I create content: Instagram edits and short videos in CapCut, social posts in Canva and digital art in Procreate. I love spotting trends and turning everyday moments into something people want to watch and share.",
    "This site is built with HTML, CSS and JavaScript and hosted on GitHub Pages. I customised it and added all my own work.",
  ],

  facts: [
    { label: "Studying", value: "B.Sc. Web Development, SRH Berlin" },
    { label: "Campus role", value: "Student Ambassador, SRH Berlin" },
    { label: "International experience", value: "India → USA (College of Charleston, 1 year) → Germany" },
    { label: "Languages", value: "English (professional), German (A2, Goethe-Institut)" },
    { label: "Based in", value: "Berlin" },
  ],

  /* WORK ITEMS
     type:  "video" | "design" | "art"
     img:   path to an image, e.g. "assets/images/poster.jpg" (also used as video cover)
     video: path to an mp4, e.g. "assets/videos/reel1.mp4"   (optional)
     youtube: a YouTube video ID, e.g. "dQw4w9WgXcQ"           (optional)
     link:  an Instagram/TikTok URL                            (optional)
     stat:  e.g. "12k views" — remove if you don't have one
     Leave img empty ("") to show a placeholder. */
  work: [
    { type: "video", title: "Autumn walk", tool: "CapCut", desc: "Short cinematic reel of an autumn walk by the water, shot on my phone and edited in CapCut.", img: "assets/images/video-2-cover.jpg", video: "assets/videos/video-2.mp4" },
    { type: "video", title: "Golden streets", tool: "CapCut", desc: "Autumn street scenes cut into a calm, seasonal mood reel.", img: "assets/images/video-1-cover.jpg", video: "assets/videos/video-1.mp4" },
    { type: "design", title: "Year-End Recap 2025", tool: "Canva", desc: "Scrapbook-style cover for an Instagram year-in-review carousel.", img: "assets/images/wrapped-poster.jpg" },
    { type: "design", title: "Die FilterFlasche", tool: "Canva · in German", desc: "8-slide product pitch for a sustainable filter bottle: problem, product, target groups and call to action.", img: "assets/images/filterflasche-1.jpg", wide: true, stat: "8 slides · click to browse",
      gallery: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `assets/images/filterflasche-${n}.jpg`) },
    { type: "design", title: "6 Ways to Celebrate Yourself", tool: "Canva animation", desc: "Animated self-care post with an illustrated icon layout and handwritten-style type.", img: "assets/images/celebrate-yourself-cover.jpg", video: "assets/videos/celebrate-yourself.mp4" },
    { type: "design", title: "Vintage collage poster", tool: "Canva", desc: "Layered scrapbook collage mixing architecture, maps, florals and handwritten textures.", img: "assets/images/poster.jpg" },
    { type: "art", title: "Butterfly in bloom", tool: "Procreate", desc: "Hand-drawn illustration: half wing, half blossom.", img: "assets/images/butterfly.jpg" },
    { type: "art", title: "Black cat", tool: "Procreate animation", desc: "Frame-by-frame animated GIF of a blinking black cat.", img: "assets/images/black-cat.gif" },
    { type: "art", title: "Chocochip cookie recipe", tool: "Procreate", desc: "Illustrated single-serve recipe card with hand-drawn ingredients.", img: "assets/images/choco-cookie.jpg" },
  ],

  ideas: [
    {
      title: "\"Things nobody told me before moving to Berlin\"",
      hook: "\"I moved from India to Berlin 2 months ago. Here are 5 things I wish I'd known…\"",
      format: "Reel / TikTok series, 30–45 sec",
      audience: "Prospective students in India & South Asia",
      why: "Relatable, honest and easy to share. It builds trust before people apply.",
    },
    {
      title: "Anmeldung, bank account, tax ID: the survival guide",
      hook: "\"Your first 2 weeks in Germany, step by step. Save this.\"",
      format: "Instagram carousel + story Q&A",
      audience: "Admitted students preparing to arrive",
      why: "People save and share useful content, and it leads naturally to a webinar sign-up.",
    },
    {
      title: "\"Ask a student\" at Open Day",
      hook: "\"Why did you choose Berlin?\" (quick-fire answers from students around the world)",
      format: "Street-style interview Reels filmed at events",
      audience: "Prospective students & parents",
      why: "Turns every Open Day into weeks of authentic, multilingual content.",
    },
  ],
};

/* ================= RENDERING (no need to edit) ================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const label = { video: "Video", design: "Design", art: "Digital art" };

document.querySelectorAll('[data-field="shortName"]').forEach((el) => (el.textContent = PORTFOLIO.shortName));
$('[data-field="tagline"]').textContent = PORTFOLIO.tagline;
$("#tools").innerHTML = PORTFOLIO.tools.map((t) => `<li>${esc(t)}</li>`).join("");
$("#about-text").innerHTML = PORTFOLIO.about.map((p) => `<p>${esc(p)}</p>`).join("");
$("#facts").innerHTML = PORTFOLIO.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("");
$("#email-btn").href = `mailto:${PORTFOLIO.email}`;
$("#email-btn").textContent = PORTFOLIO.email.startsWith("[") ? "Email me" : PORTFOLIO.email;
$("#socials").innerHTML = PORTFOLIO.socials
  .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
  .join("");
$("#year").textContent = new Date().getFullYear();

$("#ideas-list").innerHTML = PORTFOLIO.ideas
  .map(
    (i, n) => `<article class="idea">
      <div class="num">0${n + 1}</div>
      <h3>${esc(i.title)}</h3>
      <p class="hook">${esc(i.hook)}</p>
      <dl><dt>Format</dt><dd>${esc(i.format)}</dd><dt>For</dt><dd>${esc(i.audience)}</dd><dt>Why</dt><dd>${esc(i.why)}</dd></dl>
    </article>`
  )
  .join("");

function thumbHTML(w) {
  if (w.img) return `<img src="${esc(w.img)}" alt="${esc(w.title)}" loading="lazy">`;
  if (w.video) return `<video src="${esc(w.video)}#t=0.5" muted playsinline preload="metadata"></video>`;
  return `<div class="placeholder ph-${w.type}">${esc(label[w.type])}<br>coming here</div>`;
}

$("#grid").innerHTML = PORTFOLIO.work
  .map(
    (w, i) => `<button class="card ${w.type}${w.wide ? " wide" : ""}" data-type="${w.type}" data-i="${i}" aria-label="Open ${esc(w.title)}">
      <div class="thumb">${thumbHTML(w)}${w.video ? '<span class="play" aria-hidden="true"></span>' : ""}${w.gallery ? `<span class="badge">${w.gallery.length} slides</span>` : ""}</div>
      <div class="card-body">
        <span class="tag">${esc(w.tool || label[w.type])}</span>
        <h3>${esc(w.title)}</h3>
        ${w.desc ? `<p>${esc(w.desc)}</p>` : ""}
        ${w.stat ? `<span class="stat">${esc(w.stat)}</span>` : ""}
      </div>
    </button>`
  )
  .join("");

// Filters
document.querySelectorAll(".chip").forEach((chip) =>
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
    const f = chip.dataset.filter;
    document.querySelectorAll(".card").forEach((c) => c.classList.toggle("hidden", f !== "all" && c.dataset.type !== f));
  })
);

// Lightbox
const lb = $("#lightbox"), lbMedia = $("#lb-media"), lbCap = $("#lb-caption");
let lastFocus = null, gal = null, gi = 0;
const lbPrev = $("#lb-prev"), lbNext = $("#lb-next");
function showSlide() {
  lbMedia.innerHTML = `<img src="${esc(gal.list[gi])}" alt="${esc(gal.title)}, slide ${gi + 1}">`;
  $("#lb-count").textContent = `${gi + 1} / ${gal.list.length}`;
}
function step(d) { if (!gal) return; gi = (gi + d + gal.list.length) % gal.list.length; showSlide(); }
function openItem(w) {
  // Instagram/TikTok links with no local video: open in a new tab
  if (w.link && !w.video && !w.youtube) { window.open(w.link, "_blank", "noopener"); return; }
  let media;
  if (w.youtube) media = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(w.youtube)}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen title="${esc(w.title)}"></iframe>`;
  else if (w.video) media = `<video src="${esc(w.video)}" ${w.img ? `poster="${esc(w.img)}"` : ""} controls autoplay playsinline></video>`;
  else if (w.gallery) media = "";
  else if (w.img) media = `<img src="${esc(w.img)}" alt="${esc(w.title)}">`;
  else media = `<div class="placeholder ph-${w.type}">${esc(label[w.type])}<br>coming here</div>`;
  lbMedia.innerHTML = media;
  gal = w.gallery ? { list: w.gallery, title: w.title } : null; gi = 0;
  lb.classList.toggle("has-gallery", !!gal);
  $("#lb-count").textContent = "";
  if (gal) showSlide();
  lbCap.innerHTML = `<strong>${esc(w.title)}</strong>${w.desc ? ` · ${esc(w.desc)}` : ""}${w.link ? ` · <a href="${esc(w.link)}" target="_blank" rel="noopener">View original</a>` : ""}`;
  lastFocus = document.activeElement;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  $("#lb-close").focus();
}
function closeLB() {
  lb.hidden = true;
  lbMedia.innerHTML = ""; gal = null;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
$("#grid").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openItem(PORTFOLIO.work[card.dataset.i]);
});
$("#lb-close").addEventListener("click", closeLB);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
lbPrev.addEventListener("click", () => step(-1));
lbNext.addEventListener("click", () => step(1));
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLB();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Nav border on scroll
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
