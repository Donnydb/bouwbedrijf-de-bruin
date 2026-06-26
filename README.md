# Bouwbedrijf De Bruin — website

Productieklare, SEO- en SEA-geoptimaliseerde website voor **Bouwbedrijf De Bruin** (aannemer Leiden e.o.).
Gebouwd met **Astro** (statisch gegenereerd) + **Tailwind CSS v4**, klaar voor deploy op **Netlify**.

> Zustersite: het stukadoorswerk heeft een **aparte website**. De dienst
> "Stukadoorswerk" op deze site is een **externe link** daarnaartoe — zie
> [De klikbare stukadoorswerk-link](#-de-klikbare-stukadoorswerk-link).

---

## 📋 Inhoud

1. [Snelstart](#-snelstart)
2. [Vereisten](#-vereisten)
3. [Lokaal draaien](#-lokaal-draaien)
4. [Projectstructuur](#-projectstructuur)
5. [De klikbare stukadoorswerk-link](#-de-klikbare-stukadoorswerk-link)
6. [⚠️ Eerst invullen vóór live](#️-eerst-invullen-vóór-live)
7. [Tracking instellen (GTM / GA4 / Google Ads)](#-tracking-instellen-gtm--ga4--google-ads)
8. [Deployen op Netlify](#-deployen-op-netlify)
9. [Contactformulier (Netlify Forms)](#-contactformulier-netlify-forms)
10. [Eigen foto's plaatsen](#-eigen-fotos-plaatsen)
11. [SEO-checklist](#-seo-checklist)
12. [Go-live-checklist](#-go-live-checklist)

---

## 🚀 Snelstart

```bash
npm install      # dependencies installeren
npm run dev      # lokale dev-server op http://localhost:4321
npm run build    # productiebuild naar ./dist
npm run preview  # bekijk de productiebuild lokaal
```

## ✅ Vereisten

- **Node.js 20 of 22 (LTS)** en npm. Controleer met `node --version`.
- Geen database of backend nodig — de site is volledig statisch.

## 💻 Lokaal draaien

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Start de dev-server met hot reload op `http://localhost:4321`. |
| `npm run build` | Bouwt de statische site naar `./dist` (incl. sitemap + geoptimaliseerde afbeeldingen). |
| `npm run preview` | Serveert `./dist` lokaal, zodat je de échte build kunt testen. |
| `npm run check` | Astro type-/diagnosecontrole. |

## 📁 Projectstructuur

```
src/
├── data/            ← HIER pas je content & gegevens aan
│   ├── site.ts        NAP, USP's, openingstijden, werkgebied, externalLinks  ⚠️ invullen
│   ├── services.ts    Alle dienst-content (10 diensten; 1 daarvan is een externe link)
│   ├── faq.ts         Veelgestelde vragen (FAQPage-schema)
│   ├── testimonials.ts Klantreviews  ⚠️ vul met echte reviews
│   └── analytics.ts   Tracking-ID's  ⚠️ invullen
├── lib/
│   ├── schema.ts      JSON-LD generators (LocalBusiness/Service/FAQ/Breadcrumb)
│   └── images.ts      Koppelt afbeeldingen aan astro:assets
├── layouts/BaseLayout.astro   <head>, header, footer, tracking-hooks
├── components/        Herbruikbare componenten (Hero, CtaBlock, ServiceCard, …)
├── styles/global.css  Tailwind v4 + design tokens (kleuren, font)
├── pages/             Eén bestand per URL
│   ├── index.astro                Home
│   ├── diensten/index.astro       Diensten-overzicht
│   ├── diensten/[slug].astro      9 dienst-detailpagina's (datagedreven; externe dienst krijgt géén pagina)
│   ├── over-ons.astro · faq.astro · contact.astro · bedankt.astro · 404.astro
└── assets/images/     Bronfoto's (geoptimaliseerd bij build)  ⚠️ vervang placeholders
public/                Statische bestanden (robots.txt, favicon, /og/, _redirects)
astro.config.mjs       site-URL, sitemap, image-config
netlify.toml           Build- en headers-config voor Netlify
```

> **De gouden regel:** bedrijfsgegevens wijzig je op **één** plek — `src/data/site.ts`. Ze stromen automatisch door naar footer, contact, meta-tags en structured data.

---

## 🔗 De klikbare stukadoorswerk-link

Het stukadoorswerk staat op een **aparte website**. Op deze bouwbedrijf-site is
"Stukadoorswerk" daarom geen gewone dienstpagina, maar een **externe link** die
in een nieuw tabblad opent. U herkent hem aan het kleine externe-link-icoon.

De link staat overal waar de dienst verschijnt: in de dienstkaarten (home +
`/diensten/`), in het menu (diensten-dropdown), in de footer, bij "gerelateerde
diensten" en als tekstlink in de homepage-tekst (*"… ook wij stukadoren"*).

**De URL wijzig je op één plek:**

```ts
// src/data/site.ts
externalLinks: {
  stukadoors: 'https://de-bruin-stucadoors.netlify.app', // live Netlify-URL
},
```

> Deze waarde staat op de **live Netlify-URL** van de stukadoorssite. Krijgt die
> site later een eigen domein (bv. `www.stukadoorsdebruin.nl`)? Vervang dan deze
> ene regel.

**Hoe het technisch werkt** (voor wie het wil weten): in `src/data/services.ts`
heeft de dienst `stukadoorswerk` een veld `externalUrl` (= `site.externalLinks.stukadoors`).
De helper `isExternalService()` en `serviceHref()` zorgen dat zo'n dienst overal
extern linkt (met `target="_blank" rel="noopener"`) en dat er **geen** interne
detailpagina voor wordt gegenereerd (`getStaticPaths` gebruikt `internalServices`).

Wilt u stukadoorswerk later tóch als interne pagina? Verwijder dan `externalUrl`
bij die dienst — alles werkt dan automatisch weer als gewone dienstpagina.

---

## ⚠️ Eerst invullen vóór live

Zoek in de code op `⚠️` voor alle plekken. De belangrijkste:

| Bestand | Wat invullen |
|---|---|
| `astro.config.mjs` | `SITE` → je definitieve productie-URL (bepaalt canonical, sitemap, OG). |
| `src/data/site.ts` | `url` (zelfde als hierboven), **postcode** (`address.postalCode`), **geo-coördinaten** (`geo.latitude/longitude`), `stats.years`. NAP **exact gelijk** aan je Google Bedrijfsprofiel. |
| `src/data/site.ts` | `externalLinks.stukadoors` → de definitieve URL van de stukadoorssite (nu placeholder). |
| `src/data/site.ts` | `social` → links naar Facebook/Instagram/Google-profiel (optioneel, goed voor SEO). |
| `src/data/testimonials.ts` | **Vul echte Google-reviews in.** Nep-reviews zijn misleidend en schadelijk (Google Ads-beleid). Pas dan ook `stats.rating`/`reviewCount` in `site.ts` aan. |
| `src/data/site.ts` | `kvk` en `btw` → de footer toont ze (zijn ingevuld). Controleer of ze kloppen voor de bouwbedrijf-entiteit. |
| `src/data/analytics.ts` | Je tracking-ID's (zie hieronder). |
| `src/lib/schema.ts` | Wil je een sterren-rating in de zoekresultaten? Zet `localBusinessSchema({ includeRating: true })` aan in de pagina's — **alleen met echte reviewcijfers**. |

---

## 📊 Tracking instellen (GTM / GA4 / Google Ads)

Alle tracking-ID's staan op één plek: **`src/data/analytics.ts`**. Zolang een veld leeg is, wordt die tag **niet** geladen (de site werkt gewoon door). Vul in, build opnieuw, deploy.

**Aanbevolen: alleen Google Tag Manager gebruiken.**

```ts
// src/data/analytics.ts
export const analytics = {
  gtmId: 'GTM-XXXXXXX',   // ← jouw GTM-container
  ga4Id: '',              // laat leeg; beheer GA4 binnen GTM
  googleAdsId: '',        // laat leeg; beheer Ads binnen GTM
  adsLeadConversionLabel: '',
};
```

Beheer GA4 en je Google Ads-conversies vervolgens **binnen GTM**, getriggerd op de `dataLayer`-events die de site al pusht:

| Event (dataLayer) | Wanneer | Gebruik in GTM/Ads |
|---|---|---|
| `generate_lead` | Bij verzenden contactformulier | Lead-trigger |
| `lead_submitted` | Op de `/bedankt/`-pagina (betrouwbaarste conversie) | **Hoofd-conversietrigger** |
| `contact_call` | Klik op een telefoonnummer (`tel:`) | Bel-conversie |
| `contact_whatsapp` | Klik op een WhatsApp-link | WhatsApp-conversie |

**Zonder GTM** (direct GA4/Ads): vul `ga4Id` (`G-XXXXXXXXXX`) en/of `googleAdsId` (`AW-XXXXXXXXXX`) in. Voor een directe Ads-conversie op de bedankpagina vul je ook `adsLeadConversionLabel` (`AW-XXXX/AbC...`) in.

> De **`/bedankt/`-pagina** is je betrouwbaarste conversiepunt: het formulier redirect daarheen na succesvolle verzending.

---

## 🌐 Deployen op Netlify

De build is volledig statisch — er is geen adapter nodig. `netlify.toml` is al ingesteld (`build = npm run build`, `publish = dist`).

**Optie A — via Git (aanbevolen):**
1. Push deze map naar een GitHub/GitLab-repo.
2. Netlify → **Add new site → Import an existing project** → kies de repo.
3. Build command en publish directory worden uit `netlify.toml` gelezen. Klik **Deploy**.
4. Koppel je domein onder **Domain settings** en zet HTTPS aan (automatisch via Let's Encrypt).

**Optie B — handmatig (drag & drop):** `npm run build`, sleep daarna de map **`dist`** naar `app.netlify.com`.

**Optie C — Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

> Zet in Netlify de **NODE_VERSION** gelijk aan je lokale LTS (staat al op `22` in `netlify.toml`).

---

## 📨 Contactformulier (Netlify Forms)

Het formulier werkt out-of-the-box met **Netlify Forms** — geen backend nodig. Het is herkenbaar via `data-netlify="true"`, heeft een verborgen honeypot tegen spam en redirect na verzending naar `/bedankt/`.

**Na de eerste deploy:**
1. Netlify-dashboard → **Forms** → je ziet het formulier `contact`.
2. **Forms → Settings & notifications → Add notification → Email notification** → stuur inzendingen naar `info@stukadoorsdebruin.nl`.
3. Test één keer live (lokaal worden inzendingen niet verwerkt — dat doet alleen Netlify).

Velden: naam + telefoon (verplicht), e-mail, dienst, omschrijving (optioneel). Dienst-preselect kan via URL: `/contact/?dienst=verbouwing`.

---

## 🖼 Eigen foto's plaatsen

De afbeeldingen in `src/assets/images/` zijn **placeholders**. Vervang ze door echte projectfoto's met **dezelfde bestandsnaam** — dan werkt alles direct:

```
src/assets/images/
  hero-home.jpg                       (home-hero, ~1600×1200)
  about-team.jpg                      (over-ons, ~1200×900)
  service-verbouwing.jpg              (1200×800)
  service-aanbouw.jpg
  service-dakkapellen.jpg
  service-badkamers.jpg
  service-dakwerk.jpg
  service-stukadoorswerk.jpg          (voor de dienstkaart die extern linkt)
  service-schilderwerk.jpg
  service-kozijnen.jpg
  service-installatie-elektra.jpg
  service-onderhoud.jpg
public/og/                            (social-previews 1200×630 — optioneel vervangen)
```

Astro zet ze automatisch om naar **WebP/AVIF**, schaalt ze en zet width/height (geen layout shift). Lever bij voorkeur scherpe JPG's aan. Pas waar nodig de **alt-teksten** aan in `src/data/services.ts` en de pagina's.

> **Logo:** `logo-mark.png` / `logo-full.png` zijn het bestaande De Bruin-logo. Wil je een eigen bouwbedrijf-logo? Vervang deze bestanden (zelfde naam) en eventueel `public/og/logo.png` + de favicons in `public/`.

---

## 🔍 SEO-checklist

**Technisch (al ingebouwd):**
- [x] Semantische HTML5 + één H1 per pagina
- [x] Unieke `<title>` (<60) en meta description (<155) per pagina
- [x] Canonical tags (met consistente trailing slash)
- [x] Open Graph + Twitter Card op elke pagina (per-dienst OG-image)
- [x] JSON-LD: LocalBusiness/GeneralContractor, Service (per dienst), FAQPage, BreadcrumbList
- [x] `sitemap-index.xml` automatisch gegenereerd (bedankt/404 uitgesloten)
- [x] `robots.txt` met sitemap-verwijzing
- [x] Beschrijvende alt-teksten, lazy loading, WebP/AVIF, expliciete width/height
- [x] Schone URL's (`/diensten/verbouwing/`)
- [x] Interne links + externe link (rel="noopener") naar de stukadoorssite
- [x] Lokale SEO: plaatsnamen en werkgebied in content, NAP in footer

**Jouw acties vóór/na live:**
- [ ] `SITE`-URL in `astro.config.mjs` + `url` in `site.ts` op de definitieve host gezet (www of non-www — kies er één en blijf consistent)
- [ ] `externalLinks.stukadoors` bevestigd/aangepast
- [ ] NAP in `site.ts` exact gelijk aan Google Bedrijfsprofiel (incl. postcode)
- [ ] Geo-coördinaten van het bedrijfsadres ingevuld
- [ ] Echte reviews geplaatst (en pas dan eventueel `includeRating` aan)
- [ ] Eigen projectfoto's met goede alt-teksten
- [ ] Google Search Console: site verifiëren + `sitemap-index.xml` indienen
- [ ] Google Bedrijfsprofiel aangemaakt/gekoppeld (cruciaal voor lokale SEO)

**Validatietools:**
- Structured data: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Open Graph: [opengraph.dev](https://www.opengraph.dev/)
- Performance: Lighthouse (Chrome DevTools) of [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🏁 Go-live-checklist

1. [ ] Alle `⚠️`-velden ingevuld (zoek op `⚠️` in de code)
2. [ ] `externalLinks.stukadoors` wijst naar de juiste, live stukadoorssite
3. [ ] `npm run build` draait zonder fouten
4. [ ] Tracking-ID('s) in `analytics.ts` gezet en getest
5. [ ] Gedeployed op Netlify + eigen domein + HTTPS
6. [ ] Formuliernotificatie naar `info@stukadoorsdebruin.nl` ingesteld + testinzending gedaan
7. [ ] Sitemap ingediend in Search Console
8. [ ] Lighthouse-score gecontroleerd (doel 95+ op alle assen)
9. [ ] Rich Results-test geslaagd voor LocalBusiness + FAQ

---

Gebouwd met Astro + Tailwind CSS. Vragen over de code? Alle bestanden zijn voorzien van NL-commentaar.
