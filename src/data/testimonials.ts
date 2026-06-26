/**
 * Klantreviews / social proof.
 *
 * Er zijn (nog) geen echte reviews, dus deze lijst is LEEG. Daardoor wordt de
 * "Wat klanten zeggen"-sectie op de homepage automatisch verborgen — we tonen
 * bewust geen verzonnen reviews (dat is misleidend en kan je Google
 * Bedrijfsprofiel/Ads-account schaden).
 *
 * Zodra je echte Google-reviews hebt: voeg ze hieronder toe volgens het
 * voorbeeld in commentaar, en de sectie verschijnt vanzelf weer. Vul dan ook
 * site.stats.rating / reviewCount in met je werkelijke cijfers.
 *
 * Voorbeeld:
 *   {
 *     name: 'Mariëlle V.',
 *     place: 'Leiden',
 *     rating: 5,
 *     service: 'Uitbouw & keuken',
 *     text: 'Onze uitbouw is prachtig geworden. Eén aanspreekpunt, duidelijke prijs vooraf en alles netjes opgeleverd. Een aanrader!',
 *   },
 */

export interface Testimonial {
  name: string;
  place: string;
  /** 1–5 */
  rating: number;
  text: string;
  /** Type klus, voor context */
  service?: string;
}

export const testimonials: Testimonial[] = [];
