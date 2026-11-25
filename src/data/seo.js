// Titles and descriptions for every route. Used at runtime (useSeo) and at
// build time (scripts/generate-seo.mjs), so keep this file plain JavaScript.
import { projects } from './projects.js';

export const pageMeta = {
  '/': {
    title: 'HazeTech | Web Developer in Nigeria for Business Websites',
    description:
      'HazeTech, led by web developer Harrison Aka in Lagos, builds responsive business and real estate websites for clients in Port Harcourt, across Nigeria and abroad.',
  },
  '/about': {
    title: 'About HazeTech | Harrison Aka, Web Developer',
    description:
      'Meet Harrison Aka, the web developer behind HazeTech, working across frontend, backend and DevOps with React, Django, FastAPI, AWS, Docker and Kubernetes.',
  },
  '/services': {
    title: 'Website Development Services in Nigeria | HazeTech',
    description:
      'Business and real estate websites, redesigns, landing pages, web applications, APIs, cloud deployment and website maintenance.',
  },
  '/pricing': {
    title: 'Website Design Pricing in Naira | HazeTech',
    description:
      'Website packages with starting prices: Starter from ₦200,000, Professional from ₦350,000 and Real Estate from ₦650,000.',
  },
  '/projects': {
    title: 'Web Development Projects | HazeTech',
    description:
      'Selected web platform, backend and cloud projects, plus an interactive real estate website demonstration.',
  },
  '/contact': {
    title: 'Start a Project | Contact HazeTech',
    description:
      'Request a quote for a business website, real estate website or web application. Enquire by form or WhatsApp.',
  },
  '/faq': {
    title: 'Website Development FAQ | HazeTech',
    description:
      'Answers about website costs, timelines, mobile support, redesigns, hosting, content updates and maintenance.',
  },
};

for (const project of projects) {
  pageMeta[`/projects/${project.slug}`] = {
    title: `${project.name}: ${project.subtitle} | HazeTech`,
    description: project.description,
  };
}

export const demoMeta = {
  '/demo/primenest': {
    title: 'PrimeNest Properties | Real Estate Website Demo',
    description:
      'A demonstration real estate website by HazeTech. PrimeNest Properties is fictional and the listings are not for sale.',
  },
  '/demo/primenest/properties': {
    title: 'Properties | PrimeNest Properties Demo',
    description: 'Search and filter fictional Nigerian property listings in this website demonstration.',
  },
  '/demo/primenest/about': {
    title: 'About the Agency | PrimeNest Properties Demo',
    description: 'About page for the fictional PrimeNest Properties agency.',
  },
  '/demo/primenest/services': {
    title: 'Agency Services | PrimeNest Properties Demo',
    description: 'Services page for the fictional PrimeNest Properties agency.',
  },
  '/demo/primenest/contact': {
    title: 'Contact | PrimeNest Properties Demo',
    description: 'Contact page for the fictional PrimeNest Properties agency.',
  },
};
