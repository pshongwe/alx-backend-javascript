export default function cleanSet(s, startString) {
  if (startString === '' || !s || !startString || !(s instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const x of s) {
    if (x.startsWith(startString)) {
      result.push(x.slice(startString.length));
    }
  }

  return result.join('-');
}
