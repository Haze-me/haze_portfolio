import { demoPath } from '../../utils/domains.js';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, MessageCircle } from 'lucide-react';
import { getProperty, locationOf, properties, STATUS } from '../../data/demo/properties.js';
import { useSeo } from '../../hooks/useSeo.js';
import Button from '../../components/ui/Button.jsx';
import Gallery from '../../components/demo/Gallery.jsx';
import PropertyCard, { Facts, StatusBadge } from '../../components/demo/PropertyCard.jsx';
import DemoEnquiryForm from '../../components/demo/DemoEnquiryForm.jsx';
import { demoWhatsapp, priceLabel, propertyMessage, purposeLabel } from '../../components/demo/demoContact.js';

function Details({ property }) {
  useSeo({
    title: `${property.title}, ${property.area} | PrimeNest Demo`,
    description: `Demonstration listing (fictional): ${property.title} in ${locationOf(property)}.`,
    path: `/demo/primenest/properties/${property.id}`,
    noindex: true,
  });

  const gone = property.status === STATUS.sold || property.status === STATUS.let;
  const similar = properties
    .filter((item) => item.id !== property.id && item.purpose === property.purpose && item.status === STATUS.available)
    .sort((a, b) => Number(b.city === property.city) - Number(a.city === property.city))
    .slice(0, 3);
  const rows = [
    ['Property type', property.type],
    ['Bedrooms', property.bedrooms || 'Not applicable'],
    ['Bathrooms', property.bathrooms || 'Not applicable'],
    ['Size', property.size],
    ['Offer', purposeLabel(property)],
    ['Availability', property.status],
  ];

  return (
    <div className="container-page py-6 sm:py-10">
      <Link to={demoPath('/properties')} className="inline-flex min-h-11 items-center gap-2 font-semibold text-nest-900 hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All properties
      </Link>
      <div className="mt-3 mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex gap-2">
            <span className="rounded-full bg-nest-900 px-3 py-1 text-xs font-bold text-white">{purposeLabel(property)}</span>
            <StatusBadge status={property.status} />
          </div>
          <h1 className="mt-3 text-3xl font-bold text-nest-900 sm:text-4xl">{property.title}</h1>
          <p className="mt-2 flex items-center gap-2 text-slate-700">
            <MapPin className="size-4" aria-hidden="true" /> {locationOf(property)}
          </p>
        </div>
        <p className="font-display text-3xl font-extrabold text-nest-900">{priceLabel(property)}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        <div className="min-w-0 space-y-8">
          <Gallery images={property.images} title={property.title} />
          <section className="rounded-2xl bg-white p-6">
            <Facts property={property} />
            <h2 className="mt-6 text-2xl font-bold text-nest-900">About this property</h2>
            <p className="mt-3 leading-relaxed text-slate-700">{property.description}</p>
            <h2 className="mt-8 text-xl font-bold text-nest-900">Features</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {property.amenities.map((item) => (
                <li key={item} className="flex gap-2 text-slate-700">
                  <Check className="mt-1 size-4 shrink-0 text-nest-gold-dark" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-xl font-bold text-nest-900">Details</h2>
            <dl className="mt-3 divide-y divide-slate-200">
              {rows.map(([term, value]) => (
                <div key={term} className="flex justify-between gap-4 py-3">
                  <dt className="text-slate-600">{term}</dt>
                  <dd className="text-right font-semibold text-slate-900">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
        <aside className="h-fit rounded-2xl bg-white p-6 shadow-card">
          <h2 className="text-xl font-bold text-nest-900">Enquire about this property</h2>
          {gone && (
            <p className="mt-3 rounded-xl bg-amber-100 p-3 text-sm text-amber-950">
              This property is marked “{property.status}”. You can still ask about similar options.
            </p>
          )}
          <Button variant="whatsapp" size="lg" className="mt-4 w-full" href={demoWhatsapp(propertyMessage(property))}>
            <MessageCircle className="size-5" aria-hidden="true" /> Enquire on WhatsApp
          </Button>
          <p className="my-5 flex items-center gap-3 text-sm text-slate-500 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">
            or use the form
          </p>
          <DemoEnquiryForm property={property} />
        </aside>
      </div>

      {similar.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-bold text-nest-900">Other properties you may like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((item) => <PropertyCard key={item.id} property={item} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Missing() {
  useSeo({ title: 'Property not found | PrimeNest Demo', description: 'This demo listing does not exist.', path: '/demo/primenest/properties', noindex: true });
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold text-nest-900">Property not found</h1>
      <p className="mt-3 text-slate-600">This listing may have been removed or the address is wrong.</p>
      <Button to={demoPath('/properties')} variant="nest" className="mt-6">Browse all properties</Button>
    </div>
  );
}

export default function DemoPropertyDetails() {
  const property = getProperty(useParams().id);
  return property ? <Details key={property.id} property={property} /> : <Missing />;
}
