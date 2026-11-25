import { Link } from 'react-router-dom';
import { site } from '../../config/site.js';
import { navLinks } from '../../data/navigation.js';
import { services } from '../../data/services.js';
import ContactDetails from '../common/ContactDetails.jsx';
import WhatsAppButton from '../common/WhatsAppButton.jsx';
import Logo from './Logo.jsx';

const linkClass = 'inline-flex min-h-9 items-center text-slate-300 hover:text-white hover:underline';

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-24 text-sm text-white sm:pb-10">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.6fr_1.2fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-slate-300">{site.positioning}</p>
          <WhatsAppButton className="mt-5" />
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-3 font-semibold">Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 font-semibold">Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services#${service.slug}`} className={linkClass}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-slate-300">
          <h2 className="mb-3 font-semibold text-white">Contact</h2>
          <ContactDetails dark />
        </div>
      </div>
      <div className="container-page mt-12 border-t border-white/10 pt-6 text-slate-400">
        © {new Date().getFullYear()} {site.name}. Web development for businesses in Nigeria and internationally.
      </div>
    </footer>
  );
}
