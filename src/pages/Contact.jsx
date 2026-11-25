import { Link, useSearchParams } from 'react-router-dom';
import { processSteps } from '../data/content.js';
import { prefillFromParams } from '../data/enquiryOptions.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import Section from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import ContactDetails from '../components/common/ContactDetails.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';
import EnquiryForm from '../components/forms/EnquiryForm.jsx';

export default function Contact() {
  useSeo({ ...pageMeta['/contact'], path: '/contact' });
  const [params] = useSearchParams();
  const prefill = prefillFromParams(params);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a project"
        intro="Tell me about your business and what you need. The more detail you share, the more useful the quote."
      />
      <Section tone="mist">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-9">
            {prefill.context && (
              <p className="mb-6 rounded-xl bg-accent-50 p-4 text-sm font-medium text-navy-800">
                You are enquiring about: <strong>{prefill.context}</strong>
              </p>
            )}
            {/* The key refills the form if the link's choice changes. */}
            <EnquiryForm key={params.toString()} prefill={prefill} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-navy-900 p-7 text-white">
              <h2 className="text-xl font-bold">Prefer WhatsApp?</h2>
              <p className="mt-2 text-slate-300">Send a short message about your business and what you need.</p>
              <WhatsAppButton className="mt-5 w-full" />
            </div>
            <div className="rounded-3xl border border-line bg-white p-7">
              <h2 className="mb-3 text-xl font-bold text-navy-900">Contact details</h2>
              <ContactDetails />
            </div>
            <div className="rounded-3xl border border-line bg-white p-7">
              <h2 className="text-xl font-bold text-navy-900">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-50 text-sm font-bold text-accent-700">{index + 1}</span>
                    <span>
                      <strong className="block text-navy-900">{step.title}</strong>
                      <span className="text-sm text-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link to="/faq" className="mt-5 inline-flex min-h-10 items-center font-semibold text-accent-700 underline">
                Read the FAQ
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
