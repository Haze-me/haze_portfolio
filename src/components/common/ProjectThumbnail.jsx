import { ImageIcon } from 'lucide-react';
import { cx } from '../../utils/format.js';

export default function ProjectThumbnail({ project, className, priority }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.name}, ${project.subtitle.toLowerCase()}`}
        width="1280"
        height="800"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cx('aspect-[16/10] w-full object-cover object-top', className)}
      />
    );
  }
  return (
    <div className={cx('hero-grid grid aspect-[16/10] w-full place-items-center bg-navy-900 p-4 text-center', className)}>
      <div>
        <ImageIcon className="mx-auto size-8 text-accent-400" aria-hidden="true" />
        <p className="mt-3 font-display text-lg font-bold text-white">{project.name}</p>
        <p className="mt-1 text-sm text-slate-300">Screenshot placeholder</p>
      </div>
    </div>
  );
}
