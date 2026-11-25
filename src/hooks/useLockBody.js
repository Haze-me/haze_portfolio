import { useEffect } from 'react';

/** Stops the page scrolling behind an open menu or dialog; Escape closes it. */
export function useLockBody(active, onEscape) {
  useEffect(() => {
    if (!active) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => event.key === 'Escape' && onEscape?.();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, onEscape]);
}
