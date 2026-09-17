/* ===== JM Solutions — blog (čita blog/posts.json) ===== */
// Arhitektura: sve članke držimo u jednoj JSON datoteci (blog/posts.json).
// Admin ih uređuje preko Decap CMS-a (admin/). Ne treba build korak.

const CAT_KEYS = {
  welding: { hr: "cat.welding", en: "cat.welding", de: "cat.welding" },
  electrical: { hr: "cat.electrical", en: "cat.electrical", de: "cat.electrical" },
  safety: { hr: "cat.safety", en: "cat.safety", de: "cat.safety" },
  news: { hr: "cat.news", en: "cat.news", de: "cat.news" }
};

function t(key) {
  const lang = document.documentElement.dataset.lang || "hr";
  // pristup global I18N objektu iz js/i18n.js
  if (I18N && I18N[lang] && I18N[lang][key] !== undefined) return I18N[lang][key];
  return key;
}

function formatDate(iso, lang) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  const locale = { hr: "hr-HR", en: "en-GB", de: "de-DE" }[lang] || "hr-HR";
  return d.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
}

function pickLangField(post, base, lang) {
  // post ima npr. title_hr, title_en, title_de; ako nedostaje, fallback na hr pa na prvi dostupni
  const order = [lang, "hr", "en", "de"];
  for (const l of order) {
    const val = post[base + "_" + l];
    if (val && val.trim()) return val;
  }
  return "";
}

async function fetchPosts() {
  try {
    const res = await fetch("blog/posts.json", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  } catch (e) {
    console.warn("Ne mogu učitati posts.json", e);
    return [];
  }
}

function renderCategory(cat) {
  const key = (CAT_KEYS[cat] || CAT_KEYS.news)[document.documentElement.dataset.lang || "hr"];
  return t(key);
}

// --- Lista članaka (blog.html) ---
async function renderBlogList() {
  const grid = document.querySelector("#blog-grid");
  if (!grid) return;
  const lang = document.documentElement.dataset.lang || "hr";
  const posts = await fetchPosts();
  if (!posts.length) {
    grid.innerHTML = `<p class="center" style="color:var(--text-dim)">${t("blog.empty")}</p>`;
    return;
  }
  grid.innerHTML = posts.map(p => {
    const title = pickLangField(p, "title", lang);
    const excerpt = pickLangField(p, "excerpt", lang);
    const cat = renderCategory(p.category);
    return `
      <article class="post-card">
        <div class="thumb"><span class="cat">${cat}</span></div>
        <div class="body">
          <div class="meta">${formatDate(p.date, lang)}</div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(excerpt)}</p>
          <a class="read" href="article.html?id=${encodeURIComponent(p.id)}">${t("blog.readmore")} →</a>
        </div>
      </article>`;
  }).join("");
}

// --- Pojedinačni članak (article.html) ---
async function renderArticle() {
  const root = document.querySelector("#article");
  if (!root) return;
  const lang = document.documentElement.dataset.lang || "hr";
  const id = new URLSearchParams(location.search).get("id");
  if (!id) { root.innerHTML = `<p>${t("blog.empty")}</p>`; return; }
  const posts = await fetchPosts();
  const post = posts.find(p => String(p.id) === String(id));
  if (!post) { root.innerHTML = `<p>${t("blog.empty")}</p>`; return; }
  const title = pickLangField(post, "title", lang);
  const body = pickLangField(post, "body", lang);
  const cat = renderCategory(post.category);
  root.innerHTML = `
    <a class="back" href="blog.html">${t("blog.back")}</a>
    <span class="meta" style="display:block;margin-bottom:6px;color:var(--accent);font-weight:700;font-size:.8rem;text-transform:uppercase;letter-spacing:1px">${cat}</span>
    <h1>${escapeHtml(title)}</h1>
    <div class="meta">${formatDate(post.date, lang)}</div>
    <div class="cover"></div>
    <div class="content">${markdownToHtml(body)}</div>
  `;
  document.title = `${title} — JM Solutions`;
}

// --- Minimalni markdown → HTML (naslovi, paragrafi, liste, bold) ---
function markdownToHtml(md) {
  if (!md) return "<p></p>";
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;
  for (let raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) { if (inList) { html += "</ul>"; inList = false; } continue; }
    let m;
    if (m = line.match(/^###\s+(.*)/)) { if (inList) { html += "</ul>"; inList = false; } html += `<h3>${inline(m[1])}</h3>`; }
    else if (m = line.match(/^##\s+(.*)/)) { if (inList) { html += "</ul>"; inList = false; } html += `<h2>${inline(m[1])}</h2>`; }
    else if (m = line.match(/^#\s+(.*)/)) { if (inList) { html += "</ul>"; inList = false; } html += `<h2>${inline(m[1])}</h2>`; }
    else if (m = line.match(/^[-*]\s+(.*)/)) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${inline(m[1])}</li>`; }
    else { if (inList) { html += "</ul>"; inList = false; } html += `<p>${inline(line)}</p>`; }
  }
  if (inList) html += "</ul>";
  return html;
}
function inline(s) {
  return escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// --- Render ovisno o stranici + re-render na promjenu jezika ---
document.addEventListener("DOMContentLoaded", () => {
  renderBlogList();
  renderArticle();
});
document.addEventListener("langchange", () => {
  renderBlogList();
  renderArticle();
});
