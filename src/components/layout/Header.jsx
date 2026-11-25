import { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation.js';
import { useLockBody } from '../../hooks/useLockBody.js';
import { cx } from '../../utils/format.js';
import Button from '../ui/Button.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open, close);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950 text-white">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link to="/" onClick={close} aria-label="HazeTech home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cx(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition',
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Hidden by a wrapper: Button's own display class would win over `hidden`. */}
          <div className="hidden sm:block">
            <Button to="/contact" onClick={close}>
              Start a Project
            </Button>
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-navy-950 lg:hidden"
        >
          <ul className="container-page py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={close}
                  className={({ isActive }) =>
                    cx(
                      'flex min-h-13 items-center border-b border-white/10 text-lg font-medium',
                      isActive ? 'text-accent-400' : 'text-white',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-6">
              <Button to="/contact" size="lg" className="w-full" onClick={close}>
                Start a Project
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
