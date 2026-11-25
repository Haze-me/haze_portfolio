import { portfolioHref } from '../../utils/domains.js';
import { MessageCircle } from 'lucide-react';
import { demoMeta } from '../../data/seo.js';
import { useSeo } from '../../hooks/useSeo.js';
import Button from '../../components/ui/Button.jsx';
import DemoPageHeader from '../../components/demo/DemoPageHeader.jsx';
import DemoEnquiryForm from '../../components/demo/DemoEnquiryForm.jsx';
import { demoWhatsapp, generalMessage } from '../../components/demo/demoContact.js';

export default function DemoContactPage() {
  const path = '/demo/primenest/contact';
  useSeo({ ...demoMeta[path], path, noindex: true });

  return (
    <>
      <DemoPageHeader title="Contact PrimeNest" intro="Ask about a property or arrange a viewing." />
      <div className="container-page grid gap-8 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
          <h2 className="mb-5 text-2xl font-bold text-nest-900">Send an enquiry</h2>
          <DemoEnquiryForm />
        </div>
        <aside className="h-fit space-y-6 rounded-2xl bg-white p-6 shadow-card sm:p-8">
          <div>
            <h2 className="text-xl font-bold text-nest-900">WhatsApp</h2>
            <p className="mt-2 text-slate-700">Open WhatsApp with a ready-written message.</p>
            <Button variant="whatsapp" href={demoWhatsapp(generalMessage)} className="mt-4">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp enquiry
            </Button>
          </div>
          <div className="rounded-xl bg-nest-sand p-5">
            <h2 className="text-lg font-bold text-nest-900">Need a website for your business?</h2>
            <p className="mt-2 text-slate-700">
              HazeTech builds real estate and other kinds of websites. Fill in our enquiry form, then reach
              us by email or WhatsApp.
            </p>
            <Button to={portfolioHref('/contact?package=real-estate')} variant="nest" className="mt-4">
              Contact HazeTech
            </Button>
          </div>
          <dl className="space-y-3 border-t border-slate-200 pt-5 text-slate-700">
            {['Office address', 'Phone', 'Email'].map((label) => (
              <div key={label}>
                <dt className="font-bold text-nest-900">{label}</dt>
                <dd>Not provided: demonstration website</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  );
}
