import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProject, projects } from '../data/projects.js';
import { getService } from '../data/services.js';
import { pageMeta } from '../data/seo.js';
import { useSeo } from '../hooks/useSeo.js';
import Button from '../components/ui/Button.jsx';
import Section, { SectionHeading } from '../components/ui/Section.jsx';
import PageHero from '../components/common/PageHero.jsx';
import ProjectThumbnail from '../components/common/ProjectThumbnail.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import TechList from '../components/common/TechList.jsx';
import CtaBanner from '../components/common/CtaBanner.jsx';
import NotFound from './NotFound.jsx';

function Details({ project }) {
  const path = `/projects/${project.slug}`;
  useSeo({ ...pageMeta[path], path });
  const service = getService(project.relatedService);

  return (
    <>
      <PageHero eyebrow={project.category} title={`${project.name}: ${project.subtitle}`} intro={project.description} />
      <Section>
        <Link to="/projects" className="mb-8 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-700 hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" /> All projects
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <ProjectThumbnail project={project} priority className="rounded-2xl border border-line" />
            {project.badge && (
              <p className="mt-4 w-fit rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-950">{project.badge}</p>
            )}
            <h2 className="mt-8 text-2xl font-bold text-navy-900">Overview</h2>
            <p className="mt-3 text-lg text-muted">{project.description}</p>
            {project.notes.map((note) => (
              <div key={note.heading}>
                <h2 className="mt-8 text-2xl font-bold text-navy-900">{note.heading}</h2>
                <p className="mt-3 text-lg text-muted">{note.body}</p>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-line p-6 shadow-card">
            <h2 className="text-lg font-bold text-navy-900">Technology stack</h2>
            <TechList items={project.technologies} className="mt-4" />
            {service && (
              <>
                <h2 className="mt-7 text-lg font-bold text-navy-900">Related service</h2>
                <Link to={`/services#${service.slug}`} className="inline-flex min-h-10 items-center text-accent-700 underline">
                  {service.title}
                </Link>
                <Button to={`/contact?service=${service.slug}`} className="mt-4 w-full">
                  Discuss a similar project
                </Button>
              </>
            )}
          </aside>
        </div>
      </Section>
      <Section tone="mist">
        <SectionHeading eyebrow="More work" title="Other projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.filter((item) => item.slug !== project.slug).slice(0, 2).map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}

export default function ProjectDetails() {
  const project = getProject(useParams().slug);
  return project ? <Details key={project.slug} project={project} /> : <NotFound />;
}
