import { cx } from '../../utils/format.js';

export default function BrowserFrame({ address, className, children }) {
  return (
    <div className={cx('overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lift', className)}>
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-2.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-600">{address}</span>
      </div>
      {children}
    </div>
  );
}
