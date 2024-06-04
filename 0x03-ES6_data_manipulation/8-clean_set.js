export default function cleanSet(s, startString) {
  let text = "";

  if (startString === "") {
    return text;
  }

  for (const x of s) {
    if (x.indexOf(startString) === 0) {
      let temp = x.slice(startString.length);
      text += temp + '-';
    }
  }
  return text.slice(0, -1);
}
