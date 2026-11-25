import { site } from '../config/site.js';
import { principles } from '../data/content.js';
import { skillGroups } from '../data/skills.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Section, { SectionHeading } from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import ServiceIcon from '../components/common/ServiceIcon.jsx';

const experience = [
  {
    title: 'Building interfaces',
    body: 'Responsive React applications and websites, styled with Tailwind CSS and connected to real APIs.',
  },
  {
    title: 'Building the server side',
    body: 'REST APIs and application logic in Django and FastAPI, with PostgreSQL databases.',
  },
  {
    title: 'Deploying applications',
    body: 'Containerising with Docker, running on AWS and Kubernetes, describing infrastructure with Terraform, and automating releases with GitHub Actions and Argo CD.',
  },
];

export default function About() {
  useSeo({ ...pageMeta['/about'], path: '/about' });

  return (
    <>
      <PageHero eyebrow="About HazeTech" title="Meet the developer behind HazeTech." intro={site.positioning}>
        <Button to="/contact">Work with me</Button>
        <Button to="/projects" variant="ghostLight">See my projects</Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <h2 className="text-3xl font-bold text-navy-900">Web developer, from interface to infrastructure</h2>
            <p>
              I am Harrison Aka, a web developer with experience in frontend development, backend engineering and DevOps.
              My focus is business website solutions: websites and web applications that help organisations
              present themselves well and serve their customers.
            </p>
            <p>
              I work with organisations such as real estate agencies, property developers, schools,
              hospitality businesses, restaurants, event planners and other small and medium-sized businesses,
              in Nigeria and internationally.
            </p>
            <p>
              Because I work across the stack, I can plan a project as a whole, including the less visible
              parts such as data, security and hosting.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="mx-auto max-w-sm">
              <img
                src="/harrison-aka.jpg"
                alt="Portrait of Harrison Aka"
                width="1280"
                height="1207"
                decoding="async"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              />
              <figcaption className="mt-4 text-center">
                <strong className="block text-navy-900">{site.founder}</strong>
                <span className="text-sm text-muted">{site.name} · {site.location}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Experience" title="Building and deploying applications" intro="My work covers the full path from a screen design to a running service." />
        <ul className="grid gap-5 md:grid-cols-3">
          {experience.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Technical background" title="Technologies and tools" />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-white p-7 shadow-card">
                <span className="grid size-12 place-items-center rounded-xl bg-navy-900 text-accent-400">
                  <ServiceIcon name={group.icon} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{group.title}</h3>
                <p className="mt-2 text-sm text-muted">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-lg bg-mist px-3 py-2 text-sm font-medium text-navy-800">{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading dark eyebrow="Development philosophy" title="How I approach the work" />
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Let us talk about your project" />
    </>
  );
}
