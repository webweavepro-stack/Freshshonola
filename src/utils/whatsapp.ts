/**
 * WhatsApp Helper Utilities for Freshshonola Multiventures
 * Official Number: +2347068465334 (Country code +234, Nigeria)
 */

export const WHATSAPP_PHONE_NUMBER = '2347068465334';
export const DISPLAY_PHONE_NUMBER = '+234 706 846 5334';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

/**
 * Builds a clean, safely encoded WhatsApp URL with prefilled text.
 * Ensures no 'undefined', 'null', or empty values are included.
 */
export function buildWhatsAppUrl(message: string): string {
  const sanitizedMessage = (message || '').trim();
  if (!sanitizedMessage) {
    return WHATSAPP_BASE_URL;
  }
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(sanitizedMessage)}`;
}

/**
 * Helper to safely open WhatsApp in a new tab with noopener/noreferrer.
 * If blocked by browser popup blockers, navigates directly as a reliable fallback.
 */
export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Browser popup blocker prevented new tab, navigate directly
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
}
