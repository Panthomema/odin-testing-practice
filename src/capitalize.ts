export function capitalize(str: string): string {
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.slice(1);
}
