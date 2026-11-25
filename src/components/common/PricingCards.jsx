import { Check, Clock } from 'lucide-react';
import { packages } from '../../data/pricing.js';
import { cx, formatNaira } from '../../utils/format.js';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function PricingCards() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {packages.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.08} className="h-full">
          <article
            id={item.id}
            className={cx(
              'flex h-full flex-col rounded-3xl border p-7 sm:p-8',
              item.featured ? 'border-navy-900 bg-navy-900 text-white shadow-lift' : 'border-line bg-white shadow-card',
            )}
          >
            <h3 className={cx('text-lg font-bold lg:min-h-14', item.featured ? 'text-white' : 'text-navy-900')}>
              {item.name}
            </h3>
            <p className={cx('mt-2 text-sm lg:min-h-10', item.featured ? 'text-slate-300' : 'text-muted')}>{item.audience}</p>
            <p className="mt-5">
              <span className={cx('block text-sm', item.featured ? 'text-slate-300' : 'text-muted')}>Starting from</span>
              <span className="font-display text-4xl font-extrabold">{formatNaira(item.price)}</span>
            </p>
            <p className={cx('mt-3 flex items-center gap-2 text-sm font-medium', item.featured ? 'text-accent-400' : 'text-accent-700')}>
              <Clock className="size-4" aria-hidden="true" /> Delivery: {item.delivery}
            </p>
            <ul className={cx('mt-6 space-y-3 border-t pt-6', item.featured ? 'border-white/15' : 'border-line')}>
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <Check
                    className={cx('mt-0.5 size-4 shrink-0', item.featured ? 'text-accent-400' : 'text-accent-700')}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button
                to={`/contact?package=${item.id}`}
                variant={item.featured ? 'primary' : 'dark'}
                className="w-full"
              >
                Enquire about this package
              </Button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
