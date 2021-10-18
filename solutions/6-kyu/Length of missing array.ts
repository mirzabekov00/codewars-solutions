export function getLengthOfMissingArray(arr: any[]): number {
  const sortedLength = arr.map((child) => child.length).sort((a, b) => a - b);

  if (sortedLength.indexOf(0) === 0) {
    return 0;
  }

  let result = 0;
  let i = sortedLength[0];
  for (const item of sortedLength) {
    if (item !== i) {
      result = i;
      break;
    }

    i++;
  }
  return result;
}
