import { Mail, MapPin, Phone } from 'lucide-react';
import { placeholders, site, socialLabels } from '../../config/site.js';
import { cx } from '../../utils/format.js';

/** Shows real details when configured, otherwise an obvious placeholder. */
export default function ContactDetails({ dark }) {
  const rows = [
    { icon: Mail, value: site.email, placeholder: placeholders.email, href: `mailto:${site.email}` },
    { icon: Phone, value: site.phone, placeholder: placeholders.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    { icon: MapPin, value: site.location, placeholder: placeholders.location },
  ];
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <div>
      <ul className="space-y-1">
        {rows.map(({ icon: Icon, value, placeholder, href }) => (
          <li key={placeholder} className="flex min-h-9 items-center gap-3">
            <Icon className={cx('size-4 shrink-0', dark ? 'text-accent-400' : 'text-accent-700')} aria-hidden="true" />
            {value && href ? (
              <a href={href} className="break-all hover:underline">{value}</a>
            ) : (
              <span className={cx(!value && 'opacity-70')}>{value || placeholder}</span>
            )}
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {socials.map(([key, url]) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center underline">
              {socialLabels[key]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
