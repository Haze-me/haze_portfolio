import { Link } from 'react-router-dom';
import { cx } from '../../utils/format.js';

const variants = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700',
  dark: 'bg-navy-900 text-white hover:bg-navy-700',
  outline: 'border border-slate-300 bg-white text-navy-900 hover:border-navy-900',
  ghostLight: 'border border-white/30 text-white hover:bg-white/10',
  light: 'bg-white text-navy-900 hover:bg-accent-50',
  whatsapp: 'bg-[#0b7a43] text-white hover:bg-[#096636]',
  nest: 'bg-nest-900 text-white hover:bg-nest-700',
  gold: 'bg-nest-gold text-nest-950 hover:bg-[#d6ae66]',
};

/** Renders a router link (`to`), an external link (`href`) or a button. */
export default function Button({ to, href, variant = 'primary', size, className, children, ...props }) {
  const classes = cx(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60',
    size === 'lg' ? 'min-h-13 px-7 py-3.5 text-base' : 'min-h-11 px-5 py-2.5 text-sm',
    variants[variant],
    className,
  );
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
