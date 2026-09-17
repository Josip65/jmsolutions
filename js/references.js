/* ===== JM Solutions — Reference (učita references.json) ===== */

const REF_CATS = {
  industrial: { hr: "ref.tag.industrial", en: "ref.tag.industrial", de: "ref.tag.industrial" },
  residential: { hr: "ref.tag.residential", en: "ref.tag.residential", de: "ref.tag.residential" },
  infrastructure: { hr: "ref.tag.infrastructure", en: "ref.tag.infrastructure", de: "ref.tag.infrastructure" },
  maintenance: { hr: "ref.tag.maintenance", en: "ref.tag.maintenance", de: "ref.tag.maintenance" }
};

function t2(key) {
  const lang = document.documentElement.dataset.lang || "hr";
  if (I18N && I18N[lang] && I18N[lang][key] !== undefined) return I18N[lang][key];
  return key;
}

function pickLangField2(item, base, lang) {
  const order = [lang, "hr", "en", "de"];
  for (const l of order) {
    const val = item[base + "_" + l];
    if (val && val.trim()) return val;
  }
  return "";
}

async function fetchRefs() {
  try {
    const res = await fetch("references.json", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.references || [];
  } catch (e) {
    console.warn("Ne mogu učitati references.json", e);
    return [];
  }
}

function renderCategory2(cat) {
  const key = (REF_CATS[cat] || REF_CATS.industrial)[document.documentElement.dataset.lang || "hr"];
  return t2(key);
}

function refCard(ref, lang) {
  const title = pickLangField2(ref, "title", lang);
  const desc = pickLangField2(ref, "desc", lang);
  const cat = renderCategory2(ref.category);
  const img = ref.image ? `style="background-image:url('${ref.image}');background-size:cover;background-position:center"` : "";
  return `
    <div class="ref-card">
      <div class="thumb" ${img}><span class="tag">${cat}</span></div>
      <div class="body"><h4>${escapeHtml2(title)}</h4><p>${escapeHtml2(desc)}</p></div>
    </div>`;
}

async function renderReferences() {
  const grid = document.querySelector("#refs-grid");
  const preview = document.querySelector("#refs-preview");
  if (!grid && !preview) return;
  const lang = document.documentElement.dataset.lang || "hr";
  const refs = await fetchRefs();
  if (!refs.length) {
    if (grid) grid.innerHTML = `<p class="center" style="color:var(--text-dim)">${t2("ref.sub")}</p>`;
    if (preview) preview.innerHTML = `<p class="center" style="color:var(--text-dim)">${t2("ref.sub")}</p>`;
    return;
  }
  if (grid) grid.innerHTML = refs.map(r => refCard(r, lang)).join("");
  if (preview) preview.innerHTML = refs.slice(0, 3).map(r => refCard(r, lang)).join("");
}

function escapeHtml2(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

document.addEventListener("DOMContentLoaded", () => {
  renderReferences();
});
document.addEventListener("langchange", () => {
  renderReferences();
});
