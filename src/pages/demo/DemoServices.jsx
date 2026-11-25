import { demoPath } from '../../utils/domains.js';
import { agencyServices } from '../../data/demo/agency.js';
import { demoMeta } from '../../data/seo.js';
import { useSeo } from '../../hooks/useSeo.js';
import Button from '../../components/ui/Button.jsx';
import DemoPageHeader from '../../components/demo/DemoPageHeader.jsx';

export default function DemoServices() {
  const path = '/demo/primenest/services';
  useSeo({ ...demoMeta[path], path, noindex: true });

  return (
    <>
      <DemoPageHeader title="Our services" intro="Support for buyers, tenants, landlords and developers." />
      <div className="container-page py-14">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencyServices.map((item) => (
            <li key={item.title} className="flex flex-col rounded-2xl bg-white p-7 shadow-card">
              <h2 className="text-xl font-bold text-nest-900">{item.title}</h2>
              <p className="mt-3 text-slate-700">{item.body}</p>
              <div className="mt-auto pt-6">
                <Button to={demoPath('/contact')} variant="outline">
                  Ask about this<span className="sr-only">: {item.title}</span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
