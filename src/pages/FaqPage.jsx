import { faqs } from '../data/faqs.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import { faqSchema } from '../utils/schema.js';
import Section from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Faq from '../components/common/Faq.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';

export default function FaqPage() {
  useSeo({ ...pageMeta['/faq'], path: '/faq', jsonLd: faqSchema(faqs) });

  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" intro="Costs, timelines, hosting, updates and how to begin." />
      <Section tone="mist">
        <h2 className="sr-only">Questions and answers</h2>
        <Faq items={faqs} />
      </Section>
      <CtaBanner title="Still have a question?" text="Send it with your enquiry and I will answer it." label="Ask a question" />
    </>
  );
}
