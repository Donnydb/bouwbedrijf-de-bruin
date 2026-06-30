/**
 * Dienst-definities — één bron voor het diensten-overzicht, de detailpagina's
 * (/diensten/[slug]/), de navigatie en de JSON-LD Service-schema.
 *
 * Content volgt "pijn eerst, oplossing daarna": intro = de pijn, daarna wat het
 * is, voor wie/wanneer, en het resultaat.
 *
 * `image` verwijst naar een bestand in src/assets/images/ (zonder extensie),
 * dat via src/lib/images.ts wordt geoptimaliseerd (AVIF/WebP + width/height).
 *
 * ── EXTERNE DIENSTEN ──────────────────────────────────────────────────────
 * Een dienst met `externalUrl` (zoals "Stukadoorswerk") krijgt GEEN interne
 * detailpagina. Overal waar de dienst verschijnt — dienstkaart, menu, footer,
 * gerelateerde diensten en de tekstlink op de homepage — linkt hij naar die
 * externe URL en opent in een nieuw tabblad. Wijzig de URL op één plek:
 * `src/data/site.ts` → `externalLinks.stukadoors`.
 */
import { site } from '@data/site';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Korte naam (kaart-titel, breadcrumb) */
  title: string;
  /** Label in navigatie/overzicht (mag langer) */
  navLabel: string;
  /** Korte teaser voor kaarten en interne links */
  summary: string;
  /** Icoonnaam (zie Icon.astro) */
  icon: string;
  /** Bestandsnaam in src/assets/images/ (zonder extensie) */
  image: string;
  /** Korte alt-tekst voor de afbeelding */
  imageAlt: string;

  /**
   * Optioneel: externe URL i.p.v. een interne dienstpagina. Als dit is gezet,
   * wordt er geen detailpagina gegenereerd en linkt de dienst naar deze URL
   * (opent in een nieuw tabblad). Zie `site.externalLinks`.
   */
  externalUrl?: string;
  /** Label voor de externe-link-knop op de dienstkaart (bv. "Bekijk de badkamersite"). */
  externalLabel?: string;

  // SEO
  seoTitle: string; // < 60 tekens
  metaDescription: string; // < 155 tekens
  keywords: string[];

  // Hero
  heroH1: string;
  heroSub: string;

  // Content (pijn → oplossing)
  intro: string; // de pijn / herkenning
  whatTitle: string;
  whatBody: string;
  forWhoTitle: string;
  forWho: string[];
  resultTitle: string;
  result: string[];
  /** Extra inhoudelijke secties (optioneel) */
  sections?: { title: string; body: string }[];
  /** Korte, dienstspecifieke vragen (getoond als content, niet als FAQ-schema) */
  faq?: ServiceFaq[];

  // Schema / commercieel
  serviceType: string;
  related: string[]; // slugs
}

