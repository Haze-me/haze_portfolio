import { useLocation } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo.js';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  const { pathname } = useLocation();
  useSeo({ title: 'Page not found | HazeTech', description: 'This page does not exist.', path: pathname, noindex: true });

  return (
    <div className="container-page py-28 text-center">
      <p className="font-display text-6xl font-extrabold text-accent-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-3 text-muted">The address may be wrong, or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Go to the home page</Button>
        <Button to="/contact" variant="outline">Contact me</Button>
      </div>
    </div>
  );
}
