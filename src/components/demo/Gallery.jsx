import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { cx } from '../../utils/format.js';
import SmartImage from '../common/SmartImage.jsx';
import Dialog from '../ui/Dialog.jsx';

const arrow = 'absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-nest-950 shadow-card hover:bg-white';

export default function Gallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const many = images.length > 1;
  const step = (delta) => setIndex((value) => (value + delta + images.length) % images.length);
  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
  };

  return (
    <div role="group" aria-label={`Photos of ${title}`} onKeyDown={onKeyDown}>
      <div className="relative overflow-hidden rounded-2xl">
        <SmartImage photo={images[index]} priority sizes="(min-width: 1024px) 760px, 100vw" className="aspect-[4/3] w-full sm:aspect-[16/10]" />
        {many && (
          <>
            <button type="button" className={cx(arrow, 'left-3')} onClick={() => step(-1)} aria-label="Previous photo">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className={cx(arrow, 'right-3')} onClick={() => step(1)} aria-label="Next photo">
              <ChevronRight aria-hidden="true" />
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="absolute right-3 bottom-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-nest-950/85 px-4 text-sm font-semibold text-white"
        >
          <Expand className="size-4" aria-hidden="true" /> {index + 1} / {images.length}
          <span className="sr-only">, enlarge photo</span>
        </button>
      </div>
      {many && (
        <ul className="mt-3 flex gap-2 overflow-x-auto p-1">
          {images.map((photo, i) => (
            <li key={photo.id} className="w-20 shrink-0 sm:w-28">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                className={cx('block w-full overflow-hidden rounded-lg ring-offset-2', i === index ? 'ring-2 ring-nest-gold' : 'opacity-70 hover:opacity-100')}
              >
                <SmartImage photo={photo} sizes="112px" className="aspect-[4/3] w-full" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <Dialog open={zoomed} onClose={() => setZoomed(false)} title={title}>
        {zoomed && (
          <>
            <SmartImage photo={images[index]} sizes="100vw" className="max-h-[60vh] w-full rounded-lg object-contain!" />
            {many && (
              <div className="mt-3 flex items-center justify-between">
                <button type="button" className="min-h-11 px-3 font-semibold" onClick={() => step(-1)}>Previous</button>
                <span className="text-sm text-muted">{index + 1} of {images.length}</span>
                <button type="button" className="min-h-11 px-3 font-semibold" onClick={() => step(1)}>Next</button>
              </div>
            )}
          </>
        )}
      </Dialog>
    </div>
  );
}
