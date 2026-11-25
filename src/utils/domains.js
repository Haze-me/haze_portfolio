// One app, two web addresses:
//   hazetech.online        portfolio
//   demo.hazetech.online   PrimeNest demo at the root
// Anywhere else (local, preview deployments) the demo lives at /demo/primenest.
import { site } from '../config/site.js';

export const DEMO_ROOT = '/demo/primenest';

export const isDemoHost = (hostname) => hostname.startsWith('demo.');

export function isMainHost(hostname, url = site.url) {
  const main = new URL(url).hostname;
  return hostname === main || hostname === `www.${main}`;
}

const current = typeof window === 'undefined' ? null : window.location;
export const onDemoHost = Boolean(current && isDemoHost(current.hostname));

/** A route inside the demo, e.g. demoPath('/properties'). */
export const demoPath = (sub = '') => (onDemoHost ? sub || '/' : `${DEMO_ROOT}${sub}`);

/** A link to a portfolio page from inside the demo. */
export const portfolioHref = (path) =>
  onDemoHost ? `${current.protocol}//${current.host.replace(/^demo\./, '')}${path}` : path;

/** Where the portfolio sends people who open the demo. */
export const demoSiteHref = current && isMainHost(current.hostname) ? site.demoUrl : DEMO_ROOT;

/** The public address of a page, for canonical and sharing tags. */
export function publicUrl(path) {
  if (path === DEMO_ROOT || path.startsWith(`${DEMO_ROOT}/`)) {
    return `${site.demoUrl}${path.slice(DEMO_ROOT.length) || '/'}`;
  }
  return `${site.url}${path}`;
}
