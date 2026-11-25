/**
 * HazeTech monogram: an H whose crossbar is three layers of "haze".
 * public/favicon.svg uses the same shapes; change them together.
 */
export default function LogoMark({ className = 'size-10' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="16" fill="#2563eb" />
      <rect x="16" y="14" width="9" height="36" rx="4.5" fill="#fff" />
      <rect x="39" y="14" width="9" height="36" rx="4.5" fill="#fff" />
      <rect x="27" y="22.5" width="17" height="4" rx="2" fill="#bfdbfe" opacity="0.7" />
      <rect x="10" y="30" width="44" height="4.5" rx="2.25" fill="#bfdbfe" />
      <rect x="20" y="38" width="17" height="4" rx="2" fill="#bfdbfe" opacity="0.7" />
    </svg>
  );
}
