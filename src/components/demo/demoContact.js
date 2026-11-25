import { site } from '../../config/site.js';
import { formatNaira } from '../../utils/format.js';
import { locationOf } from '../../data/demo/properties.js';
import { pickNumber, whatsappUrl } from '../../utils/whatsapp.js';

export const priceLabel = (property) =>
  `${formatNaira(property.price)}${property.purpose === 'rent' ? ' per year' : ''}`;

export const purposeLabel = (property) => (property.purpose === 'rent' ? 'For rent' : 'For sale');

export function propertyMessage(property, extra = '') {
  return [
    'Hello, I am enquiring about this property on the PrimeNest Properties website (demonstration):',
    '',
    property.title,
    `Location: ${locationOf(property)}`,
    `${purposeLabel(property)}: ${priceLabel(property)}`,
    `Type: ${property.type}`,
    property.bedrooms ? `Bedrooms: ${property.bedrooms}` : null,
    property.bathrooms ? `Bathrooms: ${property.bathrooms}` : null,
    `Status: ${property.status}`,
    `Reference: ${property.id}`,
    extra ? `\n${extra}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export const generalMessage =
  'Hello, I am looking at the PrimeNest Properties demonstration website and would like to make an enquiry.';

// PrimeNest is fictional, so demo messages go to a number you control. While
// both are placeholders, WhatsApp opens with the message and asks for a chat.
export const demoWhatsapp = (message) =>
  whatsappUrl(message, pickNumber(site.demoWhatsapp, site.whatsapp));
