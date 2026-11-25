import { demoPath } from '../../utils/domains.js';
import { agencyValues } from '../../data/demo/agency.js';
import { photos } from '../../data/demo/images.js';
import { demoMeta } from '../../data/seo.js';
import { useSeo } from '../../hooks/useSeo.js';
import Button from '../../components/ui/Button.jsx';
import SmartImage from '../../components/common/SmartImage.jsx';
import DemoPageHeader from '../../components/demo/DemoPageHeader.jsx';

export default function DemoAbout() {
  const path = '/demo/primenest/about';
  useSeo({ ...demoMeta[path], path, noindex: true });

  return (
    <>
      <DemoPageHeader title="About PrimeNest Properties" intro="A fictional agency, written to show how your agency’s story could be presented." />
      <div className="container-page grid gap-10 py-14 lg:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed text-slate-700">
          <h2 className="text-3xl font-bold text-nest-900">Helping people find their place</h2>
          <p>
            In this demonstration, PrimeNest Properties helps buyers, tenants and property owners in Lagos,
            Abuja and Port Harcourt.
          </p>
          <p>
            The agency’s promise is simple: show the important facts up front, answer questions promptly and
            guide clients to check documents before money changes hands.
          </p>
          <Button to={demoPath('/properties')} variant="nest">Browse properties</Button>
        </div>
        <SmartImage photo={photos.meeting} sizes="(min-width: 1024px) 600px, 100vw" className="aspect-[4/3] w-full rounded-3xl" />
      </div>
      <div className="bg-white py-14">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-nest-900">What we stand for</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {agencyValues.map((item) => (
              <li key={item.title} className="rounded-2xl bg-nest-sand p-6">
                <h3 className="text-xl font-bold text-nest-900">{item.title}</h3>
                <p className="mt-2 text-slate-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
