/** Label, control and error message, wired together for screen readers. */
export default function FormField({ id, label, error, hint, optional, className, children }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  const control = {
    id,
    name: id,
    className: 'field',
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy,
    required: !optional,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children(control)}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}
