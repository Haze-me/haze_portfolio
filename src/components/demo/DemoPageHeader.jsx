export default function DemoPageHeader({ title, intro }) {
  return (
    <div className="bg-nest-900 py-12 text-white sm:py-16">
      <div className="container-page">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {intro && <p className="mt-3 max-w-2xl text-lg text-slate-200">{intro}</p>}
      </div>
    </div>
  );
}
