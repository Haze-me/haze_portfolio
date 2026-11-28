import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProjectThumbnail from './ProjectThumbnail.jsx';
import TechList from './TechList.jsx';

export default function ProjectCard({ project, headingLevel: Heading = 'h3' }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <ProjectThumbnail project={project} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-accent-700">{project.category}</p>
        <Heading className="mt-1 text-xl font-bold text-navy-900">{project.name}</Heading>
        <p className="font-medium text-muted">{project.subtitle}</p>
        {project.badge && (
          <p className="mt-2 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">{project.badge}</p>
        )}
        <p className="mt-3 text-muted">{project.description}</p>
        <TechList items={project.technologies} className="mt-4" />
        <div className="mt-auto flex flex-wrap items-center gap-x-6 pt-6">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent-700 hover:underline"
          >
            Project details <span className="sr-only">for {project.name}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-navy-900 hover:underline"
            >
              View live demo <span className="sr-only">of {project.name} (opens in a new tab)</span>
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
