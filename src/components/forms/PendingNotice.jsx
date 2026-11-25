import { Info } from 'lucide-react';
import { cx } from '../../utils/format.js';

export default function PendingNotice({ children, className }) {
  return (
    <div className={cx('flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950', className)}>
      <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <p>
        <strong className="block">Backend submission integration is pending.</strong>
        {children}
      </p>
    </div>
  );
}
