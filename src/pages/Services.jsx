import { demoSiteHref } from '../utils/domains.js';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CircleAlert, TrendingUp } from 'lucide-react';
import { services } from '../data/services.js';
import { getPackage } from '../data/pricing.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import { siteSchema } from '../utils/schema.js';
import { cx, formatNaira } from '../utils/format.js';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import PageHero from '../components/common/PageHero.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import ServiceIcon from '../components/common/ServiceIcon.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';

function List({ title, items, icon: Icon }) {
  return (
    <div>
      <h3 className="font-bold text-navy-900">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-muted">
            <Icon className="mt-1 size-4 shrink-0 text-accent-700" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceSection({ service, index }) {
  const pack = service.packageId ? getPackage(service.packageId) : null;
  const query = pack ? `service=${service.slug}&package=${pack.id}` : `service=${service.slug}`;

  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className={cx('py-14 sm:py-20', service.featured ? 'bg-accent-50' : index % 2 ? 'bg-mist' : 'bg-white')}
    >
      <Reveal className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          {service.featured && (
            <p className="mb-4 inline-block rounded-full bg-navy-900 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
              Specialist focus
            </p>
          )}
          <span className="grid size-14 place-items-center rounded-2xl bg-navy-900 text-accent-400">
            <ServiceIcon name={service.icon} className="size-7" />
          </span>
          <h2 id={`${service.slug}-title`} className="mt-5 text-3xl font-bold text-navy-900">{service.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>
          {pack && (
            <p className="mt-4 font-semibold text-navy-900">
              Packages start at {formatNaira(pack.price)} · {pack.delivery}
            </p>
          )}
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to={`/contact?${query}`}>
              {service.cta} <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            {service.featured && (
              <>
                <Button to={demoSiteHref} variant="outline">View the property demo</Button>
                <WhatsAppButton message="Hello HazeTech, I would like to discuss a real estate website for my business." />
              </>
            )}
          </div>
        </div>
        <div className="grid content-start gap-8 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8 md:grid-cols-2">
          <div className="md:col-span-2">
            <List title="Business problems it solves" items={service.problems} icon={CircleAlert} />
          </div>
          <List title="Key features" items={service.features} icon={Check} />
          <List title="Benefits" items={service.benefits} icon={TrendingUp} />
          {service.featured && (
            <p className="rounded-xl bg-mist p-4 text-sm text-muted md:col-span-2">
              The features available depend on your package or quotation. The public demo shows the visitor
              experience; it does not include the admin dashboard.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export default function Services() {
  useSeo({ ...pageMeta['/services'], path: '/services', jsonLd: siteSchema() });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Website development services for growing businesses"
        intro="Choose the service closest to your need. If you are unsure, send an enquiry and describe the problem you want to solve."
      />
      <nav aria-label="Services on this page" className="border-b border-line bg-white">
        <ul className="container-page flex flex-wrap gap-2 py-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to={`#${service.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line px-4 py-1.5 text-sm font-medium text-navy-800 hover:border-navy-900"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {services.map((service, index) => (
        <ServiceSection key={service.slug} service={service} index={index} />
      ))}
      <CtaBanner title="Not sure which service you need?" text="Describe your situation and I will suggest a sensible starting point." />
    </>
  );
}
