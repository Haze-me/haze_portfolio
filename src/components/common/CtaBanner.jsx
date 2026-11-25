import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import WhatsAppButton from './WhatsAppButton.jsx';

export default function CtaBanner({
  title = 'Ready to strengthen your online presence?',
  text = 'Tell me about your business and what you need. We will agree the scope, price and timeline before any work begins.',
  to = '/contact',
  label = 'Start a Project',
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="hero-grid rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to={to} size="lg">
                {label} <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <WhatsAppButton size="lg" variant="ghostLight" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
