import { demoSiteHref } from '../../utils/domains.js';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { photos } from '../../data/demo/images.js';
import BrowserFrame from '../common/BrowserFrame.jsx';
import SmartImage from '../common/SmartImage.jsx';

const cards = [
  { photo: photos.glassHouse, price: '₦235m', place: 'Lekki' },
  { photo: photos.whiteHouse, price: '₦145m', place: 'Gwarinpa' },
  { photo: photos.poolHouse, price: '₦980m', place: 'Maitama' },
];

const code = [
  ['const ', 'enquiry', ' = {'],
  ['  property: ', "'Lekki terrace'", ','],
  ['  channel: ', "'WhatsApp'", ','],
  ['};'],
];

/** A preview of the demo website with a small code panel over it. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl pb-24">
      <Link to={demoSiteHref} className="group block rounded-2xl" aria-label="Open the PrimeNest Properties demo website">
        <BrowserFrame address="PrimeNest Properties — demo project">
          <div className="relative">
            <SmartImage photo={photos.heroHome} priority sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[16/10] w-full" />
            <div className="absolute inset-0 bg-nest-950/45" />
            <div className="absolute inset-x-4 top-4 sm:inset-x-6 sm:top-8">
              <p className="font-display text-xl font-bold text-white sm:text-2xl">Find a home that fits your life</p>
              <div className="mt-3 flex max-w-sm items-center justify-between rounded-full bg-white py-1.5 pr-1.5 pl-4 text-xs text-slate-600">
                Location, type, budget
                <span className="grid size-8 place-items-center rounded-full bg-nest-gold text-nest-950">
                  <Search className="size-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 bg-nest-sand p-2 sm:gap-3 sm:p-3">
            {cards.map((card) => (
              <div key={card.place} className="overflow-hidden rounded-lg bg-white">
                <SmartImage photo={card.photo} sizes="180px" className="aspect-[4/3] w-full" />
                <p className="px-2 pt-1.5 text-xs font-bold text-nest-900">{card.price}</p>
                <p className="px-2 pb-1.5 text-[11px] text-slate-600">{card.place}</p>
              </div>
            ))}
          </div>
        </BrowserFrame>
        <span className="absolute -top-3 right-3 inline-flex items-center gap-1 rounded-full bg-nest-gold px-3 py-1.5 text-xs font-bold text-nest-950 shadow-lift">
          View demo <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </Link>
      <pre
        aria-hidden="true"
        className="absolute bottom-0 left-2 rounded-xl border border-white/15 bg-navy-900 p-3 font-mono text-[11px] leading-5 text-slate-300 shadow-lift sm:-left-6 sm:p-4 sm:text-xs"
      >
        {code.map((parts) => (
          <span key={parts[0]} className="block">
            {parts[0]}
            {parts[1] && <span className="text-accent-400">{parts[1]}</span>}
            {parts[2]}
          </span>
        ))}
      </pre>
    </div>
  );
}
