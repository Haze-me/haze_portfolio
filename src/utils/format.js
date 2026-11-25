const naira = new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 });

export const formatNaira = (amount) => `₦${naira.format(amount)}`;

export function formatShortNaira(amount) {
  const trim = (value) => String(Math.round(value * 100) / 100);
  if (amount >= 1e9) return `₦${trim(amount / 1e9)}bn`;
  if (amount >= 1e6) return `₦${trim(amount / 1e6)}m`;
  if (amount >= 1e3) return `₦${trim(amount / 1e3)}k`;
  return formatNaira(amount);
}

export const cx = (...classes) => classes.filter(Boolean).join(' ');
