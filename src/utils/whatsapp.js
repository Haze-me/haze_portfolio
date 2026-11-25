/** False for empty values and placeholders such as 234XXXXXXXXXX. */
export function isRealNumber(number = '') {
  const value = String(number).trim();
  const digits = value.replace(/\D/g, '');
  return /^\+?[\d\s()-]+$/.test(value) && digits.length >= 8 && digits.length <= 15;
}

/** The first configured number, or '' when all are placeholders. */
export const pickNumber = (...numbers) => numbers.find(isRealNumber) ?? '';

// With a real number: opens a chat with that number.
// Otherwise: WhatsApp opens with the message and asks the sender to pick a chat.
export function whatsappUrl(message, number = '') {
  const digits = isRealNumber(number) ? String(number).replace(/\D/g, '') : '';
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  'Hello HazeTech, I found your website and would like to discuss a website project.';
