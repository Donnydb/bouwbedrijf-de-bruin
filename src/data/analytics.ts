/**
 * ────────────────────────────────────────────────────────────────────────
 *  TRACKING / ANALYTICS — vul hier je ID's in (en niets anders is nodig).
 *
 *  Zolang een ID leeg is (''), wordt de bijbehorende tag NIET geladen — de
 *  site werkt dan gewoon zonder tracking. Vul in en deploy opnieuw om te
 *  activeren.
 *
 *  Aanbevolen aanpak: gebruik ALLEEN Google Tag Manager (gtmId) en beheer
 *  GA4 + Google Ads conversies binnen GTM. Dan hoef je hieronder enkel `gtmId`
 *  in te vullen. Wil je liever direct GA4/Ads laden (zonder GTM), vul dan
 *  `ga4Id` en/of `googleAdsId` in.
 * ────────────────────────────────────────────────────────────────────────
 */

export const analytics = {
  /** Google Tag Manager container-ID, bijv. 'GTM-XXXXXXX' (aanbevolen) */
  gtmId: '',

  /** GA4 Measurement ID, bijv. 'G-XXXXXXXXXX' (alleen nodig zónder GTM) */
  ga4Id: '',

  /** Google Ads conversie-ID, bijv. 'AW-XXXXXXXXXX' (alleen nodig zónder GTM) */
  googleAdsId: '',

  /**
   * Google Ads conversielabel voor de "lead" (offerteaanvraag),
   * bijv. 'AW-XXXXXXXXXX/AbC-D_efGhIjKlMnOp'. Wordt op de /bedankt/-pagina
   * gebruikt om `gtag('event','conversion', { send_to: ... })` te vuren.
   *
   * Eén lead = één conversie. Koppel je Ads-/GA4-leadconversie UITSLUITEND aan
   * het event `lead_submitted` (de /bedankt/-pagina), NIET aan `generate_lead`
   * (dat vuurt al bij submit, vóór de redirect, en zou dubbel tellen).
   * Bel-/WhatsApp-conversies koppel je los aan `contact_call` / `contact_whatsapp`.
   */
  adsLeadConversionLabel: '',
} as const;
