import { demoPath } from '../../utils/domains.js';
import { Link } from 'react-router-dom';
import { Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import { locationOf, STATUS } from '../../data/demo/properties.js';
import { cx } from '../../utils/format.js';
import SmartImage from '../common/SmartImage.jsx';
import { priceLabel, purposeLabel } from './demoContact.js';

export function StatusBadge({ status }) {
  return (
    <span
      className={cx(
        'rounded-full px-3 py-1 text-xs font-bold',
        status === STATUS.available && 'bg-emerald-100 text-emerald-900',
        status === STATUS.offer && 'bg-amber-100 text-amber-900',
        (status === STATUS.sold || status === STATUS.let) && 'bg-slate-800 text-white',
      )}
    >
      {status}
    </span>
  );
}

export function Facts({ property, className }) {
  const facts = [
    property.bedrooms > 0 && { icon: BedDouble, text: `${property.bedrooms} bed${property.bedrooms > 1 ? 's' : ''}` },
    property.bathrooms > 0 && { icon: Bath, text: `${property.bathrooms} bath${property.bathrooms > 1 ? 's' : ''}` },
    { icon: Ruler, text: property.size },
  ].filter(Boolean);

  return (
    <ul className={cx('flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700', className)}>
      {facts.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-1.5">
          <Icon className="size-4 text-nest-gold-dark" aria-hidden="true" />
          {text}
        </li>
      ))}
    </ul>
  );
}

export default function PropertyCard({ property }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:ring-3 focus-within:ring-nest-gold">
      <div className="relative overflow-hidden">
        <SmartImage
          photo={property.images[0]}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <span className="rounded-full bg-nest-950/85 px-3 py-1 text-xs font-bold text-white">{purposeLabel(property)}</span>
          <StatusBadge status={property.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xl font-extrabold text-nest-900">{priceLabel(property)}</p>
        <h3 className="mt-2 text-lg leading-snug font-bold text-slate-900">
          {/* The stretched link makes the whole card clickable. */}
          <Link to={demoPath(`/properties/${property.id}`)} className="outline-none after:absolute after:inset-0">
            {property.title}
          </Link>
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-600">
          <MapPin className="size-4 shrink-0" aria-hidden="true" /> {locationOf(property)}
        </p>
        <p className="mt-1 text-sm text-slate-600">{property.type}</p>
        <Facts property={property} className="mt-auto border-t border-slate-200 pt-4 [&:not(:first-child)]:mt-4" />
      </div>
    </article>
  );
}
