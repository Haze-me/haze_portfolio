import { Info } from 'lucide-react';
import { paymentTerms, pricingConditions } from '../data/pricing.js';
import { faqs } from '../data/faqs.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import Button from '../components/ui/Button.jsx';
import Section, { SectionHeading } from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import PricingCards from '../components/common/PricingCards.jsx';
import Faq from '../components/common/Faq.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';

export default function Pricing() {
  useSeo({ ...pageMeta['/pricing'], path: '/pricing' });

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear starting prices"
        intro={`Pick the package closest to your needs. Payment is ${paymentTerms}.`}
      />
      <Section tone="mist">
        <h2 className="sr-only">Website packages</h2>
        <PricingCards />
        <div className="mt-10 rounded-3xl border border-accent-100 bg-white p-6 sm:p-8">
          <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900">
            <Info className="size-5 text-accent-700" aria-hidden="true" /> Important pricing conditions
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {pricingConditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl bg-navy-900 p-7 text-white sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold">Need something different?</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Web applications, APIs, redesigns, landing pages, deployment and maintenance are quoted around your requirements.
            </p>
          </div>
          <Button to="/contact?quote=custom" size="lg" className="shrink-0">Request a Custom Quote</Button>
        </div>
      </Section>
      <Section>
        <SectionHeading center eyebrow="Questions" title="Before you choose" />
        <Faq items={faqs.filter((item) => /cost|long|hosting|update/i.test(item.question))} />
        <p className="mt-6 text-center">
          <Button to="/faq" variant="outline">Read all FAQs</Button>
        </p>
      </Section>
      <CtaBanner />
    </>
  );
}
