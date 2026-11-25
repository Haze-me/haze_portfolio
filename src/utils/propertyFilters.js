// Price bands differ for sales and yearly rents, so each has its own list.
export const priceRanges = {
  sale: [
    { id: 'sale-0-150', label: 'Up to ₦150m', min: 0, max: 150e6 },
    { id: 'sale-150-300', label: '₦150m to ₦300m', min: 150e6, max: 300e6 },
    { id: 'sale-300-700', label: '₦300m to ₦700m', min: 300e6, max: 700e6 },
    { id: 'sale-700', label: 'Above ₦700m', min: 700e6, max: Infinity },
  ],
  rent: [
    { id: 'rent-0-5', label: 'Up to ₦5m per year', min: 0, max: 5e6 },
    { id: 'rent-5-15', label: '₦5m to ₦15m per year', min: 5e6, max: 15e6 },
    { id: 'rent-15', label: 'Above ₦15m per year', min: 15e6, max: Infinity },
  ],
};

export const allPriceRanges = [...priceRanges.sale, ...priceRanges.rent];

export const emptyFilters = { location: '', type: '', purpose: '', price: '', sort: '' };

export const rangePurpose = (rangeId) => (rangeId ? rangeId.split('-')[0] : '');

export function filterProperties(properties, filters) {
  const query = (filters.location || '').trim().toLowerCase();
  const terms = query.split(/[\s,]+/).filter(Boolean);
  const range = allPriceRanges.find((item) => item.id === filters.price);

  const results = properties.filter((property) => {
    const place = `${property.area} ${property.city} ${property.state}`.toLowerCase();
    if (!terms.every((term) => place.includes(term))) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.purpose && property.purpose !== filters.purpose) return false;
    if (range) {
      if (property.purpose !== rangePurpose(range.id)) return false;
      // Bands share their edges: a price on the edge belongs to the lower band.
      const aboveMin = range.min === 0 ? true : property.price > range.min;
      if (!aboveMin || property.price > range.max) return false;
    }
    return true;
  });

  if (filters.sort === 'price-asc') results.sort((a, b) => a.price - b.price);
  if (filters.sort === 'price-desc') results.sort((a, b) => b.price - a.price);
  return results;
}
