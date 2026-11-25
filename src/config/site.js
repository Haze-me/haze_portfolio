// ---------------------------------------------------------------------------
// EDIT THIS FILE to change company and contact details.
// Plain JavaScript only (the SEO script imports it).
// ---------------------------------------------------------------------------

// Your Formspree form address. It is not a secret. If emptied, visitors send
// the enquiry themselves by email or WhatsApp.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkalvnp';

export const site = {
  name: 'HazeTech',
  founder: 'Harrison Aka',
  title: 'Business Website Solutions',
  positioning:
    'I help businesses establish a strong online presence through modern, responsive and functional websites.',

  // No trailing slashes. Used for links between the two sites, canonical
  // links, the sitemap and social sharing images.
  url: 'https://hazetech.online',
  demoUrl: 'https://demo.hazetech.online',

  email: 'harrisonaka29@gmail.com',
  phone: '+234 806 966 8882', // as displayed
  // WhatsApp numbers: digits only, starting with the country code, with no "+"
  // or leading 0 (Nigeria: 234, then the number without its first 0).
  whatsapp: '2348069668882', // portfolio buttons
  demoWhatsapp: '2348069668882', // PrimeNest demo buttons; if empty, uses the number above
  location: 'Lagos, Nigeria',

  // Full profile URLs. An empty one is simply not shown.
  social: {
    github: 'https://github.com/Haze-me',
    linkedin: 'https://www.linkedin.com/in/aka-harrison-0784a8217',
  },

  // VITE_FORM_ENDPOINT in a .env file overrides the address above.
  formEndpoint: import.meta.env?.VITE_FORM_ENDPOINT || FORMSPREE_ENDPOINT,
};

export const placeholders = {
  email: '[Your email address]',
  phone: '[Your phone number]',
  location: '[Your city, country]',
};

export const socialLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
};
