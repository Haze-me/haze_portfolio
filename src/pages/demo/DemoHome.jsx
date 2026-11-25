import { demoPath } from '../../utils/domains.js';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { agencyServices, agencyValues } from '../../data/demo/agency.js';
import { photos } from '../../data/demo/images.js';
import { locations, properties } from '../../data/demo/properties.js';
import { demoMeta } from '../../data/seo.js';
import { useSeo } from '../../hooks/useSeo.js';
import { filterProperties } from '../../utils/propertyFilters.js';
import Button from '../../components/ui/Button.jsx';
import Reveal from '../../components/ui/Reveal.jsx';
import SmartImage from '../../components/common/SmartImage.jsx';
import PropertyCard from '../../components/demo/PropertyCard.jsx';
import PropertySearch from '../../components/demo/PropertySearch.jsx';

export default function DemoHome() {
  useSeo({ ...demoMeta['/demo/primenest'], path: '/demo/primenest', noindex: true });
  const featured = properties.filter((item) => item.featured);

  return (
    <>
      <section className="relative isolate">
        <SmartImage photo={photos.heroHome} priority className="absolute inset-0 -z-20 size-full" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-nest-950/90 to-nest-950/40" />
        <div className="container-page py-16 sm:py-28">
          <p className="text-sm font-bold tracking-widest text-nest-gold uppercase">Lagos · Abuja · Port Harcourt</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold text-white sm:text-6xl">Find a home that fits your life</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-100">Browse homes, apartments, offices and land for sale or rent.</p>
          <div className="mt-8"><PropertySearch /></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold tracking-widest text-nest-gold-dark uppercase">Hand-picked</p>
              <h2 className="mt-2 text-3xl font-bold text-nest-900">Featured properties</h2>
            </div>
            <Button to={demoPath('/properties')} variant="nest">
              View all {properties.length} properties <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-nest-900">Search by location</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => {
              const count = filterProperties(properties, { location }).length;
              return (
                <li key={location}>
                  <Link
                    to={demoPath(`/properties?location=${encodeURIComponent(location)}`)}
                    className="flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-nest-gold hover:bg-nest-sand"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-nest-900 text-nest-gold">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-bold text-nest-900">{location}</span>
                      <span className="text-sm text-slate-600">{count} {count === 1 ? 'listing' : 'listings'}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SmartImage photo={photos.living} sizes="(min-width: 1024px) 600px, 100vw" className="aspect-[4/3] w-full rounded-3xl" />
          </Reveal>
          <div>
            <h2 className="text-3xl font-bold text-nest-900">A clearer way to look for property</h2>
            <p className="mt-4 text-slate-700">PrimeNest is imagined as an agency that makes the search simple, whether you are across town or abroad.</p>
            <ul className="mt-6 space-y-5">
              {agencyValues.map((item) => (
                <li key={item.title} className="border-l-4 border-nest-gold pl-4">
                  <h3 className="font-bold text-nest-900">{item.title}</h3>
                  <p className="text-slate-700">{item.body}</p>
                </li>
              ))}
            </ul>
            <Button to={demoPath('/about')} variant="outline" className="mt-7">About the agency</Button>
          </div>
        </div>
      </section>

      <section className="bg-nest-900 py-16 text-white sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Our services</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agencyServices.slice(0, 3).map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-xl font-bold text-nest-gold">{item.title}</h3>
                <p className="mt-2 text-slate-200">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={demoPath('/services')} variant="gold">All services</Button>
            <Button to={demoPath('/contact')} variant="ghostLight">Contact the agency</Button>
          </div>
        </div>
      </section>
    </>
  );
}
