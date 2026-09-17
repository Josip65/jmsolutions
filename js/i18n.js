/* ===== JM Solutions — i18n (HR / EN / DE) ===== */
// Sve tekstove držimo ovdje. Elementi s data-i18n="key" dobivaju prijevod.
// Elementi s data-i18n-html koriste innerHTML (ako imaš <strong> i sl.).

const I18N = {
  hr: {
    "nav.home": "Naslovnica",
    "nav.about": "O nama",
    "nav.services": "Usluge",
    "nav.references": "Reference",
    "nav.blog": "Novosti",
    "nav.contact": "Kontakt",

    "brand.name": "JM SOLUTIONS",
    "brand.tag": "ZAVARIVANJE • ELEKTROINSTALACIJE",

    "hero.title1": "Precizno zavarivanje i",
    "hero.title2": "kompletno elektroinstalaterske usluge",
    "hero.lead": "Vaš pouzdani partner za zavarivanje i elektroinstalacije. Certificirani stručnjaci, kvalitetno rješenje i usluga na koju se možete osloniti.",
    "hero.cta1": "Zatražite ponudu",
    "hero.cta2": "Naše usluge",
    "hero.stat1.num": "2025",
    "hero.stat1.lbl": "Godina osnivanja",
    "hero.stat2.num": "850+",
    "hero.stat2.lbl": "Završenih projekata",
    "hero.stat3.num": "24/7",
    "hero.stat3.lbl": "Hitne intervencije",
    "hero.badge": "Stručno i kvalitetno izvedeno",

    "services.eyebrow": "Što radimo",
    "services.title": "Usluge po mjeri za industriju i kućanstva",
    "services.sub": "Od sitnih popravaka do velikih industrijskih projekata — pokrivamo cijeli spektar zavarivanja i elektroinstalacija.",

    "services.weld.title": "Zavarivanje",
    "services.weld.desc": "MIG/MAG, TIG i relno zavarivanje čelika, aluminija i nehrđajućeg materijala. Mobilna usluga na terenu.",
    "services.weld.more": "Saznajte više",

    "services.elec.title": "Elektroinstalacije",
    "services.elec.desc": "Kompletno elektroinstalaterske radove: razvodne table, instalacije, javna rasvjeta i održavanje.",
    "services.elec.more": "Saznajte više",

    "services.industrial.title": "Industrijski radovi",
    "services.industrial.desc": "Zavarivanje konstrukcija, cjevovoda i rezervoara za industrijske objekte i proizvodne hale.",
    "services.industrial.more": "Saznajte više",

    "services.maintenance.title": "Održavanje i servisi",
    "services.maintenance.desc": "Redovito održavanje elektroinstalacija i zavarenih konstrukcija. Hitne intervencije 24/7.",
    "services.maintenance.more": "Saznajte više",

    "about.eyebrow": "Tko smo",
    "about.title": "Stručna firma s modernim pristupom i certificiranim timom",
    "about.lead": "JM Solutions d.o.o. osnovana je 2025. godine. Specijalizirana je za zavarivanje i elektroinstalacije, a kombinira stručno iskustvo tima, certificirane postupke i pouzdanu uslugu.",
    "about.b1": "Certificirani i iskusni zavarivači",
    "about.b2": "Licencirani elektroinstalateri",
    "about.b3": "Mobilna usluga na cijelom području",
    "about.b4": "Nosive čelične konstrukcije i konstrukcijski radovi",
    "about.cta": "Upoznajte naš tim",
    "about.stats.title": "Osnivanje • Certifikacija • Dostupnost",
    "about.stats.sub": "Ključni podaci o našem poslovanju i stručnosti.",
    "about.stat2.lbl": "Čelične konstrukcije i zavarivanje",

    "ref.eyebrow": "Reference",
    "ref.title": "Projekti na koje smo ponosni",
    "ref.sub": "Pogledajte izbor realiziranih projekata iz industrije, graditeljstva i privatnog sektora.",

    "blog.eyebrow": "Novosti",
    "blog.title": "Savjeti, vijesti i zanimljivosti",
    "blog.sub": "Pratite naše članke o zavarivanju, elektrici i sigurnosti na radu.",
    "blog.empty": "Trenutno nema objavljenih članaka. Provjerite uskoro!",
    "blog.readmore": "Pročitaj više",
    "blog.back": "← Natrag na novosti",

    "cta.title": "Imate projekt u planu? Javite se.",
    "cta.sub": "Besplatna procjena i ponuda unutar 24 sata. Pozovite ili pošaljite upit.",
    "cta.btn1": "Zatražite ponudu",
    "cta.btn2": "Pozovite nas",

    "contact.title": "Stupite u kontakt",
    "contact.sub": "Tu smo za sva vaša pitanja. Odgovaramo u najkraćem mogućem roku.",
    "contact.name": "Ime i prezime",
    "contact.email": "Email adresa",
    "contact.phone": "Telefon",
    "contact.subject": "Tema",
    "contact.message": "Poruka",
    "contact.send": "Pošalji upit",
    "contact.sent": "Hvala! Vaš upit je zabilježen. Kontaktirat ćemo vas uskoro.",
    "contact.addr.lbl": "Adresa",
    "contact.addr.val": "Malica 65, 35212 Zadubravlje",
    "contact.phone.lbl": "Telefon",
    "contact.phone.val": "+385 97 6732 933",
    "contact.email.lbl": "Email",
    "contact.email.val": "Info@jmsolutions.hr",
    "contact.hours.lbl": "Radno vrijeme",
    "contact.hours.val": "Pon–Pet 7:00–17:00",
    "contact.emergency.lbl": "Hitne intervencije",
    "contact.emergency.val": "+385 97 7947 028 (24/7)",

    "footer.about": "JM Solutions d.o.o.\nZavarivanje i elektroinstalacije\nMalica 65, 35212 Zadubravlje\nOIB: 22390410169\nIBAN: HR3523400091111340239",
    "footer.nav": "Navigacija",
    "footer.services": "Usluge",
    "footer.contact": "Kontakt",
    "footer.rights": "Sva prava pridržana.",
    "footer.made": "Napravljeno s",

    "page.about.title": "O našoj firmi",
    "page.about.sub": "Stručnost u zavarivanju i elektroinstalacijama.",
    "page.services.title": "Naše usluge",
    "page.services.sub": "Kompletan spektar zavarivanja i elektroinstalaterskih radova.",
    "page.references.title": "Naše reference",
    "page.references.sub": "Pogledajte projekte koje smo realizirali.",
    "page.blog.title": "Novosti i članci",
    "page.blog.sub": "Savjeti, vijesti i zanimljivosti iz svijeta zavarivanja i struje.",
    "page.contact.title": "Kontakt",
    "page.contact.sub": "Javite nam se — rado ćemo odgovoriti na sva pitanja.",

    "cat.welding": "Zavarivanje",
    "cat.electrical": "Elektrika",
    "cat.safety": "Sigurnost",
    "cat.news": "Vijesti",

    "ref.tag.industrial": "Industrija",
    "ref.tag.residential": "Kućanstvo",
    "ref.tag.infrastructure": "Infrastruktura",
    "ref.tag.maintenance": "Održavanje",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.references": "References",
    "nav.blog": "News",
    "nav.contact": "Contact",

    "brand.name": "JURAHURA",
    "brand.tag": "WELDING • ELECTRICAL",

    "hero.title1": "Precision welding and",
    "hero.title2": "complete electrical services",
    "hero.lead": "Your trusted partner for welding and electrical installations. Certified specialists, quality solutions and service you can rely on.",
    "hero.cta1": "Request a quote",
    "hero.cta2": "Our services",
    "hero.stat1.num": "2025",
    "hero.stat1.lbl": "Founded",
    "hero.stat2.num": "850+",
    "hero.stat2.lbl": "Completed projects",
    "hero.stat3.num": "24/7",
    "hero.stat3.lbl": "Emergency service",
    "hero.badge": "Professional and high-quality workmanship",

    "services.eyebrow": "What we do",
    "services.title": "Tailored services for industry and households",
    "services.sub": "From small repairs to large industrial projects — we cover the full spectrum of welding and electrical work.",

    "services.weld.title": "Welding",
    "services.weld.desc": "MIG/MAG, TIG and arc welding of steel, aluminium and stainless steel. Mobile on-site service.",
    "services.weld.more": "Learn more",

    "services.elec.title": "Electrical installations",
    "services.elec.desc": "Complete electrical work: distribution boards, wiring, public lighting and maintenance.",
    "services.elec.more": "Learn more",

    "services.industrial.title": "Industrial work",
    "services.industrial.desc": "Welding of structures, pipelines and tanks for industrial facilities and production halls.",
    "services.industrial.more": "Learn more",

    "services.maintenance.title": "Maintenance & service",
    "services.maintenance.desc": "Regular maintenance of electrical installations and welded structures. 24/7 emergency response.",
    "services.maintenance.more": "Learn more",

    "about.eyebrow": "Who we are",
    "about.title": "A professional company with a modern approach and a certified team",
    "about.lead": "JM Solutions d.o.o. was founded in 2025. We specialise in welding and electrical installations, combining professional experience, certified procedures and reliable service.",
    "about.b1": "Certified and experienced welders",
    "about.b2": "Licensed electricians",
    "about.b3": "Mobile service across the region",
    "about.b4": "Load-bearing steel structures and structural work",
    "about.cta": "Meet our team",
    "about.stats.title": "Founded • Certification • Availability",
    "about.stats.sub": "Key facts about our business and expertise.",
    "about.stat2.lbl": "Steel structures and welding",

    "ref.eyebrow": "References",
    "ref.title": "Projects we are proud of",
    "ref.sub": "Take a look at a selection of completed projects from industry, construction and the private sector.",

    "blog.eyebrow": "News",
    "blog.title": "Tips, news and insights",
    "blog.sub": "Follow our articles on welding, electricity and workplace safety.",
    "blog.empty": "No articles published yet. Check back soon!",
    "blog.readmore": "Read more",
    "blog.back": "← Back to news",

    "cta.title": "Planning a project? Get in touch.",
    "cta.sub": "Free assessment and quote within 24 hours. Call or send an inquiry.",
    "cta.btn1": "Request a quote",
    "cta.btn2": "Call us",

    "contact.title": "Get in touch",
    "contact.sub": "We're here for all your questions. We respond as quickly as possible.",
    "contact.name": "Full name",
    "contact.email": "Email address",
    "contact.phone": "Phone",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send inquiry",
    "contact.sent": "Thank you! Your inquiry has been recorded. We'll contact you soon.",
    "contact.addr.lbl": "Address",
    "contact.addr.val": "Malica 65, 35212 Zadubravlje",
    "contact.phone.lbl": "Phone",
    "contact.phone.val": "+385 97 6732 933",
    "contact.email.lbl": "Email",
    "contact.email.val": "Info@jmsolutions.hr",
    "contact.hours.lbl": "Working hours",
    "contact.hours.val": "Mon–Fri 7:00–17:00",
    "contact.emergency.lbl": "Emergency service",
    "contact.emergency.val": "+385 97 7947 028 (24/7)",

    "footer.about": "JM Solutions d.o.o.\nWelding and electrical installations\nMalica 65, 35212 Zadubravlje\nVAT No: 22390410169\nIBAN: HR3523400091111340239",
    "footer.nav": "Navigation",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made with",

    "page.about.title": "About our company",
    "page.about.sub": "Expertise in welding and electrical work.",
    "page.services.title": "Our services",
    "page.services.sub": "The full spectrum of welding and electrical work.",
    "page.references.title": "Our references",
    "page.references.sub": "See the projects we have delivered.",
    "page.blog.title": "News & articles",
    "page.blog.sub": "Tips, news and insights from the world of welding and electricity.",
    "page.contact.title": "Contact",
    "page.contact.sub": "Get in touch — we'll gladly answer all your questions.",

    "cat.welding": "Welding",
    "cat.electrical": "Electrical",
    "cat.safety": "Safety",
    "cat.news": "News",

    "ref.tag.industrial": "Industrial",
    "ref.tag.residential": "Residential",
    "ref.tag.infrastructure": "Infrastructure",
    "ref.tag.maintenance": "Maintenance",
  },

  de: {
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.references": "Referenzen",
    "nav.blog": "News",
    "nav.contact": "Kontakt",

    "brand.name": "JURAHURA",
    "brand.tag": "SCHWEISSEN • ELEKTRIK",

    "hero.title1": "Präzisionsschweißen und",
    "hero.title2": "komplette Elektrodienstleistungen",
    "hero.lead": "Ihr verlässlicher Partner für Schweißen und Elektroinstallationen. Zertifizierte Fachkräfte, qualitativ hochwertige Lösungen und Service, auf den Sie sich verlassen können.",
    "hero.cta1": "Angebot anfordern",
    "hero.cta2": "Unsere Leistungen",
    "hero.stat1.num": "2025",
    "hero.stat1.lbl": "Gegründet",
    "hero.stat2.num": "850+",
    "hero.stat2.lbl": "Abgeschlossene Projekte",
    "hero.stat3.num": "24/7",
    "hero.stat3.lbl": "Notdienst",
    "hero.badge": "Fachmännisch und qualitativ hochwertig ausgeführt",

    "services.eyebrow": "Was wir tun",
    "services.title": "Maßgeschneiderte Leistungen für Industrie und Haushalte",
    "services.sub": "Von kleinen Reparaturen bis zu großen Industrieprojekten — wir decken das gesamte Spektrum von Schweißen und Elektroarbeiten ab.",

    "services.weld.title": "Schweißen",
    "services.weld.desc": "MIG/MAG-, WIG- und Lichtbogenschweißen von Stahl, Aluminium und Edelstahl. Mobiler Service vor Ort.",
    "services.weld.more": "Mehr erfahren",

    "services.elec.title": "Elektroinstallationen",
    "services.elec.desc": "Komplette Elektroarbeiten: Verteilertafeln, Verkabelung, öffentliche Beleuchtung und Wartung.",
    "services.elec.more": "Mehr erfahren",

    "services.industrial.title": "Industriearbeiten",
    "services.industrial.desc": "Schweißen von Konstruktionen, Rohrleitungen und Tanks für Industrieanlagen und Produktionshallen.",
    "services.industrial.more": "Mehr erfahren",

    "services.maintenance.title": "Wartung & Service",
    "services.maintenance.desc": "Regelmäßige Wartung von Elektroinstallationen und Schweißkonstruktionen. 24/7-Notdienst.",
    "services.maintenance.more": "Mehr erfahren",

    "about.eyebrow": "Wer wir sind",
    "about.title": "Ein professionelles Unternehmen mit modernem Ansatz und zertifiziertem Team",
    "about.lead": "JM Solutions d.o.o. wurde 2025 gegründet. Wir sind auf Schweißen und Elektroinstallationen spezialisiert und verbinden Fachwissen, zertifizierte Verfahren und zuverlässigen Service.",
    "about.b1": "Zertifizierte und erfahrene Schweißer",
    "about.b2": "Lizenzierte Elektriker",
    "about.b3": "Mobiler Service in der gesamten Region",
    "about.b4": "Tragende Stahlkonstruktionen und Konstruktionsarbeiten",
    "about.cta": "Lernen Sie unser Team kennen",
    "about.stats.title": "Gründung • Zertifizierung • Verfügbarkeit",
    "about.stats.sub": "Wichtige Fakten zu unserem Unternehmen und Fachwissen.",
    "about.stat2.lbl": "Stahlkonstruktionen und Schweißen",

    "ref.eyebrow": "Referenzen",
    "ref.title": "Projekte, auf die wir stolz sind",
    "ref.sub": "Werfen Sie einen Blick auf eine Auswahl abgeschlossener Projekte aus Industrie, Bau und Privatsektor.",

    "blog.eyebrow": "News",
    "blog.title": "Tipps, Neuigkeiten und Einblicke",
    "blog.sub": "Verfolgen Sie unsere Artikel über Schweißen, Elektrik und Arbeitssicherheit.",
    "blog.empty": "Derzeit keine Artikel veröffentlicht. Schauen Sie bald wieder vorbei!",
    "blog.readmore": "Weiterlesen",
    "blog.back": "← Zurück zu News",

    "cta.title": "Ein Projekt geplant? Melden Sie sich.",
    "cta.sub": "Kostenlose Bewertung und Angebot innerhalb von 24 Stunden. Anrufen oder Anfrage senden.",
    "cta.btn1": "Angebot anfordern",
    "cta.btn2": "Anrufen",

    "contact.title": "Nehmen Sie Kontakt auf",
    "contact.sub": "Wir sind für all Ihre Fragen da. Wir antworten so schnell wie möglich.",
    "contact.name": "Vor- und Nachname",
    "contact.email": "E-Mail-Adresse",
    "contact.phone": "Telefon",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Anfrage senden",
    "contact.sent": "Danke! Ihre Anfrage wurde erfasst. Wir melden uns in Kürze bei Ihnen.",
    "contact.addr.lbl": "Adresse",
    "contact.addr.val": "Malica 65, 35212 Zadubravlje",
    "contact.phone.lbl": "Telefon",
    "contact.phone.val": "+385 97 6732 933",
    "contact.email.lbl": "E-Mail",
    "contact.email.val": "Info@jmsolutions.hr",
    "contact.hours.lbl": "Öffnungszeiten",
    "contact.hours.val": "Mo–Fr 7:00–17:00",
    "contact.emergency.lbl": "Notdienst",
    "contact.emergency.val": "+385 97 7947 028 (24/7)",

    "footer.about": "JM Solutions d.o.o.\nSchweißen und Elektroinstallationen\nMalica 65, 35212 Zadubravlje\nUID: 22390410169\nIBAN: HR3523400091111340239",
    "footer.nav": "Navigation",
    "footer.services": "Leistungen",
    "footer.contact": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.made": "Erstellt mit",

    "page.about.title": "Über unser Unternehmen",
    "page.about.sub": "Fachwissen im Schweißen und Elektrobereich.",
    "page.services.title": "Unsere Leistungen",
    "page.services.sub": "Das gesamte Spektrum von Schweißen und Elektroarbeiten.",
    "page.references.title": "Unsere Referenzen",
    "page.references.sub": "Sehen Sie die Projekte, die wir umgesetzt haben.",
    "page.blog.title": "News & Artikel",
    "page.blog.sub": "Tipps, Neuigkeiten und Einblicke aus der Welt des Schweißens und der Elektrik.",
    "page.contact.title": "Kontakt",
    "page.contact.sub": "Melden Sie sich — wir beantworten gerne all Ihre Fragen.",

    "cat.welding": "Schweißen",
    "cat.electrical": "Elektrik",
    "cat.safety": "Sicherheit",
    "cat.news": "News",

    "ref.tag.industrial": "Industrie",
    "ref.tag.residential": "Privat",
    "ref.tag.infrastructure": "Infrastruktur",
    "ref.tag.maintenance": "Wartung",
  }
};

const LANGS = ["hr", "en", "de"];
const DEFAULT_LANG = "hr";

function getCurrentLang() {
  let l = localStorage.getItem("jurahura-lang");
  if (!l || !LANGS.includes(l)) {
    l = (navigator.language || "hr").slice(0, 2);
    if (!LANGS.includes(l)) l = DEFAULT_LANG;
  }
  return l;
}

function applyLang(lang) {
  if (!LANGS.includes(lang)) lang = DEFAULT_LANG;
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // placeholderi
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  // jezični gumbi
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  // atribut za kategorije / tagove koji se rješavaju kasnije (blog)
  document.documentElement.dataset.lang = lang;
  localStorage.setItem("jurahura-lang", lang);

  // obavijesti blog komponentu ako postoji
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getCurrentLang());
  initLangSwitcher();
});
