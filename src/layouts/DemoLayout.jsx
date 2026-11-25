import { demoPath, portfolioHref } from '../utils/domains.js';
import { Suspense, useCallback, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { House, Menu, MessageCircle, X } from 'lucide-react';
import { demoNav } from '../data/demo/agency.js';
import { useLockBody } from '../hooks/useLockBody.js';
import { cx } from '../utils/format.js';
import Button from '../components/ui/Button.jsx';
import PageLoader from '../components/layout/PageLoader.jsx';
import { demoWhatsapp, generalMessage } from '../components/demo/demoContact.js';

function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-10 place-items-center rounded-lg bg-nest-gold text-nest-950">
        <House className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-extrabold">PrimeNest</span>
        <span className="block text-[11px] tracking-[0.2em] uppercase opacity-70">Properties</span>
      </span>
    </span>
  );
}

export default function DemoLayout() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open, close);
  const { pathname } = useLocation();
  // A property page has its own enquiry button naming that property.
  const onPropertyPage = /\/properties\/[^/]+/.test(pathname);

  return (
    <div className="bg-nest-sand">
      <a href="#main" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>
      <div className="bg-amber-300 text-slate-900">
        <div className="container-page flex flex-col items-center justify-between gap-x-4 py-2 text-center text-sm sm:flex-row sm:text-left">
          <p><strong>Demonstration project.</strong> PrimeNest Properties is fictional, not a real client. Listings are not for sale or rent.</p>
          <div className="flex shrink-0 gap-4 font-semibold">
            <Link to={portfolioHref('/projects')} className="inline-flex min-h-9 items-center underline">Back to portfolio</Link>
            <Link to={portfolioHref('/contact?package=real-estate')} className="inline-flex min-h-9 items-center underline">Get a website like this</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white shadow-card">
        <div className="container-page flex h-18 items-center justify-between gap-4 text-nest-900">
          <Link to={demoPath()} onClick={close} aria-label="PrimeNest Properties home"><Brand /></Link>
          <nav aria-label="PrimeNest" className="hidden gap-1 md:flex">
            {demoNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === demoPath()}
                className={({ isActive }) => cx('rounded-full px-3.5 py-2 text-sm font-semibold', isActive ? 'bg-nest-sand' : 'hover:bg-nest-sand')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-slate-300 md:hidden"
            aria-expanded={open}
            aria-controls="nest-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <nav id="nest-menu" aria-label="PrimeNest mobile" className="absolute inset-x-0 top-full max-h-[70dvh] overflow-y-auto border-t border-slate-200 bg-white shadow-lift md:hidden">
            <ul className="container-page py-2">
              {demoNav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === demoPath()}
                    onClick={close}
                    className={({ isActive }) => cx('flex min-h-12 items-center font-semibold', isActive ? 'text-nest-gold-dark' : 'text-nest-900')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main" className="min-h-[60vh]">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="bg-nest-950 pt-12 pb-24 text-sm text-slate-300">
        <div className="container-page grid gap-8 sm:grid-cols-3">
          <div className="text-white">
            <Brand />
            <p className="mt-4 max-w-xs text-slate-300">A fictional agency used to demonstrate a real estate website.</p>
          </div>
          <nav aria-label="PrimeNest footer">
            <h2 className="mb-2 font-bold text-white">Explore</h2>
            <ul>
              {demoNav.map((item) => (
                <li key={item.to}><Link to={item.to} className="inline-flex min-h-9 items-center hover:underline">{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="mb-2 font-bold text-white">Like this website?</h2>
            <p>Designed and developed by HazeTech. Need a website for any kind of business? Send us an enquiry.</p>
            <Button to={portfolioHref('/contact?package=real-estate')} variant="gold" className="mt-4">Get one for your agency</Button>
          </div>
        </div>
        <p className="container-page mt-10 border-t border-white/10 pt-5 text-xs">
          Fictional listings and prices. Photos are illustrative stock images from Unsplash and do not show properties for sale or rent.
        </p>
      </footer>

      {!onPropertyPage && (
        <Button
          variant="whatsapp"
          href={demoWhatsapp(generalMessage)}
          className="fixed right-4 bottom-4 z-30 shadow-lift sm:right-6 sm:bottom-6"
        >
          <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp enquiry
        </Button>
      )}
    </div>
  );
}
