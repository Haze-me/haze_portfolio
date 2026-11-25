import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { onDemoHost } from './utils/domains.js';
import MainLayout from './layouts/MainLayout.jsx';
import ScrollManager from './components/layout/ScrollManager.jsx';
import Home from './pages/Home.jsx';

const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// The demo loads only when someone opens it.
const DemoLayout = lazy(() => import('./layouts/DemoLayout.jsx'));
const DemoHome = lazy(() => import('./pages/demo/DemoHome.jsx'));
const DemoProperties = lazy(() => import('./pages/demo/DemoProperties.jsx'));
const DemoPropertyDetails = lazy(() => import('./pages/demo/DemoPropertyDetails.jsx'));
const DemoAbout = lazy(() => import('./pages/demo/DemoAbout.jsx'));
const DemoServices = lazy(() => import('./pages/demo/DemoServices.jsx'));
const DemoContactPage = lazy(() => import('./pages/demo/DemoContactPage.jsx'));

const demoRoutes = (
  <>
    <Route index element={<DemoHome />} />
    <Route path="properties" element={<DemoProperties />} />
    <Route path="properties/:id" element={<DemoPropertyDetails />} />
    <Route path="about" element={<DemoAbout />} />
    <Route path="services" element={<DemoServices />} />
    <Route path="contact" element={<DemoContactPage />} />
    <Route path="*" element={<NotFound />} />
  </>
);

/** On demo.hazetech.online, old /demo/primenest links move to the root. */
function DropDemoPrefix() {
  const { pathname, search } = useLocation();
  return <Navigate replace to={(pathname.replace(/^\/demo\/primenest/, '') || '/') + search} />;
}

export default function App() {
  if (onDemoHost) {
    return (
      <>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<DemoLayout />}>{demoRoutes}</Route>
          <Route path="demo/primenest/*" element={<DropDemoPrefix />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="demo/primenest" element={<DemoLayout />}>{demoRoutes}</Route>
      </Routes>
    </>
  );
}
