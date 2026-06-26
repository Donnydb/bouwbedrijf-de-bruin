/**
 * JSON-LD structured data generators.
 *
 * Centrale plek voor alle schema.org-markup:
 *   - LocalBusiness (NAP, openingstijden, areaServed, geo)  → elke pagina
 *   - WebSite                                                → elke pagina
 *   - Service (per dienst)                                   → dienstpagina's
 *   - FAQPage                                                → /faq/
 *   - BreadcrumbList                                         → alle subpagina's
 *
 * Alle objecten gebruiken stabiele @id's zodat ze naar elkaar kunnen verwijzen
 * (één samenhangende graph). De Seo-component zet ze in een <script type="application/ld+json">.
 */
import { site, sameAs } from '@data/site';
import type { Service } from '@data/services';

/** Bouw een absolute URL vanaf een pad ("/diensten/" → "https://.../diensten/") */
export function abs(path = '/'): string {
  const base = site.url.replace(/\/$/, '');
  return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

export const BUSINESS_ID = `${site.url}/#business`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Openingstijden → schema.org openingHoursSpecification */
function openingHoursSpecification() {
  return site.openingHours
    .filter((o) => !('closed' in o && o.closed))
    .map((o) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.dayCodes.map(
        (d) =>
          ({
            Mo: 'Monday',
            Tu: 'Tuesday',
            We: 'Wednesday',
            Th: 'Thursday',
            Fr: 'Friday',
            Sa: 'Saturday',
            Su: 'Sunday',
          })[d],
      ),
      opens: (o as { opens?: string }).opens,
      closes: (o as { closes?: string }).closes,
    }));
}

/**
 * LocalBusiness / GeneralContractor — het hoofdbedrijf.
 * @param includeRating zet alleen op `true` als je ECHTE reviewcijfers hebt;
 *   verzonnen aggregateRating kan je Google-profiel schaden.
 */
export function localBusinessSchema({ includeRating = false } = {}) {
  const schema: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: site.legalName,
    alternateName: site.name,
    description: site.tagline,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: abs('/og/og-default.jpg'), // 1200×630, prima voor social/share
    logo: abs('/og/logo.png'), // vierkant merklogo (512×512) voor schema.org/Knowledge Panel
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: openingHoursSpecification(),
    knowsLanguage: ['nl-NL'],
  };

  const profiles = sameAs();
  if (profiles.length) schema.sameAs = profiles;

  // Alleen tonen met ECHTE data:
  if (includeRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: site.stats.rating.replace(',', '.'),
      reviewCount: site.stats.reviewCount.replace('+', ''),
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
}

/** WebSite-schema */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: 'nl-NL',
    publisher: { '@id': BUSINESS_ID },
  };
}

/** Service-schema voor een dienstpagina */
export function serviceSchema(service: Service, path: string) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name: service.navLabel,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: abs(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
    audience: { '@type': 'Audience', audienceType: 'Particulieren en bedrijven' },
  };
}

/** FAQPage-schema */
export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs('/faq/')}#faqpage`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

/** BreadcrumbList-schema vanuit een lijst {name, path} */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/**
 * Combineer meerdere schema-objecten in één @graph.
 * Gebruik in de Seo-component: graph([localBusinessSchema(), websiteSchema(), ...])
 */
export function graph(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  };
}
