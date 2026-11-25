import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';
import PageLoader from '../components/layout/PageLoader.jsx';

export default function MainLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-lg bg-white px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {/* The contact page has its own WhatsApp option next to the form. */}
      {pathname !== '/contact' && <WhatsAppButton floating label="Contact on WhatsApp" />}
    </>
  );
}
