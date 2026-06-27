/**
 * Veelgestelde vragen — gebruikt op /faq/ (zichtbare content + FAQPage JSON-LD)
 * en als FAQ-teaser op de homepage. Houd vragen en antwoorden concreet en
 * geruststellend; dit is sterk materiaal voor lokale SEO en voor bezoekers
 * die nog twijfelen.
 *
 * `category` wordt gebruikt om de FAQ op de pagina te groeperen.
 */

export interface FaqItem {
  q: string;
  a: string;
  category: 'Offerte & prijs' | 'Planning & uitvoering' | 'Vergunningen & garantie' | 'Werkgebied & diensten';
  /** Tonen in de korte FAQ-teaser op de homepage? */
  featured?: boolean;
}

export const faqItems: FaqItem[] = [
  // ── Offerte & prijs ──────────────────────────────────────────────
  {
    category: 'Offerte & prijs',
    featured: true,
    q: 'Is een offerte echt vrijblijvend en gratis?',
    a: 'Ja, volledig gratis en vrijblijvend. We komen langs om uw plannen en de situatie te bekijken, denken met u mee en zetten alles helder op papier. U zit nergens aan vast en kunt rustig beslissen.',
  },
  {
    category: 'Offerte & prijs',
    featured: true,
    q: 'Krijg ik een vaste prijs of werken jullie op nacalculatie?',
    a: 'In de meeste gevallen werken we met een vaste prijs voor het hele project, zodat u vooraf precies weet waar u aan toe bent. Bij grotere of nog onzekere projecten spreken we dat helder af. Meerwerk bespreken we altijd eerst met u — nooit als verrassing achteraf.',
  },
  {
    category: 'Offerte & prijs',
    q: 'Wat kost een verbouwing of aanbouw gemiddeld?',
    a: 'Dat hangt sterk af van de omvang, de materialen en de afwerking. Daarom maken we altijd een offerte op maat na een bezoek. Zo krijgt u een eerlijke, realistische prijs in plaats van een slag in de lucht.',
  },
  {
    category: 'Offerte & prijs',
    q: 'Werken jullie voor particulieren én bedrijven?',
    a: 'Beide. We verbouwen en onderhouden woningen voor particulieren, maar werken ook voor bedrijven, vve’s en verhuurders in Leiden en omgeving.',
  },

  // ── Planning & uitvoering ────────────────────────────────────────
  {
    category: 'Planning & uitvoering',
    featured: true,
    q: 'Hebben jullie één aanspreekpunt voor het hele project?',
    a: 'Ja. U krijgt één vaste contactpersoon die het complete traject coördineert — van planning en vergunningen tot alle vakmensen en de oplevering. Geen gedoe met losse partijen die u zelf op elkaar moet afstemmen.',
  },
  {
    category: 'Planning & uitvoering',
    featured: true,
    q: 'Hoe snel kunnen jullie beginnen?',
    a: 'Dat hangt af van de omvang en het seizoen. Kleinere klussen plannen we vaak binnen enkele weken in; grotere projecten vragen wat meer voorbereiding. Heeft u haast? Geef het aan, dan kijken we wat mogelijk is.',
  },
  {
    category: 'Planning & uitvoering',
    q: 'Kan ik in huis blijven wonen tijdens de verbouwing?',
    a: 'Bij veel verbouwingen wel. Bij ingrijpende renovaties is het soms prettiger om (deels) elders te verblijven. We faseren het werk waar dat kan en bespreken vooraf wat realistisch is, zodat u zo min mogelijk overlast heeft.',
  },
  {
    category: 'Planning & uitvoering',
    q: 'Maken jullie veel rommel?',
    a: 'We werken zo schoon mogelijk, dekken alles zorgvuldig af en leveren bezemschoon op. U komt thuis in een afgewerkte ruimte, niet in een bouwput.',
  },

  // ── Vergunningen & garantie ──────────────────────────────────────
  {
    category: 'Vergunningen & garantie',
    featured: true,
    q: 'Regelen jullie de vergunning en tekeningen?',
    a: 'Ja. Voor verbouwingen waarbij een vergunning of constructieberekening nodig is, toetsen we uw plan aan de regels en verzorgen we de aanvraag en tekeningen. U hoeft zich daar niet zelf in te verdiepen.',
  },
  {
    category: 'Vergunningen & garantie',
    featured: true,
    q: 'Geven jullie garantie op het werk?',
    a: 'Ja. Wij staan achter onze kwaliteit en geven garantie op ons werk. Is er onverhoopt iets niet goed? Dan lossen we het op. Zo simpel is het.',
  },
  {
    category: 'Vergunningen & garantie',
    q: 'Zijn jullie verzekerd?',
    a: 'Ja, we werken verzekerd. Bij schadeherstel kunnen we bovendien meedenken en afstemmen met uw verzekeraar, bijvoorbeeld met een duidelijke offerte en foto’s van de schade.',
  },

  // ── Werkgebied & diensten ────────────────────────────────────────
  {
    category: 'Werkgebied & diensten',
    featured: true,
    q: 'In welke regio werken jullie?',
    a: 'We werken in Leiden en de hele omgeving, waaronder Leiderdorp, Oegstgeest, Voorschoten, Zoeterwoude, Katwijk, Rijnsburg, Valkenburg, Wassenaar en Sassenheim. Twijfelt u of uw woonplaats erbij hoort? Bel of mail ons gerust.',
  },
  {
    category: 'Werkgebied & diensten',
    q: 'Doen jullie ook het stukadoorswerk?',
    a: 'Jazeker. Voor strak stucwerk, sierpleister en betonlook werken we samen met onze gespecialiseerde stukadoors — zij hebben een eigen website met al hun stukadoorsdiensten. Klik op de dienst “Stukadoorswerk” om die te bekijken.',
  },
  {
    category: 'Werkgebied & diensten',
    q: 'Verzorgen jullie ook de afwerking, zoals stuc- en schilderwerk?',
    a: 'Ja. Als compleet bouwbedrijf verzorgen we niet alleen de bouw, maar ook de afwerking — van stucwerk en tegelen tot schilderwerk. Zo regelt u alles bij één partij, zonder afstemmingsgedoe.',
  },
  {
    category: 'Werkgebied & diensten',
    featured: true,
    q: 'Kunnen jullie mijn woning ook verduurzamen?',
    a: 'Ja. We verzorgen isolatie (dak, vloer, spouwmuur en gevel), HR++-glas en kierdichting voor een lager energieverbruik en meer comfort. We adviseren over een logische volgorde en denken mee over beschikbare subsidies — los of als onderdeel van een verbouwing.',
  },
];

/** De vragen voor de korte FAQ-teaser op de homepage */
export const featuredFaq = faqItems.filter((f) => f.featured);

/** Unieke categorieën in de volgorde waarin ze voorkomen */
export const faqCategories = [...new Set(faqItems.map((f) => f.category))];
