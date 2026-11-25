import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { site } from '../config/site.js';
import { audiences, processSteps, reasons } from '../data/content.js';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import { siteSchema } from '../utils/schema.js';
import Button from '../components/ui/Button.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Section, { SectionHeading } from '../components/ui/Section.jsx';
import HeroVisual from '../components/home/HeroVisual.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import DemoShowcase from '../components/common/DemoShowcase.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import ServiceIcon from '../components/common/ServiceIcon.jsx';

export default function Home() {
  useSeo({ ...pageMeta['/'], path: '/', jsonLd: siteSchema() });

  return (
    <>
      <section className="hero-grid overflow-hidden bg-navy-950 text-white">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold text-accent-400">
              {site.name} · Web development in Nigeria
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-extrabold sm:text-5xl xl:text-6xl">
              Building Digital Experiences That Help Businesses Grow.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              I design and develop modern, responsive websites that help businesses establish credibility,
              showcase their services and connect with more customers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg">
                Start a Project <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <Button to="/projects" size="lg" variant="ghostLight">
                View My Work
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="border-t border-white/10 bg-navy-900">
          <div className="container-page flex flex-col gap-3 py-5 lg:flex-row lg:items-center">
            <p className="shrink-0 text-sm font-semibold text-white">Who I help:</p>
            <ul className="flex flex-wrap gap-2">
              {audiences.map((item) => (
                <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow="Introduction" title="A developer who thinks about your business, not only the code" />
          <Reveal className="text-lg leading-relaxed text-muted">
            <p>
              I am Harrison Aka, the web developer behind HazeTech, with experience in frontend development, backend engineering
              and DevOps. I work with businesses that need to look credible online and make it easy for
              customers to get in touch.
            </p>
            <p className="mt-4">
              That range means I can think through the whole job: what visitors see, what happens behind the
              scenes and how the website gets online.
            </p>
            <Button to="/about" variant="outline" className="mt-6">More about me</Button>
          </Reveal>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Services" title="What I can build for you" intro="From a first business website to property platforms, applications and deployment." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Reveal delay={(index % 4) * 0.06} className="h-full">
                <Link
                  to={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent-400 hover:shadow-lift"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-accent-50 text-accent-700">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-700">
                    Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="For real estate" title="See what your property website could feel like" intro="Search, filter and open listings in a working demonstration built for Nigerian agencies and developers." />
        <DemoShowcase />
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Featured projects" title="Selected work" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Button to="/projects" variant="outline" className="mt-10">
          View all projects <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </Section>

      <Section tone="navy">
        <SectionHeading dark eyebrow="Why work with me" title="What your business can expect" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ServiceIcon name={reason.icon} className="size-7 text-accent-400" />
              <h3 className="mt-4 text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.body}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-16 text-2xl font-bold">How a project works</h3>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-accent-600 pt-4">
              <p className="text-sm font-semibold text-accent-400">Step {index + 1}</p>
              <h4 className="mt-1 text-lg font-bold">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
        <Button to="/pricing" variant="light" className="mt-10">See packages and starting prices</Button>
      </Section>

      <CtaBanner />
    </>
  );
}
