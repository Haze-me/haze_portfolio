import { cx } from '../../utils/format.js';

export default function TechList({ items, className }) {
  return (
    <ul aria-label="Technologies" className={cx('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-navy-800">
          {item}
        </li>
      ))}
    </ul>
  );
}
