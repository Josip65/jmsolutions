# JM Solutions — Zavarivanje i Elektrika (web stranica)

Statička web stranica za firmu koja se bavi zavarivanjem i elektroinstalacijama.
Višejezična (hrvatski / engleski / njemački), s blogom kojeg admin uređuje preko Decap CMS-a.
**100% besplatno** za hosting (Netlify + GitHub).

---

## Što stranica ima

- Naslovnica, O nama, Usluge, Reference, Novosti (blog), Kontakt
- 3 jezika s prekidačem gore desno (HR/EN/DE) — izbor se pamti u pregledniku
- Blog: članci se učitavaju iz `blog/posts.json` (admin ih uređuje bez koda)
- Reference: projekti se učitavaju iz `references.json` (admin može dodavati slike i tekst)
- Admin panel na `/admin/` (Decap CMS) — login, pisanje članaka, dodavanje referenci, automatski deploy
- Kontakt forma radi na Netlifyju besplatno (poruke stižu na email)
- Responzivna (radi na mobitelu i desktopu)

---

## Struktura

```
jurahura/
├── index.html          naslovnica
├── about.html          o nama
├── services.html       usluge
├── references.html     reference
├── blog.html           lista članaka
├── article.html        prikaz jednog članka (?id=...)
├── contact.html        kontakt + forma
├── css/style.css       dizajn
├── js/i18n.js          prijevodi (HR/EN/DE) + prekidač jezika
├── js/main.js          navigacija, forma, footer
├── js/blog.js          blog (čita blog/posts.json)
├── js/references.js    reference (čita references.json)
├── blog/posts.json     SVI članci (admin ovo uređuje preko CMS-a)
├── references.json     SVE reference (admin ovo uređuje preko CMS-a)
├── admin/index.html    Decap CMS admin panel
├── admin/config.yml    konfiguracija CMS-a
├── netlify.toml        postavke za Netlify
└── images/uploads/     slike koje admin uploada kroz CMS
```

---

## Kako pokrenuti lokalno (da vidiš stranicu)

```bash
# u mapi projekta:
python3 -m http.server 8000
# otvori http://localhost:8000
```

> Blog i CMS ne rade otvaranjem `index.html` direktno (file://) jer browser blokira fetch.
> Zato pokreni lokalni server kao gore.

---

## Kako staviti online BESPLATNO (10 minuta)

### 1. Napravi GitHub račun (besplatno)
https://github.com — ako već nemaš.

### 2. Stavi projekt na GitHub
Najlakše: napravi novi repozitorij `jmsolutions`, zatim gurni datoteke:
```bash
git init
git add .
git commit -m "Prva verzija stranice"
git branch -M main
git remote add origin https://github.com/Josip65/jmsolutions.git
git push -u origin main
```

### 3. Promijeni jedan red u admin/config.yml
Otvori `admin/config.yml` i u redu `repo:` stavi svoj repozitorij:
```yaml
repo: Josip65/jmsolutions
```

### 4. Spoji Netlify s GitHubom
1. Idi na https://app.netlify.com → "Add new site" → "Import an existing project"
2. Odaberi GitHub i svoj `jurahura` repozitorij
3. Postavke:
   - Build command: (prazno)
   - Publish directory: `.`
4. Klikni "Deploy site" — stranica je online na `nešto.netlify.app`

### 5. Uključi GitHub auth za admin panel
U Netlify: **Site settings → Access control → OAuth → GitHub** instaliraj Netlify GitHub app.
Tako se admin može prijaviti na `/admin/` preko GitHuba.

### 6. (Opcija) Tvoja domena
U Netlify "Domain settings" možeš spojiti vlastitu domenu (npr. `jmsolutions.hr`).
Domena košta ~10€/god kod registrara (npr. Namecheap, Cloudflare, Net.hr) — hosting ostaje besplatan.

---

## Kako admin dodaje članke (jednom tjedno/mjesečno)

1. Otvori `https://tvoja-stranica.netlify.app/admin/`
2. Prijavi se preko GitHub gumba
3. Klikni "Popis članaka" → "Add new"
4. Ispuni: ID (npr. `novi-savjet`), datum, kategoriju, naslov/sažetak/tekst za HR, EN, DE
   (EN i DE mogu ostati prazni — tada se prikazuje hrvatska verzija)
5. Klikni "Publish" → članak je odmah na stranici

Nije potrebno znanje koda, HTML-a ni Git-a.

---

## Kako dodati vlastiti tekst (bez CMS-a)
Otvori `blog/posts.json` i dodaj novi objekt u `posts` niz po istom uzorku.

---

## Kako promijeniti tekstove na stranicama (O nama, Usluge…)
Svi tekstovi su u `js/i18n.js` u `I18N` objektu (hr/en/de). Promijeni vrijednost i spremi.

## Kako promijeniti boje
U `css/style.css` gore u `:root` — `--accent` (zavarivačka iskra) i `--electric` (struja).

## Kako promijeniti kontakt podatke
U `js/i18n.js` ključevi `contact.*.val` (adresa, telefon, email, radno vrijeme).

---

## Napomene
- Slike za članke: admin ih uploada kroz CMS u `images/uploads/`. Trenutno članci nemaju
  naslovne slike (placeholder). Ako želiš slike, dodaj `image` polje u `admin/config.yml`.
- Kontakt forma: na Netlifyju automatski šalje na email koji postaviš u Netlify dashboardu
  (Forms → Notifications). Lokalno samo pokaže poruku "Hvala!".
- CMS lokalno: `local_backend: true` omogućuje testiranje admina na localhostu bez GitHuba
  (pokreni `npx decap-server` uz lokalni server).
