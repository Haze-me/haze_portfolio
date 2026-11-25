import LogoMark from './LogoMark.jsx';

/** Made for dark backgrounds (header, mobile menu and footer). */
export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="size-11 shrink-0" />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-extrabold tracking-tight text-white">
          Haze<span className="text-accent-400">Tech</span>
        </span>
        <span className="mt-1.5 block text-[0.625rem] font-semibold tracking-[0.28em] text-slate-400 uppercase">
          Web Solutions
        </span>
      </span>
    </span>
  );
}
