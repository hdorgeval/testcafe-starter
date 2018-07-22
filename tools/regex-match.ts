export function firstMatch(regex: RegExp, value: string): string | null {
  const match = value.match(regex);
  if (match === null) {
    return null;
  }
  const result = match[0].replace(/'/gi, '');
  return result;
}
export function secondMatch(regex: RegExp, value: string): string | null {
  const match = value.match(regex);
  if (match === null) {
    return null;
  }
  const result = match[1].replace(/'/gi, '');
  return result;
}
