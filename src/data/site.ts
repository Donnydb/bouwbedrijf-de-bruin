/**
 * ────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — bedrijfsgegevens (NAP), USP's, openingstijden.
 *  Wijzig gegevens HIER; ze worden overal gebruikt: footer, header, contact,
 *  meta-tags en JSON-LD structured data.
 *
 *  ⚠️ INVULLEN VÓÓR LIVE:
 *    - url                 (definitieve productie-URL — gelijk aan astro.config `site`)
 *    - address.postalCode  (postcode Tacitusstraat 13 — staat alvast op 2314 CJ)
 *    - geo.latitude / geo.longitude  (exacte coördinaten bedrijfsadres)
 *    - externalLinks.stukadoors  (staat op de Netlify-URL; later evt. eigen domein)
 *    - social-profielen (sameAs)  — optioneel maar goed voor lokale SEO
 *    - rating (indien je echte reviewscore wilt tonen in schema)
 *  Houd de NAP-gegevens IDENTIEK aan je Google Bedrijfsprofiel.
 * ────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** Merknaam zoals getoond op de site */
  name: 'Bouwbedrijf De Bruin',
  /** Volledige/juridische naam (gebruikt in schema) */
  legalName: 'Bouwbedrijf De Bruin',
  /** Korte tagline */
  tagline: 'Uw vertrouwde aannemer in Leiden en omgeving',
  /** ⚠️ Productie-URL (zonder sluitende slash) — gelijk houden aan astro.config `site` */
  url: 'https://www.bouwbedrijfdebruin.nl',

  /** Telefoon */
  phone: {
    display: '06 1546 1829',
    /** E.164-formaat voor tel:-links */
    href: 'tel:+31615461829',
    e164: '+31615461829',
  },

  /** E-mail */
  email: 'info@stukadoorsdebruin.nl',

  /** Juridische gegevens — worden in de footer pas getoond zodra ze zijn ingevuld */
  kvk: '68851987',
  btw: 'NL002397279B78',

  /** Adres (NAP) — houd identiek aan Google Bedrijfsprofiel */
  address: {
    street: 'Tacitusstraat 13',
    postalCode: '2314 CJ',
    city: 'Leiden',
    region: 'Zuid-Holland',
    country: 'NL',
    countryName: 'Nederland',
    /** Toon volledig adres op de site? (klant koos: ja) */
    showFull: true,
  },

  /** Geo-coördinaten voor LocalBusiness-schema (Leiden — vervang door exact adres) */
  geo: {
    latitude: 52.1583, // ⚠️ vervang door exacte coördinaten van het bedrijfsadres
    longitude: 4.4639, // ⚠️ vervang door exacte coördinaten van het bedrijfsadres
  },

  /**
   * Externe links naar gespecialiseerde (zuster)sites.
   *
   * `stukadoors` is de URL van het aparte stukadoorsbedrijf. Overal waar de
   * dienst "Stukadoorswerk" wordt getoond (dienstkaart, menu, footer, gerelateerde
   * diensten en de tekstlink op de homepage) verwijst de link HIERHEEN — die
   * opent in een nieuw tabblad. Er wordt bewust GEEN interne dienstpagina voor
   * stukadoorswerk gegenereerd.
   *
   * Staat nu op de live Netlify-URL van de stukadoorssite. Krijgt die site later
   * een eigen domein (bv. www.stukadoorsdebruin.nl)? Vervang dan deze ene regel.
   */
  externalLinks: {
    stukadoors: 'https://stukadoorsdebruin.netlify.app',
  },

  /** Primaire plaats + werkgebied (lokale SEO) */
  primaryCity: 'Leiden',
  /** Plaatsen die we expliciet bedienen (gebruikt in content + areaServed-schema) */
  serviceArea: [
    'Leiden',
    'Leiderdorp',
    'Oegstgeest',
    'Voorschoten',
    'Zoeterwoude',
    'Katwijk',
    'Rijnsburg',
    'Valkenburg',
    'Wassenaar',
    'Sassenheim',
  ],
  /** Korte omschrijving werkgebied voor lopende tekst */
  serviceAreaLabel: 'Leiden en omgeving',

  /** Openingstijden — gebruikt voor weergave én openingHoursSpecification */
  openingHours: [
    { days: 'Maandag t/m vrijdag', opens: '07:00', closes: '18:00', dayCodes: ['Mo', 'Tu', 'We', 'Th', 'Fr'] },
    { days: 'Zaterdag', opens: '08:00', closes: '13:00', dayCodes: ['Sa'] },
    { days: 'Zondag', closed: true, dayCodes: ['Su'] },
  ],

  /** USP's — kernbeloften, hergebruikt in USP-blok en home */
  usps: [
    {
      title: 'Eén aanspreekpunt',
      text: 'Van eerste schets tot oplevering regelen wij het hele bouwtraject. U heeft één vast contactpersoon — geen gedoe met losse partijen.',
      icon: 'check-badge',
    },
    {
      title: 'Vrijblijvende offerte op maat',
      text: 'We komen langs, denken mee en zetten alles helder op papier. Een duidelijke prijs vooraf, zonder verrassingen achteraf.',
      icon: 'tag',
    },
    {
      title: 'Vakmensen in eigen beheer',
      text: 'Een vast team ervaren bouwvakkers, stukadoors en afwerkers. Korte lijnen en constante kwaliteit op elke klus.',
      icon: 'hammer',
    },
    {
      title: 'Garantie op ons werk',
      text: 'Wij staan achter onze kwaliteit. Niet goed? Dan lossen we het op. Zo simpel is het.',
      icon: 'shield',
    },
    {
      title: 'Heldere planning',
      text: 'U weet vooraf wanneer we starten en wanneer we klaar zijn. We houden u onderweg op de hoogte en komen afspraken na.',
      icon: 'clock',
    },
    {
      title: 'Netjes opgeleverd',
      text: 'We werken schoon, dekken alles zorgvuldig af en leveren bezemschoon op. U komt thuis in een afgewerkte ruimte, niet in een bouwput.',
      icon: 'sparkles',
    },
  ],

  /**
   * Vertrouwenscijfers. `projects` is door jou opgegeven (100+).
   * `rating`/`reviewCount` zijn LEEG: vul ze pas met je ECHTE Google-cijfers.
   * Zolang `rating` leeg is, wordt er nergens een (verzonnen) score getoond.
   */
  stats: {
    projects: '100+',
    years: '', // optioneel: vul je werkelijke aantal jaren ervaring in (bv. '15+')
    rating: '', // ⚠️ vul je ECHTE gemiddelde reviewscore in (bv. '4,9') — pas dan tonen we 'm
    reviewCount: '', // ⚠️ vul je ECHTE aantal reviews in (bv. '42')
  },

  /** Social / externe profielen (sameAs in schema). Vul in indien aanwezig. */
  social: {
    // facebook: 'https://www.facebook.com/...',
    // instagram: 'https://www.instagram.com/...',
    googleBusiness: '', // bv. link naar je Google Bedrijfsprofiel
  },
} as const;

/** Hulpfunctie: alle externe profiel-URL's als platte array (voor sameAs) */
export function sameAs(): string[] {
  return Object.values(site.social).filter((v) => v.length > 0);
}

export type Site = typeof site;
