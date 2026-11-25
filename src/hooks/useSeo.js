import { useEffect } from 'react';
import { site } from '../config/site.js';
import { publicUrl } from '../utils/domains.js';

function upsert(selector, create, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(create);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

const meta = (attr, key, content) =>
  upsert(`meta[${attr}="${key}"]`, 'meta', { [attr]: key, content });

/** Sets the page title, description, canonical, Open Graph tags and JSON-LD. */
export function useSeo({ title, description, path, noindex = false, jsonLd }) {
  const json = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = publicUrl(path);
    document.title = title;
    meta('name', 'description', description);
    meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    meta('property', 'og:type', 'website');
    meta('property', 'og:site_name', site.name);
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:url', url);
    meta('property', 'og:image', `${site.url}/og-image.png`);
    meta('name', 'twitter:card', 'summary_large_image');
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: url });

    document.getElementById('page-jsonld')?.remove();
    if (json) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = json;
      document.head.appendChild(script);
    }
  }, [title, description, path, noindex, json]);
}
