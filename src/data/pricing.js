export const packages = [
  {
    id: 'starter',
    name: 'Starter Business Website',
    price: 200000,
    delivery: '5–7 working days',
    audience: 'For small businesses that need a credible online presence.',
    service: 'business-website-development',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'About and services pages',
      'Contact form',
      'WhatsApp integration',
      'Google Maps integration',
      'Basic SEO setup',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Business Website',
    price: 350000,
    delivery: '2–3 weeks',
    audience: 'For established businesses that need a custom design and more room.',
    service: 'business-website-development',
    featured: true,
    features: [
      'Up to 8 pages',
      'Custom professional design',
      'Services and portfolio sections',
      'Contact and enquiry forms',
      'WhatsApp integration',
      'Google Maps integration',
      'SEO foundations',
      'Analytics integration',
      'Social media integration',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate Website',
    price: 650000,
    delivery: '3–5 weeks',
    audience: 'For real estate agencies and property developers.',
    service: 'real-estate-website-development',
    features: [
      'Custom real estate website',
      'Property listing catalogue',
      'Property details pages',
      'Search and filtering',
      'Property image galleries',
      'Property enquiry forms',
      'WhatsApp enquiry integration',
      'Admin dashboard for property management',
      'SEO foundations',
      'Analytics integration',
    ],
  },
];

export const paymentTerms = '60% upfront and 40% before final handover';

export const pricingConditions = [
  'All prices shown are starting prices.',
  'Advanced requirements receive a customised quotation.',
  'Domain registration, hosting and third-party subscriptions are quoted separately.',
  `Payment is structured as ${paymentTerms}.`,
  'Each package includes only the features listed for it. Anything else can be quoted.',
];

export const getPackage = (id) => packages.find((item) => item.id === id);
