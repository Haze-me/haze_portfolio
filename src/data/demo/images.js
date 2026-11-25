// Stock photos from Unsplash (free Unsplash licence), loaded from their image
// CDN. They illustrate fictional listings only. To self-host, put files in
// /public/demo/ and change imageUrl() below.
export const photos = {
  heroHome: { id: 'photo-1613490493576-7fde63acd811', alt: 'White modern villa with a swimming pool' },
  glassHouse: { id: 'photo-1600596542815-ffad4c1539a9', alt: 'White modern house with large windows and a swimming pool' },
  duskHouse: { id: 'photo-1600585154340-be6161a56a0c', alt: 'Contemporary house exterior with a paved driveway' },
  villaGarden: { id: 'photo-1512917774080-9991f1c4c750', alt: 'Single-storey contemporary house with a paved front terrace' },
  poolHouse: { id: 'photo-1580587771525-78b9dba3b914', alt: 'Modern house beside a swimming pool' },
  whiteHouse: { id: 'photo-1600047509807-ba8f99d2cdde', alt: 'Modern house exterior with clean lines' },
  apartments: { id: 'photo-1545324418-cc1a3fa10c00', alt: 'Multi-storey apartment building with balconies' },
  towers: { id: 'photo-1486406146926-c627a92ad1ab', alt: 'Glass office towers seen from below' },
  office: { id: 'photo-1497366216548-37526070297c', alt: 'Bright open-plan office interior' },
  meeting: { id: 'photo-1497366811353-6870744d04b2', alt: 'Office with glass-walled meeting space' },
  living: { id: 'photo-1600607687939-ce8a6c25118c', alt: 'Open living area with large windows' },
  lounge: { id: 'photo-1600210492486-724fe5c67fb0', alt: 'Furnished living room with natural light' },
  apartmentLiving: { id: 'photo-1502672260266-1c1ef2d93688', alt: 'Apartment living room with a sofa' },
  studio: { id: 'photo-1522708323590-d24dbb6b0267', alt: 'Furnished apartment interior' },
  kitchen: { id: 'photo-1556911220-bff31c812dba', alt: 'Fitted kitchen with a work counter' },
  bedroom: { id: 'photo-1616594039964-ae9021a400a0', alt: 'Neatly made bed in a calm bedroom' },
  bathroom: { id: 'photo-1552321554-5fefe8c9ef14', alt: 'Modern bathroom with a bathtub' },
  land: { id: 'photo-1500382017468-9049fed747ef', alt: 'Open green land under a wide sky' },
};

export const imageUrl = (id, width) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

export const imageSrcSet = (id, widths = [400, 640, 960, 1280, 1920]) =>
  widths.map((width) => `${imageUrl(id, width)} ${width}w`).join(', ');
