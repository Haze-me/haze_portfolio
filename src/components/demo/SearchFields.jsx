import { locations, propertyTypes } from '../../data/demo/properties.js';
import { priceRanges, rangePurpose } from '../../utils/propertyFilters.js';

function Labelled({ id, label, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-1 block text-xs font-bold tracking-wide text-slate-700 uppercase">{label}</label>
      {children}
    </div>
  );
}

/** Location, type, sale or rent, and price. Shared by the hero and catalogue. */
export default function SearchFields({ filters, onChange, idPrefix }) {
  const set = (name, value) => {
    const next = { ...filters, [name]: value };
    // Sale and rent prices are on different scales, so keep them consistent.
    if (name === 'purpose' && value && next.price && rangePurpose(next.price) !== value) next.price = '';
    if (name === 'price' && value) next.purpose = rangePurpose(value);
    onChange(next);
  };
  const groups = [
    ['sale', 'To buy'],
    ['rent', 'To rent'],
  ].filter(([key]) => !filters.purpose || filters.purpose === key);

  return (
    <>
      <Labelled id={`${idPrefix}-location`} label="Location">
        <input
          id={`${idPrefix}-location`}
          className="field"
          list={`${idPrefix}-locations`}
          placeholder="Any, e.g. Lekki or Abuja"
          value={filters.location}
          onChange={(event) => set('location', event.target.value)}
        />
        <datalist id={`${idPrefix}-locations`}>
          {locations.map((item) => <option key={item} value={item} />)}
        </datalist>
      </Labelled>
      <Labelled id={`${idPrefix}-type`} label="Property type">
        <select id={`${idPrefix}-type`} className="field" value={filters.type} onChange={(event) => set('type', event.target.value)}>
          <option value="">Any type</option>
          {propertyTypes.map((item) => <option key={item}>{item}</option>)}
        </select>
      </Labelled>
      <Labelled id={`${idPrefix}-purpose`} label="Sale or rent">
        <select id={`${idPrefix}-purpose`} className="field" value={filters.purpose} onChange={(event) => set('purpose', event.target.value)}>
          <option value="">Sale and rent</option>
          <option value="sale">For sale</option>
          <option value="rent">For rent</option>
        </select>
      </Labelled>
      <Labelled id={`${idPrefix}-price`} label="Price range">
        <select id={`${idPrefix}-price`} className="field" value={filters.price} onChange={(event) => set('price', event.target.value)}>
          <option value="">Any price</option>
          {groups.map(([key, label]) => (
            <optgroup key={key} label={label}>
              {priceRanges[key].map((range) => (
                <option key={range.id} value={range.id}>{range.label}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </Labelled>
    </>
  );
}
