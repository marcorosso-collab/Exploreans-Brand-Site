/** House style: 14 October 2026. Day before month, month in full, no ordinals. */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}
