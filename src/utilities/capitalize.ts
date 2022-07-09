export default function capitalize(str: string): string {
  return String(str)[0].toUpperCase() + String(str).slice(1);
}
