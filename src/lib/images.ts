/**
 * Afbeeldingen-helper.
 *
 * Alle foto's in src/assets/images/ worden door Astro (astro:assets) verwerkt:
 * automatisch omgezet naar AVIF/WebP, met expliciete width/height tegen
 * layout shift. Via deze helper koppelen we een bestandsnaam (zoals opgeslagen
 * in services.ts) aan de geoptimaliseerde ImageMetadata.
 *
 * Vervang de placeholder-afbeeldingen in src/assets/images/ door je eigen
 * projectfoto's (zelfde bestandsnaam = werkt direct).
 */
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** Map van basisnaam (zonder pad/extensie) → ImageMetadata */
const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(images)) {
  const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byName.set(base, mod.default);
}

/** Haal een afbeelding op basisnaam op (bijv. "service-stucwerk"). */
export function img(name: string): ImageMetadata {
  const found = byName.get(name);
  if (!found) {
    throw new Error(
      `Afbeelding "${name}" niet gevonden in src/assets/images/. Beschikbaar: ${[...byName.keys()].join(', ')}`,
    );
  }
  return found;
}
