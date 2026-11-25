import { site } from '../config/site.js';
import { services } from '../data/services.js';

/** Only configured contact details are published. No ratings or reviews. */
export function siteSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: `${site.url}/`,
    description: site.positioning,
    areaServed: ['Lagos', 'Port Harcourt', 'Nigeria', 'International'],
    founder: { '@type': 'Person', name: site.founder, jobTitle: 'Web Developer' },
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.summary },
    })),
    ...(site.email && { email: site.email }),
    ...(site.phone && { telephone: site.phone }),
    ...(sameAs.length && { sameAs }),
  };
}

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});
