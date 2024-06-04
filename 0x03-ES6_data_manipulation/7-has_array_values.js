export default function hasValuesFromArray(s, a) {
  return a.every((x) => s.has(x));
}
