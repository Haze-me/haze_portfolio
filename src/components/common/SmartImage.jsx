import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { imageSrcSet, imageUrl } from '../../data/demo/images.js';
import { cx } from '../../utils/format.js';

/** Responsive, lazy-loaded stock photo with a readable fallback. */
function Photo({ photo, sizes, className, priority }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={photo.alt} className={cx('grid place-items-center bg-slate-200 text-slate-600', className)}>
        <span className="flex flex-col items-center gap-2 p-3 text-center text-xs">
          <ImageOff className="size-6" aria-hidden="true" />
          Image unavailable
        </span>
      </div>
    );
  }
  return (
    <img
      src={imageUrl(photo.id, 960)}
      srcSet={imageSrcSet(photo.id)}
      sizes={sizes}
      alt={photo.alt}
      width="960"
      height="640"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
      className={cx('bg-slate-200 object-cover', className)}
    />
  );
}

export default function SmartImage({ sizes = '100vw', ...props }) {
  // The key resets the error state when the photo changes (galleries).
  return <Photo key={props.photo.id} sizes={sizes} {...props} />;
}
