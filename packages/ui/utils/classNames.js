/**
 * className Collector
 * @param  {...any} classes 'text-sm text-black', 'py-2 h-4'
 * @returns
 * @example classNames('text-sm text-black', variable && 'bg-blue');
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default classNames;
