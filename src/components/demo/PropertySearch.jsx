import { demoPath } from '../../utils/domains.js';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { emptyFilters } from '../../utils/propertyFilters.js';
import Button from '../ui/Button.jsx';
import SearchFields from './SearchFields.jsx';

/** Hero search: collects filters, then opens the catalogue with them. */
export default function PropertySearch() {
  const [filters, setFilters] = useState(emptyFilters);
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const query = Object.fromEntries(Object.entries(filters).filter(([, value]) => value));
    navigate({ pathname: demoPath('/properties'), search: `?${createSearchParams(query)}` });
  }

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      aria-label="Property search"
      className="grid gap-3 rounded-2xl bg-white p-4 text-left shadow-lift sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_1.1fr_auto] lg:items-end"
    >
      <SearchFields filters={filters} onChange={setFilters} idPrefix="hero" />
      <Button type="submit" variant="gold" size="lg" className="rounded-xl! sm:col-span-2 lg:col-span-1">
        <Search className="size-5" aria-hidden="true" /> Search
      </Button>
    </form>
  );
}
