import { site } from '../config/site.js';

export function enquiryToText(values) {
  return [
    'New project enquiry for HazeTech',
    '',
    `Name: ${values.fullName.trim()}`,
    values.businessName.trim() ? `Business: ${values.businessName.trim()}` : null,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Project type: ${values.projectType}`,
    `Estimated budget: ${values.budget}`,
    `Preferred contact: ${values.contactMethod}`,
    '',
    values.description.trim(),
  ]
    .filter((line) => line !== null)
    .join('\n');
}

/**
 * The single place to connect a backend or form service.
 * Returns { delivered: false } when nothing is configured, so the UI never
 * claims a message was sent when it was not. Throws if sending fails.
 */
export async function submitEnquiry(values, endpoint = site.formEndpoint) {
  if (!endpoint) return { delivered: false };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      // Formspree uses `_subject` as the email subject and `email` as reply-to.
      body: JSON.stringify({ ...values, _subject: `New HazeTech enquiry from ${values.fullName.trim()}` }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    return { delivered: true };
  } finally {
    clearTimeout(timeout);
  }
}
