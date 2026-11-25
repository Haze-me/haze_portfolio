import { services } from './services.js';

export const projectTypes = [...services.map((service) => service.title), 'Another type of website or project'];

export const budgets = [
  'Under ₦200,000',
  '₦200,000 – ₦349,999',
  '₦350,000 – ₦649,999',
  '₦650,000 – ₦1,000,000',
  'Above ₦1,000,000',
  'I am an international client (will discuss)',
  'Not sure yet',
];

export const contactMethods = ['WhatsApp', 'Email', 'Phone call'];

/** Pre-fills the form from links such as /contact?package=real-estate */
export function prefillFromParams(params) {
  const service = services.find((item) => item.slug === params.get('service'));
  const byPackage = {
    starter: { projectType: 'Business Website Development', budget: budgets[1], name: 'Starter Business Website' },
    professional: { projectType: 'Business Website Development', budget: budgets[2], name: 'Professional Business Website' },
    'real-estate': { projectType: 'Real Estate Website Development', budget: budgets[3], name: 'Real Estate Website' },
  };
  const pack = byPackage[params.get('package')];
  const custom = params.get('quote') === 'custom';

  return {
    projectType: pack?.projectType ?? service?.title ?? '',
    budget: pack?.budget ?? '',
    description: pack ? `I am interested in the ${pack.name} package. ` : '',
    context: pack
      ? `${pack.name} package`
      : custom
        ? 'a custom quote'
        : (service?.title ?? ''),
  };
}
