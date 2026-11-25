import { demoPath } from '../../utils/domains.js';
// Content for the FICTIONAL PrimeNest Properties agency.
export const agencyServices = [
  { title: 'Property sales', body: 'Helping buyers compare homes and land, arrange inspections and understand the steps to purchase.' },
  { title: 'Rentals and letting', body: 'Matching tenants with homes and offices, and presenting landlords’ properties clearly.' },
  { title: 'Property management', body: 'Coordinating rent records, maintenance requests and tenant communication for owners.' },
  { title: 'Viewing and inspection support', body: 'Arranging visits, including video walkthroughs for buyers who cannot attend in person.' },
  { title: 'Developer marketing', body: 'Presenting new developments with unit types, photos and a direct route to enquire.' },
  { title: 'Documentation guidance', body: 'Explaining which documents to request and when to involve a qualified property lawyer.' },
];

export const agencyValues = [
  { title: 'Clear information', body: 'Price, location, type and availability shown on each listing.' },
  { title: 'Verify before you pay', body: 'We encourage every buyer to confirm title documents with a qualified lawyer.' },
  { title: 'Easy to reach', body: 'Ask about any property by WhatsApp or an enquiry form.' },
];

export const demoNav = [
  { to: demoPath(), label: 'Home' },
  { to: demoPath('/properties'), label: 'Properties' },
  { to: demoPath('/about'), label: 'About' },
  { to: demoPath('/services'), label: 'Services' },
  { to: demoPath('/contact'), label: 'Contact' },
];
