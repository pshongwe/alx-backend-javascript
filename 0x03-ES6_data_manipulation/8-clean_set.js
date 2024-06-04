export default function cleanSet(s, startString) {
  if (startString === '') {
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
