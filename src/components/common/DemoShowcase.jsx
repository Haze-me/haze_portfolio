import { ArrowRight, Check } from 'lucide-react';
import { demoProject } from '../../data/projects.js';
import { demoSiteHref } from '../../utils/domains.js';
import { photos } from '../../data/demo/images.js';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import BrowserFrame from './BrowserFrame.jsx';
import SmartImage from './SmartImage.jsx';

const highlights = [
  'Search by location, type, price, sale or rent',
  'Property pages with photo galleries',
  'WhatsApp enquiries that name the property',
  'Fictional Nigerian listings priced in naira',
];

export default function DemoShowcase() {
  return (
    <Reveal>
      <div className="grid overflow-hidden rounded-3xl bg-nest-950 text-white lg:grid-cols-2">
        <div className="p-7 sm:p-12">
          <p className="inline-block rounded-full bg-nest-gold px-3 py-1 text-xs font-bold tracking-wide text-nest-950 uppercase">
            Interactive demo · not a real client
          </p>
          <h3 className="mt-5 text-3xl font-bold">{demoProject.name}</h3>
          <p className="mt-3 text-slate-300">{demoProject.description}</p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-nest-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={demoSiteHref} variant="gold">
              Explore the live demo <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button to="/contact?package=real-estate" variant="ghostLight">
              Get a website like this
            </Button>
          </div>
        </div>
        <div className="flex items-end px-5 pt-2 lg:pt-12 lg:pr-0 lg:pl-4">
          <BrowserFrame address="PrimeNest Properties (demo)" className="w-full rounded-b-none lg:rounded-tr-none">
            <SmartImage photo={photos.heroHome} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full" />
          </BrowserFrame>
        </div>
      </div>
    </Reveal>
  );
}
