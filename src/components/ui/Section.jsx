import { cx } from '../../utils/format.js';
import Reveal from './Reveal.jsx';

const tones = { white: 'bg-white', mist: 'bg-mist', navy: 'bg-navy-950 text-white' };

export default function Section({ tone = 'white', className, children, ...props }) {
  return (
    <section className={cx('py-16 sm:py-24', tones[tone], className)} {...props}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center, dark, as: Tag = 'h2' }) {
  return (
    <Reveal className={cx('mb-10 max-w-2xl sm:mb-14', center && 'mx-auto text-center')}>
      {eyebrow && (
        <p className={cx('mb-3 text-sm font-semibold tracking-widest uppercase', dark ? 'text-accent-400' : 'text-accent-700')}>
          {eyebrow}
        </p>
      )}
      <Tag className={cx('text-3xl font-bold sm:text-4xl', dark ? 'text-white' : 'text-navy-900')}>{title}</Tag>
      {intro && <p className={cx('mt-4 text-lg leading-relaxed', dark ? 'text-slate-300' : 'text-muted')}>{intro}</p>}
    </Reveal>
  );
}
