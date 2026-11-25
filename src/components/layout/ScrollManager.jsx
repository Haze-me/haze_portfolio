import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/** New page: go to the top. With a #hash: scroll to that section. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const type = useNavigationType();

  useEffect(() => {
    if (hash) {
      // The page may still be loading as a lazy chunk, so retry briefly.
      let tries = 0;
      const timer = setInterval(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        tries += 1;
        if (target || tries > 20) clearInterval(timer);
        target?.scrollIntoView();
      }, 50);
      return () => clearInterval(timer);
    }
    if (type !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash, type]);

  return null;
}
