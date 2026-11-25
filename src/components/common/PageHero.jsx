export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <div className="hero-grid bg-navy-950 py-16 text-white sm:py-24">
      <div className="container-page">
        <p className="text-sm font-semibold tracking-widest text-accent-400 uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}
