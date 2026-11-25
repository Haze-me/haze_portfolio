import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/** Uses the native <dialog>, which handles focus trapping and Escape. */
export default function Dialog({ open, onClose, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      aria-label={title}
      className="m-auto w-[min(32rem,calc(100%-2rem))] rounded-2xl bg-white p-0 text-ink shadow-lift backdrop:bg-navy-950/70"
    >
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold text-navy-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mt-2 -mr-2 grid size-11 shrink-0 place-items-center rounded-full hover:bg-mist"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
