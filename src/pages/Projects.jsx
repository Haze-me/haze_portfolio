import { demoSiteHref } from '../utils/domains.js';
import { projects } from '../data/projects.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import Button from '../components/ui/Button.jsx';
import Section, { SectionHeading } from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import DemoShowcase from '../components/common/DemoShowcase.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';

export default function Projects() {
  useSeo({ ...pageMeta['/projects'], path: '/projects' });

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects and demonstrations"
        intro="Platform, backend and cloud work, plus an interactive real estate website you can try."
      >
        <Button to={demoSiteHref} variant="light">Try the real estate demo</Button>
        <Button to="/contact">Start a Project</Button>
      </PageHero>
      <Section>
        <SectionHeading eyebrow="Real estate demo" title="Built for agencies to explore" intro="PrimeNest Properties is a fictional company created to demonstrate a property website. It is not a client." />
        <DemoShowcase />
      </Section>
      <Section tone="mist">
        <SectionHeading eyebrow="Projects" title="Selected projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
      <CtaBanner title="Have a project in mind?" />
    </>
  );
}
