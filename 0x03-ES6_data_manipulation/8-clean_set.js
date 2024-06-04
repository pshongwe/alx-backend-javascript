export default function cleanSet(s, startString) {
  let text = '';

  if (startString === '') {
    return text;
  }

  for (const x of s) {
    if (x.indexOf(startString) === 0) {
      const temp = x.substring(startString.length);
      text += `${temp}-`;
    }
  }
  return text.slice(0, -1);
}
