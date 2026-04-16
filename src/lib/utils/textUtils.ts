/**
 * Normalizes text for comparison by removing accents/diacritics and converting to lowercase.
 * @param text The text to normalize
 * @returns Normalized string
 */
export const normalizeText = (
  text: string | undefined | null
): string => {
  if ( !text ) {
    return '';
  }

  return text
    .normalize(
      'NFD'
    )
    .replace(
      /[\u0300-\u036f]/g, ''
    )
    .toLowerCase();
};
