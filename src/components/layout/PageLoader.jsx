export default function PageLoader() {
  return (
    <div className="min-h-screen" role="status">
      <span className="sr-only">Loading page</span>
      <div className="h-72 animate-pulse bg-slate-200" />
    </div>
  );
}
