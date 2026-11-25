import { useSearchParams } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import { properties } from '../../data/demo/properties.js';
import { demoMeta } from '../../data/seo.js';
import { useSeo } from '../../hooks/useSeo.js';
import { emptyFilters, filterProperties } from '../../utils/propertyFilters.js';
import Button from '../../components/ui/Button.jsx';
import DemoPageHeader from '../../components/demo/DemoPageHeader.jsx';
import PropertyCard from '../../components/demo/PropertyCard.jsx';
import SearchFields from '../../components/demo/SearchFields.jsx';

export default function DemoProperties() {
  const path = '/demo/primenest/properties';
  useSeo({ ...demoMeta[path], path, noindex: true });

  // Filters live in the address bar, so a search can be shared or revisited.
  const [params, setParams] = useSearchParams();
  const filters = Object.fromEntries(Object.keys(emptyFilters).map((key) => [key, params.get(key) ?? '']));
  const results = filterProperties(properties, filters);
  const active = Object.values(filters).some(Boolean);

  const update = (next) =>
    setParams(Object.fromEntries(Object.entries(next).filter(([, value]) => value)), {
      replace: true,
      preventScrollReset: true,
    });

  return (
    <>
      <DemoPageHeader title="Property listings" intro="Search by location, then narrow by type, sale or rent, and price." />
      <div className="container-page py-8 sm:py-12">
        <form
          role="search"
          aria-label="Filter properties"
          onSubmit={(event) => event.preventDefault()}
          className="grid gap-3 rounded-2xl bg-white p-4 shadow-card sm:grid-cols-2 lg:grid-cols-4"
        >
          <SearchFields filters={filters} onChange={update} idPrefix="list" />
        </form>
        <div className="my-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold text-nest-900" role="status">
            {results.length} {results.length === 1 ? 'property' : 'properties'} found
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {active && <Button variant="outline" onClick={() => update(emptyFilters)}>Clear filters</Button>}
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              Sort
              <select className="field w-auto!" value={filters.sort} onChange={(event) => update({ ...filters, sort: event.target.value })}>
                <option value="">Default order</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <h2 className="sr-only">Results</h2>
        {results.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center">
            <SearchX className="mx-auto size-10 text-nest-gold-dark" aria-hidden="true" />
            <h3 className="mt-3 text-xl font-bold text-nest-900">No properties match your search</h3>
            <p className="mt-2 text-slate-600">Try a wider location or price range.</p>
            <Button variant="nest" className="mt-5" onClick={() => update(emptyFilters)}>Show all properties</Button>
          </div>
        )}
      </div>
    </>
  );
}
