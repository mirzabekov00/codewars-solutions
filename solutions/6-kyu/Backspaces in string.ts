export function cleanString(s: string) {
  return s
    .split("")
    .reduce(
      (a, c): any => (c === "#" ? (a.length ? a.pop() && a : []) : [...a, c]),
      []
    )
    .join("");
}
