// FICTIONAL demonstration data. None of these properties exist or are for sale.
import { photos as p } from './images.js';

export const STATUS = {
  available: 'Available',
  offer: 'Under offer',
  sold: 'Sold',
  let: 'Let',
};

export const properties = [
  {
    id: 'lekki-4-bed-terrace-duplex',
    title: '4-Bedroom Terrace Duplex in a Gated Estate',
    area: 'Lekki', city: 'Lagos', state: 'Lagos',
    purpose: 'sale', price: 235000000,
    type: 'Terrace Duplex', bedrooms: 4, bathrooms: 5, size: '280 m²',
    status: STATUS.available, featured: true,
    description:
      'A well-planned terrace duplex with a spacious family lounge, a fitted kitchen and en-suite bedrooms. The home sits in a gated estate with controlled access and parking for two cars.',
    amenities: ['Gated estate', 'Fitted kitchen', 'En-suite bedrooms', 'Parking for 2 cars', "Staff room"],
    images: [p.glassHouse, p.living, p.kitchen, p.bedroom, p.bathroom],
  },
  {
    id: 'ikoyi-5-bed-detached-house',
    title: '5-Bedroom Detached House with Pool',
    area: 'Ikoyi', city: 'Lagos', state: 'Lagos',
    purpose: 'sale', price: 1250000000,
    type: 'Detached Duplex', bedrooms: 5, bathrooms: 6, size: '650 m²',
    status: STATUS.available, featured: true,
    description:
      'A detached residence designed for family living and entertaining, with a private pool, generous reception rooms and a separate service area.',
    amenities: ['Swimming pool', 'Family lounge', 'Home office', "Staff quarters", 'Parking for 5 cars'],
    images: [p.heroHome, p.lounge, p.kitchen, p.bedroom, p.bathroom],
  },
  {
    id: 'victoria-island-3-bed-apartment',
    title: '3-Bedroom Serviced Apartment',
    area: 'Victoria Island', city: 'Lagos', state: 'Lagos',
    purpose: 'rent', price: 18000000,
    type: 'Apartment', bedrooms: 3, bathrooms: 4, size: '190 m²',
    status: STATUS.available, featured: true,
    description:
      'A serviced apartment close to offices and restaurants, with an open living and dining area, a balcony and shared building facilities. Service charge is not included in the rent shown.',
    amenities: ['Serviced building', 'Lift', 'Balcony', 'Backup power', 'Gym'],
    images: [p.apartments, p.apartmentLiving, p.kitchen, p.bedroom],
  },
  {
    id: 'maitama-6-bed-mansion',
    title: '6-Bedroom Contemporary Mansion',
    area: 'Maitama', city: 'Abuja', state: 'FCT',
    purpose: 'sale', price: 980000000,
    type: 'Detached Duplex', bedrooms: 6, bathrooms: 7, size: '820 m²',
    status: STATUS.available, featured: true,
    description:
      'A large contemporary home on a landscaped plot, with two living rooms, a study, a guest suite and ample parking.',
    amenities: ['Swimming pool', 'Landscaped garden', 'Guest suite', 'Study', 'Security post', 'Parking for 6 cars'],
    images: [p.poolHouse, p.living, p.kitchen, p.bedroom, p.bathroom],
  },
  {
    id: 'gwarinpa-4-bed-semi-detached',
    title: '4-Bedroom Semi-Detached Duplex',
    area: 'Gwarinpa', city: 'Abuja', state: 'FCT',
    purpose: 'sale', price: 145000000,
    type: 'Semi-Detached Duplex', bedrooms: 4, bathrooms: 4, size: '260 m²',
    status: STATUS.available, featured: true,
    description:
      'A practical family home with a bright lounge, a dining area, a fitted kitchen and a compact private compound.',
    amenities: ['Private compound', 'Fitted kitchen', 'Water treatment', 'Parking for 3 cars'],
    images: [p.whiteHouse, p.lounge, p.kitchen, p.bedroom],
  },
  {
    id: 'port-harcourt-gra-3-bed-apartment',
    title: '3-Bedroom Apartment in GRA',
    area: 'GRA Phase 2', city: 'Port Harcourt', state: 'Rivers',
    purpose: 'rent', price: 4500000,
    type: 'Apartment', bedrooms: 3, bathrooms: 3, size: '150 m²',
    status: STATUS.available, featured: true,
    description:
      'A comfortable apartment in a quiet residential setting, with good natural light, fitted wardrobes and dedicated parking.',
    amenities: ['Fitted wardrobes', 'Dedicated parking', 'Borehole water', 'Gated compound'],
    images: [p.studio, p.apartmentLiving, p.kitchen, p.bathroom],
  },
  {
    id: 'port-harcourt-5-bed-duplex',
    title: '5-Bedroom Duplex with Guest Wing',
    area: 'Trans Amadi', city: 'Port Harcourt', state: 'Rivers',
    purpose: 'sale', price: 295000000,
    type: 'Detached Duplex', bedrooms: 5, bathrooms: 5, size: '420 m²',
    status: STATUS.offer,
    description:
      'A detached duplex with a separate guest wing, two lounges and a paved compound suited to a large household.',
    amenities: ['Guest wing', 'Two lounges', 'Paved compound', 'Security post'],
    images: [p.duskHouse, p.living, p.kitchen, p.bedroom],
  },
  {
    id: 'lekki-3-bed-apartment-rent',
    title: '3-Bedroom Apartment near Lekki Phase 1',
    area: 'Lekki', city: 'Lagos', state: 'Lagos',
    purpose: 'rent', price: 8500000,
    type: 'Apartment', bedrooms: 3, bathrooms: 3, size: '160 m²',
    status: STATUS.available,
    description:
      'A well-finished apartment with an open lounge, a fitted kitchen and en-suite rooms, suited to a small family or working professionals.',
    amenities: ['En-suite rooms', 'Fitted kitchen', 'Parking', 'Gated compound'],
    images: [p.lounge, p.kitchen, p.bedroom, p.apartments],
  },
  {
    id: 'ikoyi-2-bed-penthouse',
    title: '2-Bedroom Penthouse with Terrace',
    area: 'Ikoyi', city: 'Lagos', state: 'Lagos',
    purpose: 'rent', price: 25000000,
    type: 'Penthouse', bedrooms: 2, bathrooms: 3, size: '210 m²',
    status: STATUS.let,
    description:
      'A top-floor home with a private terrace and wide windows. This listing shows how a let property can stay visible with a clear status.',
    amenities: ['Private terrace', 'Lift', 'Serviced building', 'Backup power'],
    images: [p.living, p.apartmentLiving, p.bedroom, p.bathroom],
  },
  {
    id: 'gwarinpa-3-bed-bungalow',
    title: '3-Bedroom Bungalow with Garden',
    area: 'Gwarinpa', city: 'Abuja', state: 'FCT',
    purpose: 'rent', price: 3800000,
    type: 'Bungalow', bedrooms: 3, bathrooms: 3, size: '170 m²',
    status: STATUS.available,
    description:
      'A single-level home with a small garden, a comfortable lounge and easy access for older family members.',
    amenities: ['Garden', 'Single level', 'Parking for 2 cars', 'Borehole water'],
    images: [p.villaGarden, p.studio, p.kitchen, p.bedroom],
  },
  {
    id: 'victoria-island-office-floor',
    title: 'Open-Plan Office Floor',
    area: 'Victoria Island', city: 'Lagos', state: 'Lagos',
    purpose: 'rent', price: 42000000,
    type: 'Commercial', bedrooms: 0, bathrooms: 4, size: '450 m²',
    status: STATUS.available,
    description:
      'A flexible office floor with meeting space, a reception area and lift access in a managed commercial building.',
    amenities: ['Reception area', 'Meeting rooms', 'Lift', 'Backup power', 'Visitor parking'],
    images: [p.towers, p.office, p.meeting],
  },
  {
    id: 'lekki-600sqm-residential-plot',
    title: '600 m² Residential Plot',
    area: 'Lekki', city: 'Lagos', state: 'Lagos',
    purpose: 'sale', price: 90000000,
    type: 'Land', bedrooms: 0, bathrooms: 0, size: '600 m²',
    status: STATUS.sold,
    description:
      'A residential plot in a developing neighbourhood. This listing shows how sold stock can be marked clearly. Always verify title documents before buying any land.',
    amenities: ['Residential use', 'Road access'],
    images: [p.land],
  },
];

export const propertyTypes = [...new Set(properties.map((item) => item.type))].sort();

export const locations = [
  'Lekki, Lagos',
  'Ikoyi, Lagos',
  'Victoria Island, Lagos',
  'Gwarinpa, Abuja',
  'Maitama, Abuja',
  'Port Harcourt, Rivers',
];

export const locationOf = (property) =>
  property.city === 'Port Harcourt'
    ? `${property.area}, Port Harcourt, ${property.state}`
    : `${property.area}, ${property.city}`;

export const getProperty = (id) => properties.find((item) => item.id === id);