export const services: Service[] = [
  // ───────────────────────── 1. VERBOUWING & RENOVATIE ─────────────────────────
  {
    slug: 'verbouwing',
    title: 'Verbouwing',
    navLabel: 'Verbouwing & renovatie',
    summary:
      'Van een nieuwe indeling tot een complete renovatie. Wij verbouwen uw woning van begin tot eind.',
    icon: 'hammer',
    image: 'service-verbouwing',
    imageAlt: 'Bouwvakker van De Bruin verbouwt een woonkamer in een woning in Leiden',
    seoTitle: 'Verbouwing & renovatie Leiden | De Bruin',
    metaDescription:
      'Uw woning verbouwen of renoveren in Leiden e.o.? Bouwbedrijf De Bruin regelt het hele traject — één aanspreekpunt, vaste prijs en garantie. Vraag een offerte aan.',
    keywords: ['verbouwing leiden', 'aannemer leiden', 'renovatie leiden', 'woning verbouwen', 'bouwbedrijf leiden'],
    heroH1: 'Verbouwing & renovatie in Leiden',
    heroSub: 'Een nieuwe indeling, meer ruimte of een woning helemaal bij de tijd — wij maken het waar.',
    intro:
      'Een verbouwing trekt u graag, maar het idee van bouwstof, losse partijen en uitlopende planningen schrikt af. Wie regelt het, wie is verantwoordelijk en wat gaat het écht kosten? Bij ons heeft u één aanspreekpunt dat het complete traject in goede banen leidt.',
    whatTitle: 'Wat houdt een verbouwing in?',
    whatBody:
      'Of u nu een muur wilt doorbreken, de zolder wilt ombouwen tot slaapkamer of uw hele huis wilt renoveren — wij verzorgen het van A tot Z. Sloopwerk, constructie, metsel- en timmerwerk, installaties, stuc- en schilderwerk: we coördineren alle vakmensen en houden de regie. U hoeft niet zelf achter aannemers, loodgieters en elektriciens aan; dat doen wij.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een woning met een verouderde of onpraktische indeling',
      'Meer licht en ruimte door muren te verplaatsen of door te breken',
      'Een net gekocht huis dat u eerst grondig wilt opknappen',
      'Zolder, garage of bijkeuken ombouwen tot bruikbare ruimte',
      'Een complete renovatie van vloer tot plafond',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Een woning die past bij hoe u nu wilt wonen',
      'Eén partij verantwoordelijk, van planning tot oplevering',
      'Een vaste prijs vooraf en een heldere planning',
      'Strak afgewerkt en bezemschoon opgeleverd, mét garantie',
    ],
    sections: [
      {
        title: 'Eén aannemer voor het hele project',
        body:
          'Het grootste voordeel van een vaste aannemer? Rust. Wij stemmen alle vakmensen op elkaar af, bewaken de planning en het budget en houden u op de hoogte. Eén aanspreekpunt voor al uw vragen — van de eerste tekening tot de laatste kwast verf.',
      },
    ],
    faq: [
      {
        q: 'Hebben jullie een vergunning nodig voor mijn verbouwing?',
        a: 'Voor veel verbouwingen binnenshuis is geen vergunning nodig, maar bij constructieve wijzigingen (zoals een muur doorbreken) of een uitbreiding vaak wel. We adviseren u hierover en kunnen de aanvraag en eventuele constructieberekening voor u verzorgen.',
      },
      {
        q: 'Kan ik in huis blijven wonen tijdens de verbouwing?',
        a: 'Bij kleinere verbouwingen meestal wel. Bij een ingrijpende renovatie is het soms prettiger om (deels) elders te verblijven. We bespreken vooraf wat realistisch is en faseren het werk waar dat kan, zodat u zo min mogelijk overlast heeft.',
      },
    ],
    serviceType: 'Verbouwing en renovatie',
    related: ['aanbouw', 'badkamers', 'stukadoorswerk'],
  },

  // ───────────────────────── 2. AANBOUW, OPBOUW & UITBOUW ─────────────────────────
  {
    slug: 'aanbouw',
    title: 'Aanbouw',
    navLabel: 'Aan-, op- & uitbouw',
    summary:
      'Meer ruimte zonder te verhuizen. Een aanbouw, uitbouw of extra verdieping op maat gemaakt.',
    icon: 'building',
    image: 'service-aanbouw',
    imageAlt: 'Nieuwe aanbouw aan de achterzijde van een woning in Leiden, gebouwd door De Bruin',
    seoTitle: 'Aanbouw & opbouw Leiden | uitbouw op maat',
    metaDescription:
      'Aanbouw, uitbouw of extra verdieping in Leiden e.o.? Bouwbedrijf De Bruin bouwt meer ruimte op maat — van fundering tot afwerking. Vraag een vrijblijvende offerte aan.',
    keywords: ['aanbouw leiden', 'uitbouw leiden', 'opbouw woning', 'serre bouwen', 'huis uitbreiden'],
    heroH1: 'Aan-, op- & uitbouw in Leiden',
    heroSub: 'Creëer meer leefruimte zonder te verhuizen — op maat ontworpen en strak afgewerkt.',
    intro:
      'Het huis is fijn, alleen net te klein. Verhuizen is duur en zonde, want eigenlijk wilt u gewoon blijven. Een aan- of uitbouw geeft u de extra vierkante meters die u zoekt — vaak goedkoper dan een nieuw huis én precies zoals u het wilt.',
    whatTitle: 'Wat is een aan-, op- of uitbouw?',
    whatBody:
      'Een uitbouw vergroot uw woning op de begane grond, bijvoorbeeld voor een ruimere keuken of woonkamer. Een opbouw plaatst een extra verdieping bovenop uw woning of garage. Wij verzorgen het hele traject: fundering, constructie, dak, kozijnen, isolatie en de complete afwerking binnen. Eén partij, een strak eindresultaat dat naadloos aansluit op uw bestaande woning.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een grotere woon- of eetkeuken aan de achterkant',
      'Een extra slaapkamer of badkamer op een nieuwe verdieping',
      'Een gezin dat groeit maar niet wil verhuizen',
      'Meer werkruimte of een thuiskantoor',
      'Een serre of bijkeuken die u al jaren wilt',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Volwaardige, goed geïsoleerde extra leefruimte',
      'Een uitbreiding die past bij de stijl van uw woning',
      'Meer woonplezier én een hogere woningwaarde',
      'Compleet afgewerkt opgeleverd, klaar voor gebruik',
    ],
    sections: [
      {
        title: 'Isolatie en duurzaamheid',
        body:
          'We bouwen volgens de huidige isolatie-eisen, zodat uw nieuwe ruimte het hele jaar comfortabel is en niet onnodig energie kost. Vloer-, wand- en dakisolatie, goede kozijnen met isolerend glas en een kierdichte afwerking horen er standaard bij.',
      },
    ],
    faq: [
      {
        q: 'Heb ik een vergunning nodig voor een aanbouw?',
        a: 'Dat hangt af van de grootte en plek. Veel aanbouwen aan de achterkant zijn vergunningvrij, maar niet altijd. Wij toetsen uw plan aan de regels, verzorgen indien nodig de vergunningaanvraag en de constructieberekening.',
      },
      {
        q: 'Hoelang duurt het bouwen van een uitbouw?',
        a: 'Een gemiddelde uitbouw is afhankelijk van omvang en afwerking doorgaans in enkele weken klaar. Na de offerte geven we u een realistische planning met start- en opleverdatum.',
      },
    ],
    serviceType: 'Aanbouw, opbouw en uitbouw',
    related: ['verbouwing', 'dakkapellen', 'kozijnen'],
  },

  // ───────────────────────────── 3. DAKKAPELLEN ─────────────────────────────
  {
    slug: 'dakkapellen',
    title: 'Dakkapellen',
    navLabel: 'Dakkapellen',
    summary:
      'Meer ruimte, licht en stahoogte op zolder. Een dakkapel geplaatst in één tot enkele dagen.',
    icon: 'dormer',
    image: 'service-dakkapellen',
    imageAlt: 'Nieuw geplaatste dakkapel op het schuine dak van een woning in Leiden',
    seoTitle: 'Dakkapel plaatsen Leiden | De Bruin',
    metaDescription:
      'Dakkapel laten plaatsen in Leiden e.o.? Meer ruimte, licht en stahoogte op zolder. Strak afgewerkt en goed geïsoleerd. Vraag een vrijblijvende offerte aan.',
    keywords: ['dakkapel leiden', 'dakkapel plaatsen', 'dakkapel kosten', 'zolder verbouwen', 'dakkapel op maat'],
    heroH1: 'Dakkapellen in Leiden',
    heroSub: 'Maak van uw zolder een volwaardige kamer — meer stahoogte, licht en ruimte.',
    intro:
      'De zolder is ruim genoeg, maar door het schuine dak kunt u er amper rechtop staan en is het er donker. Zonde van de ruimte. Een dakkapel lost dat in één keer op: meer stahoogte, daglicht en bruikbare vierkante meters.',
    whatTitle: 'Wat is een dakkapel?',
    whatBody:
      'Een dakkapel is een uitbouw in uw schuine dak die zorgt voor extra stahoogte en raamoppervlak. Wij leveren en plaatsen dakkapellen op maat, vaak in één tot enkele dagen. We werken met goed geïsoleerde, prefab of ter plekke gebouwde dakkapellen en werken de binnen- en buitenkant netjes af. Zo wordt uw zolder een echte slaap-, hobby- of werkkamer.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een zolder die u wilt ombouwen tot slaapkamer',
      'Te weinig stahoogte of daglicht onder het schuine dak',
      'Een extra kinder-, logeer- of werkkamer creëren',
      'In combinatie met een zolderverbouwing of opbouw',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Een volwaardige kamer met stahoogte en daglicht',
      'Een goed geïsoleerde, kierdichte dakkapel',
      'Strak afgewerkt van binnen en buiten',
      'Snel geplaatst, met zo min mogelijk overlast',
    ],
    faq: [
      {
        q: 'Is voor een dakkapel een vergunning nodig?',
        a: 'Aan de achterkant van de woning is een dakkapel vaak vergunningvrij, aan de voorkant meestal niet. We controleren de regels voor uw adres en regelen indien nodig de vergunning.',
      },
      {
        q: 'Hoe snel staat een dakkapel erin?',
        a: 'De plaatsing zelf duurt vaak één tot enkele dagen, afhankelijk van de grootte en afwerking. We stemmen de planning vooraf met u af.',
      },
    ],
    serviceType: 'Dakkapellen plaatsen',
    related: ['aanbouw', 'dakwerk', 'kozijnen'],
  },

  // ───────────────────────────── 4. BADKAMERS ─────────────────────────────
  {
    slug: 'badkamers',
    title: 'Badkamers',
    navLabel: 'Badkamer & toilet',
    summary:
      'Een complete badkamer of toilet, van sloop tot laatste tegel. Bekijk onze aparte badkamersite.',
    icon: 'droplet',
    image: 'service-badkamers',
    imageAlt: 'Strak afgewerkte nieuwe badkamer met inloopdouche in een woning in Leiden',
    // ⚠️ Externe link: wijzigbaar in src/data/site.ts → externalLinks.badkamers
    externalUrl: site.externalLinks.badkamers,
    externalLabel: 'Bekijk de badkamersite',
    seoTitle: 'Badkamer renovatie Leiden | De Bruin',
    metaDescription:
      'Nieuwe badkamer of toilet in Leiden e.o.? Bouwbedrijf De Bruin verzorgt de complete renovatie — sloop, leidingwerk, tegelen en afwerking. Vraag een offerte aan.',
    keywords: ['badkamer renovatie leiden', 'badkamer verbouwen', 'nieuwe badkamer', 'toilet renoveren', 'badkamer leiden'],
    heroH1: 'Badkamer & toilet in Leiden',
    heroSub: 'Een frisse, complete badkamer — alles geregeld door één partij, van sloop tot afwerking.',
    intro:
      'Uw badkamer is gedateerd, de voegen worden niet meer schoon en de douche lekt. Aan een nieuwe badkamer beginnen voelt als een hoop gedoe: loodgieter, tegelzetter, elektricien en stukadoor allemaal apart inplannen. Bij ons regelt één partij het complete project.',
    whatTitle: 'Wat verzorgen wij voor uw badkamer?',
    whatBody:
      'Wij verzorgen de complete badkamer- of toiletrenovatie: het uitbreken van de oude badkamer, nieuw leiding- en elektrawerk, waterdicht maken, tegelen of een naadloze afwerking, en het plaatsen van douche, bad, wastafel en toilet. We coördineren alle vakmensen en leveren een gebruiksklare badkamer op. U kiest het ontwerp en de materialen; wij maken het waar.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een verouderde badkamer die toe is aan vervanging',
      'Lekkages, schimmel of voegen die niet meer schoon worden',
      'Een inloopdouche of een toegankelijke badkamer gewenst',
      'Een nieuw toilet of een complete verbouwing van beide',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Een complete, waterdichte en frisse badkamer',
      'Al het werk door één partij — geen afstemmingsgedoe',
      'Strak tegel- of stucwerk en nette installaties',
      'Een vaste prijs vooraf en garantie op het werk',
    ],
    sections: [
      {
        title: 'Tegels of betonlook?',
        body:
          'Houdt u van strak en naadloos? Dan is een waterbestendige betonlook een prachtig alternatief voor tegels — zonder voegen, dus minder schoonmaken en geen schimmel. Wij adviseren u over de mogelijkheden en stemmen de afwerking af met onze stukadoors.',
      },
    ],
    faq: [
      {
        q: 'Hoelang duurt een badkamerrenovatie?',
        a: 'Een complete badkamer is gemiddeld in één tot twee weken klaar, inclusief droog- en uithardingstijd van leidingwerk en tegellijm. We geven u vooraf een duidelijke planning.',
      },
      {
        q: 'Kan ik zelf de tegels en sanitair uitkiezen?',
        a: 'Zeker. U kiest het sanitair en de tegels of afwerking die u mooi vindt; wij adviseren over wat praktisch en duurzaam is en verzorgen de complete plaatsing.',
      },
    ],
    serviceType: 'Badkamer- en toiletrenovatie',
    related: ['verbouwing', 'installatie-elektra', 'stukadoorswerk'],
  },

  // ───────────────────────────── 5. DAKWERK ─────────────────────────────
  {
    slug: 'dakwerk',
    title: 'Dakwerk',
    navLabel: 'Dakwerk & dakbedekking',
    summary:
      'Plat of schuin dak vervangen, repareren of isoleren. Een waterdicht dak dat jaren meegaat.',
    icon: 'roof',
    image: 'service-dakwerk',
    imageAlt: 'Dakdekker van De Bruin legt nieuwe dakbedekking op een plat dak in Leiden',
    seoTitle: 'Dakwerk & dakbedekking Leiden | De Bruin',
    metaDescription:
      'Dak vervangen, repareren of isoleren in Leiden e.o.? Bouwbedrijf De Bruin verzorgt plat en schuin dakwerk — waterdicht en goed geïsoleerd. Vraag een offerte aan.',
    keywords: ['dakwerk leiden', 'dakbedekking', 'plat dak vervangen', 'dak repareren', 'dakisolatie leiden'],
    heroH1: 'Dakwerk & dakbedekking in Leiden',
    heroSub: 'Een waterdicht, goed geïsoleerd dak — vakkundig vervangen, gerepareerd of vernieuwd.',
    intro:
      'Een vochtplek op het plafond, losse dakpannen of een plat dak dat na elke regenbui plassen vasthoudt — een dak laat zich pas zien als het misgaat. En dan is de schade vaak al groter dan u dacht. Tijdig en goed dakwerk voorkomt veel ellende.',
    whatTitle: 'Welk dakwerk verzorgen wij?',
    whatBody:
      'We werken aan platte en schuine daken: nieuwe dakbedekking (bitumen of EPDM), dakpannen vervangen, dakbeschot en isolatie, daktrimmen, lood- en zinkwerk, goten en boeidelen. Of het nu gaat om een complete dakvervanging, een reparatie na lekkage of het isoleren van uw dak voor een lagere energierekening — wij zorgen voor een dak dat weer jaren meekan.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Lekkage of vochtplekken die op een dakprobleem wijzen',
      'Een verouderd plat dak dat aan vervanging toe is',
      'Losse, gebroken of verschoven dakpannen',
      'Dakisolatie voor meer comfort en lagere stookkosten',
      'In combinatie met een dakkapel of opbouw',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Een waterdicht dak dat bestand is tegen weer en wind',
      'Betere isolatie en daardoor lagere energiekosten',
      'Geen vochtproblemen of lekkages meer',
      'Een lange levensduur met de juiste materialen',
    ],
    faq: [
      {
        q: 'Kunnen jullie eerst alleen een lekkage opsporen en repareren?',
        a: 'Ja. We komen langs, sporen de oorzaak op en herstellen gericht. Soms volstaat een reparatie; is het dak echt aan vervanging toe, dan zeggen we dat eerlijk en geven we u de keuze.',
      },
      {
        q: 'Loont dakisolatie zich?',
        a: 'Een groot deel van het warmteverlies gaat via het dak. Goede dakisolatie verdient zich daarom doorgaans terug in lagere stookkosten én meer comfort. We adviseren u over de beste aanpak voor uw situatie.',
      },
    ],
    serviceType: 'Dakwerk en dakbedekking',
    related: ['verduurzaming', 'dakkapellen', 'kozijnen'],
  },

  // ───────────────────────── 6. VERDUURZAMING & ISOLATIE ─────────────────────────
  {
    slug: 'verduurzaming',
    title: 'Verduurzaming',
    navLabel: 'Verduurzaming & isolatie',
    summary:
      'Isolatie, HR++-glas en kierdichting — een lagere energierekening, meer comfort en een beter energielabel.',
    icon: 'leaf',
    image: 'service-verduurzaming',
    imageAlt: 'Vakman van De Bruin brengt isolatie aan tijdens het verduurzamen van een woning in Leiden',
    seoTitle: 'Woning verduurzamen & isoleren Leiden | De Bruin',
    metaDescription:
      'Uw woning verduurzamen in Leiden e.o.? Bouwbedrijf De Bruin verzorgt isolatie, HR++-glas en kierdichting voor een lagere energierekening en meer comfort. Vraag een offerte aan.',
    keywords: ['woning verduurzamen leiden', 'isolatie leiden', 'spouwmuurisolatie', 'dakisolatie', 'energielabel verbeteren'],
    heroH1: 'Verduurzaming & isolatie in Leiden',
    heroSub: 'Lager energieverbruik, meer comfort en een beter energielabel — stap voor stap.',
    intro:
      'Een hoge energierekening, kamers die maar niet warm worden en tocht langs ramen en vloer. Een slecht geïsoleerd huis kost u elke maand geld én comfort. Verduurzamen pakt dat bij de bron aan: u verbruikt minder, woont behaaglijker en maakt uw woning klaar voor de toekomst.',
    whatTitle: 'Wat houdt verduurzamen in?',
    whatBody:
      'Wij verduurzamen uw woning waar het rendement het hoogst is: dak-, vloer-, spouwmuur- en gevelisolatie, HR++- of triple-glas, en het kierdicht maken van de woning. Daarmee maken we uw huis ook geschikt voor een lagere temperatuur en een eventuele warmtepomp. We kijken naar uw woning als geheel, adviseren over een logische volgorde en denken mee over beschikbare subsidies. Zo verbetert u stap voor stap uw comfort én uw energielabel.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een oudere woning met enkel glas of weinig isolatie',
      'Hoge stookkosten en kamers die slecht warm worden',
      'Tocht langs ramen, deuren, vloer of dak',
      'Voorbereiden op een warmtepomp of lagere cv-temperatuur',
      'Een beter energielabel, bijvoorbeeld bij verkoop',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Een lagere energierekening, maand na maand',
      'Een behaaglijker huis zonder tocht en koude plekken',
      'Een beter energielabel en hogere woningwaarde',
      'Klaar voor aardgasvrij wonen en een warmtepomp',
    ],
    sections: [
      {
        title: 'Isolatie waar het loont',
        body:
          'Niet alles tegelijk hoeft. We beginnen graag bij de maatregelen met het hoogste rendement — vaak dak- en vloerisolatie en goed glas — en bouwen van daaruit verder. Zo spreidt u de investering en merkt u snel het verschil in comfort en verbruik.',
      },
      {
        title: 'Subsidies en energielabel',
        body:
          'Voor veel isolatiemaatregelen en glas zijn subsidies beschikbaar (zoals de ISDE). We denken met u mee over wat in uw situatie kan en leveren een duidelijke offerte, zodat u een eventuele aanvraag goed kunt onderbouwen. Vraag de actuele voorwaarden altijd na bij uw gemeente of RVO.',
      },
    ],
    faq: [
      {
        q: 'Waar kan ik het beste beginnen met verduurzamen?',
        a: 'Meestal bij de maatregelen met het hoogste rendement: dak- en vloerisolatie en goed isolerend glas. We bekijken uw woning en adviseren een logische, betaalbare volgorde — u hoeft niet alles in één keer te doen.',
      },
      {
        q: 'Kunnen jullie het verduurzamen combineren met een verbouwing?',
        a: 'Juist dan is het slim. Tijdens een verbouwing, aanbouw of nieuwe kozijnen is isoleren vaak eenvoudiger en voordeliger. Omdat wij het hele traject doen, nemen we de verduurzaming gewoon mee.',
      },
    ],
    serviceType: 'Verduurzaming en isolatie',
    related: ['kozijnen', 'dakwerk', 'verbouwing'],
  },

  // ─────────────────── 7. STUKADOORSWERK (EXTERNE LINK) ───────────────────
  // Linkt naar de aparte stukadoorssite. Geen interne detailpagina.
  {
    slug: 'stukadoorswerk',
    title: 'Stukadoorswerk',
    navLabel: 'Stukadoorswerk',
    summary:
      'Strak stucwerk, sierpleister en betonlook — verzorgd door onze gespecialiseerde stukadoors. Bekijk de aparte stukadoorssite.',
    icon: 'trowel',
    image: 'service-stukadoorswerk',
    imageAlt: 'Stukadoor werkt een wand strak af in een woning in Leiden',
    // ⚠️ Externe link: wijzigbaar in src/data/site.ts → externalLinks.stukadoors
    externalUrl: site.externalLinks.stukadoors,
    externalLabel: 'Bekijk de stukadoorssite',
    seoTitle: 'Stukadoorswerk Leiden | De Bruin',
    metaDescription:
      'Strak stucwerk, sierpleister en betonlook in Leiden e.o. — verzorgd door onze gespecialiseerde stukadoors. Bekijk de aparte stukadoorssite.',
    keywords: ['stukadoor leiden', 'stucwerk leiden', 'sierpleister', 'betonlook', 'pleisterwerk'],
    heroH1: 'Stukadoorswerk in Leiden',
    heroSub: 'Strak stuc-, sier- en spuitwerk door onze gespecialiseerde stukadoors.',
    intro:
      'Voor al ons stukadoorswerk werken we samen met onze gespecialiseerde stukadoors. Bekijk hun aparte website voor stucwerk, sierpleister, betonlook en meer.',
    whatTitle: 'Stukadoorswerk',
    whatBody:
      'Strak stucwerk, decoratieve sierpleister, naadloze betonlook en het airless spuiten van wanden en plafonds. Voor het complete stukadoorswerk verwijzen we u door naar onze gespecialiseerde stukadoorssite.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Strakke, egale wanden — sausklaar of behangklaar',
      'Sierpleister, spachtelputz of betonlook',
      'Plafonds afwerken en airless latex spuiten',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Vakkundig, strak afgewerkt stuc- en pleisterwerk',
    ],
    serviceType: 'Stukadoorswerk en pleisterwerk',
    related: ['verbouwing', 'schilderwerk', 'badkamers'],
  },

  // ─────────────────── 7. SCHILDERWERK (EXTERNE LINK) ───────────────────
  // Linkt naar de aparte schilderssite. Geen interne detailpagina.
  {
    slug: 'schilderwerk',
    title: 'Schilderwerk',
    navLabel: 'Schilderwerk binnen & buiten',
    summary:
      'Strak schilderwerk binnen en buiten, dat uw houtwerk beschermt én verfraait. Bekijk de aparte schilderssite.',
    icon: 'roller',
    image: 'service-schilderwerk',
    imageAlt: 'Schilder van De Bruin schildert het buitenkozijn van een woning in Leiden',
    // ⚠️ Externe link: wijzigbaar in src/data/site.ts → externalLinks.schilder
    externalUrl: site.externalLinks.schilder,
    externalLabel: 'Bekijk de schilderssite',
    seoTitle: 'Schilderwerk Leiden | binnen & buiten | De Bruin',
    metaDescription:
      'Schilder nodig in Leiden e.o.? Strak binnen- en buitenschilderwerk dat uw houtwerk beschermt. Bekijk de aparte schilderssite.',
    keywords: ['schilder leiden', 'schilderwerk leiden', 'buitenschilderwerk', 'binnenschilderwerk', 'houtwerk schilderen'],
    heroH1: 'Schilderwerk in Leiden',
    heroSub: 'Strak afgewerkt schilderwerk dat uw woning beschermt én verfraait — binnen en buiten.',
    intro:
      'Voor al ons schilderwerk verwijzen we u door naar onze gespecialiseerde schilders. Bekijk hun aparte website voor binnen- en buitenschilderwerk, kozijnen, deuren en meer.',
    whatTitle: 'Schilderwerk',
    whatBody:
      'Binnen- en buitenschilderwerk: kozijnen, deuren, boeidelen, muren en plafonds, strak en duurzaam afgewerkt. Voor het complete schilderwerk verwijzen we u door naar onze gespecialiseerde schilderssite.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Buitenschilderwerk dat toe is aan een onderhoudsbeurt',
      'Kozijnen en deuren die bladderen of dof zijn geworden',
      'Een frisse kleur op de muren binnen, strak afgewerkt',
      'Na een verbouwing, als sluitstuk van de afwerking',
    ],
    result: [
      'Strak, egaal afgewerkt binnen- en buitenschilderwerk',
    ],
    serviceType: 'Binnen- en buitenschilderwerk',
    related: ['stukadoorswerk', 'onderhoud', 'verbouwing'],
  },

  // ───────────────────── 8. KOZIJNEN, DEUREN & RAMEN ─────────────────────
  {
    slug: 'kozijnen',
    title: 'Kozijnen',
    navLabel: 'Kozijnen, deuren & ramen',
    summary:
      'Nieuwe kozijnen, deuren en ramen — kunststof of hout. Beter geïsoleerd, veiliger en onderhoudsarm.',
    icon: 'window',
    image: 'service-kozijnen',
    imageAlt: 'Nieuw geplaatst kunststof kozijn met isolerend glas in een woning in Leiden',
    seoTitle: 'Kozijnen, deuren & ramen Leiden | De Bruin',
    metaDescription:
      'Nieuwe kozijnen, deuren of ramen in Leiden e.o.? Bouwbedrijf De Bruin plaatst kunststof en houten kozijnen met isolerend glas. Vraag een vrijblijvende offerte aan.',
    keywords: ['kozijnen leiden', 'kunststof kozijnen', 'nieuwe deuren', 'ramen vervangen', 'hr++ glas leiden'],
    heroH1: 'Kozijnen, deuren & ramen in Leiden',
    heroSub: 'Beter geïsoleerd, veiliger en onderhoudsarm — nieuwe kozijnen in hout of kunststof.',
    intro:
      'Tochtende ramen, klemmende deuren of enkel glas dat de warmte zo naar buiten laat lopen. Oude kozijnen kosten u comfort én geld, en vragen steeds meer onderhoud. Nieuwe kozijnen met isolerend glas verdienen zich terug in een lagere energierekening en een stiller, behaaglijker huis.',
    whatTitle: 'Wat verzorgen wij?',
    whatBody:
      'Wij leveren en plaatsen kozijnen, deuren en ramen in kunststof of hout, met isolerend HR++- of triple-glas. Van het uitnemen van de oude kozijnen tot het waterdicht en strak afwerken van de nieuwe — inclusief het bijwerken van het stuc- en schilderwerk eromheen. Ook voor een nieuwe voordeur, achterdeur of schuifpui bent u bij ons aan het juiste adres.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Tochtende of slecht sluitende ramen en deuren',
      'Enkel of verouderd dubbel glas vervangen door HR++',
      'Een nieuwe voor-, achter- of schuifdeur',
      'Onderhoudsarm wonen met kunststof kozijnen',
      'In combinatie met een verbouwing of gevelrenovatie',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Beter geïsoleerde, kierdichte kozijnen',
      'Lagere energiekosten en minder geluid van buiten',
      'Meer inbraakwerendheid door modern hang- en sluitwerk',
      'Strak en waterdicht afgewerkt, binnen en buiten',
    ],
    faq: [
      {
        q: 'Kunststof of houten kozijnen — wat is beter?',
        a: 'Kunststof is vrijwel onderhoudsvrij en prijsgunstig; hout heeft een klassieke uitstraling en is goed te repareren en over te schilderen. We bespreken samen wat past bij uw woning, wensen en budget.',
      },
      {
        q: 'Werken jullie het stuc- en schilderwerk rondom af?',
        a: 'Ja. Omdat wij een compleet bouwbedrijf zijn, werken we de aansluitingen binnen en buiten netjes af — van stucwerk tot de laatste laag verf. Geen losse partijen nodig.',
      },
    ],
    serviceType: 'Kozijnen, deuren en ramen',
    related: ['verduurzaming', 'schilderwerk', 'onderhoud'],
  },

  // ───────────────────── 9. INSTALLATIE & ELEKTRA ─────────────────────
  {
    slug: 'installatie-elektra',
    title: 'Installatie & elektra',
    navLabel: 'Installatie & elektra',
    summary:
      'Water, verwarming en elektra — vakkundig aangelegd en aangesloten als onderdeel van uw klus.',
    icon: 'bolt',
    image: 'service-installatie-elektra',
    imageAlt: 'Vakman van De Bruin werkt aan een elektra-installatie tijdens een verbouwing in Leiden',
    seoTitle: 'Installatie & elektra Leiden | De Bruin',
    metaDescription:
      'Installatie- en elektrawerk in Leiden e.o.? Bouwbedrijf De Bruin verzorgt water, verwarming, leiding- en elektrawerk als onderdeel van uw verbouwing. Vraag een offerte aan.',
    keywords: ['installatiewerk leiden', 'elektra leiden', 'groepenkast', 'leidingwerk', 'loodgieter leiden'],
    heroH1: 'Installatie & elektra in Leiden',
    heroSub: 'Water, verwarming en elektra — vakkundig aangelegd, getest en aangesloten.',
    intro:
      'Een verbouwing of nieuwe badkamer betekent bijna altijd ook leiding- en elektrawerk. Losse vakmensen inplannen die op elkaar moeten wachten, kost tijd en gedoe. Wij verzorgen het installatie- en elektrawerk als vast onderdeel van uw project, zodat alles op elkaar aansluit.',
    whatTitle: 'Wat verzorgen wij?',
    whatBody:
      'We verzorgen het complete installatie- en elektrawerk: water- en afvoerleidingen, aansluitingen voor keuken en badkamer, radiatoren en vloerverwarming, en elektra zoals groepenkasten, bedrading, schakelaars, stopcontacten en verlichting. Alles wordt vakkundig aangelegd, getest en veilig aangesloten — netjes weggewerkt in de afwerking.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Leiding- en elektrawerk bij een verbouwing of aanbouw',
      'Een nieuwe of uitgebreide groepenkast',
      'Extra stopcontacten, schakelaars of verlichtingspunten',
      'Water- en verwarmingsaansluitingen voor keuken of badkamer',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Veilig en volgens de regels aangelegde installaties',
      'Alles netjes weggewerkt in de afwerking',
      'Eén partij voor bouw én techniek — geen afstemmingsgedoe',
      'Getest en gebruiksklaar opgeleverd',
    ],
    faq: [
      {
        q: 'Doen jullie ook losse elektra- of installatieklussen?',
        a: 'Het zwaartepunt ligt op installatie- en elektrawerk binnen een verbouwing of renovatie, omdat alles dan op elkaar aansluit. Voor losse klussen kijken we graag of we u kunnen helpen of de juiste partij kunnen aanbevelen.',
      },
      {
        q: 'Is het werk veilig en volgens de normen?',
        a: 'Ja. Elektra- en installatiewerk voeren we uit volgens de geldende normen en we testen alles voordat we opleveren. Veiligheid staat voorop.',
      },
    ],
    serviceType: 'Installatie- en elektrawerk',
    related: ['badkamers', 'verbouwing', 'onderhoud'],
  },

  // ───────────────────── 10. ONDERHOUD & SCHADEHERSTEL ─────────────────────
  {
    slug: 'onderhoud',
    title: 'Onderhoud',
    navLabel: 'Onderhoud & schadeherstel',
    summary:
      'Klein onderhoud, reparaties en herstel na water- of brandschade. Snel geregeld door één vaste partij.',
    icon: 'wrench',
    image: 'service-onderhoud',
    imageAlt: 'Vakman van De Bruin voert onderhoudswerk uit aan een woning in Leiden',
    seoTitle: 'Onderhoud & schadeherstel Leiden | De Bruin',
    metaDescription:
      'Onderhoud, reparaties of herstel na water- en brandschade in Leiden e.o.? Bouwbedrijf De Bruin pakt het snel en vakkundig aan. Vraag een vrijblijvende offerte aan.',
    keywords: ['onderhoud woning leiden', 'klusbedrijf leiden', 'waterschade herstel', 'brandschade herstel', 'reparatie woning'],
    heroH1: 'Onderhoud & schadeherstel in Leiden',
    heroSub: 'Van klein onderhoud tot herstel na water- of brandschade — snel en vakkundig geregeld.',
    intro:
      'Een lijst met klusjes die maar blijft liggen, of juist acute schade na een lekkage of brand. In beide gevallen wilt u één betrouwbare partij die het oppakt en netjes afwerkt — zonder dat u zelf allerlei vakmensen moet regelen.',
    whatTitle: 'Wat verzorgen wij?',
    whatBody:
      'We verzorgen klein en groot onderhoud aan uw woning: reparaties aan houtwerk, metsel- en voegwerk, deuren en kozijnen, en het wegwerken van slijtage en gebreken. Daarnaast herstellen we schade na bijvoorbeeld een lekkage, water- of brandschade — van het verwijderen van aangetaste materialen tot het volledig herstellen en afwerken van de ruimte. We werken waar nodig samen met uw verzekeraar.',
    forWhoTitle: 'Voor wie en wanneer?',
    forWho: [
      'Een lijst met klus- en reparatiewerk aan uw woning',
      'Herstel na water-, lek- of brandschade',
      'Achterstallig onderhoud dat u in één keer wilt wegwerken',
      'Vve’s en verhuurders die een vaste onderhoudspartij zoeken',
    ],
    resultTitle: 'Het resultaat',
    result: [
      'Klussen en gebreken in één keer netjes verholpen',
      'Schade vakkundig hersteld en strak afgewerkt',
      'Eén vast aanspreekpunt voor al uw onderhoud',
      'Waar nodig afstemming met uw verzekeraar',
    ],
    faq: [
      {
        q: 'Helpen jullie ook bij het afhandelen van schade met de verzekering?',
        a: 'Waar dat kan, denken we mee en stemmen we af met uw verzekeraar — bijvoorbeeld met een duidelijke offerte en foto’s van de schade. Zo verloopt het herstel zo soepel mogelijk.',
      },
      {
        q: 'Kan ik jullie ook inschakelen voor losse, kleine klusjes?',
        a: 'Zeker. Of het nu om één reparatie gaat of een hele onderhoudslijst — we pakken het op. Vertel ons wat er speelt, dan geven we u een eerlijke prijsindicatie.',
      },
    ],
    serviceType: 'Onderhoud en schadeherstel',
    related: ['schilderwerk', 'dakwerk', 'installatie-elektra'],
  },
];

/** Zoek een dienst op slug */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Map slugs → services (voor "gerelateerde diensten") */
export function getServices(slugs: string[]): Service[] {
  return slugs.map((s) => getService(s)).filter((s): s is Service => Boolean(s));
}

/** Is dit een externe dienst (linkt naar een aparte site i.p.v. een dienstpagina)? */
export function isExternalService(service: Service): service is Service & { externalUrl: string } {
  return Boolean(service.externalUrl);
}

/** De juiste link voor een dienst: externe URL of interne dienstpagina. */
export function serviceHref(service: Service): string {
  return service.externalUrl ?? `/diensten/${service.slug}/`;
}

/** Alleen de diensten met een interne detailpagina (externe diensten uitgesloten). */
export const internalServices: Service[] = services.filter((s) => !s.externalUrl);
