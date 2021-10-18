const calcSum = (arr: number[]) => arr.reduce((acc, c) => (acc += c), 0);

const splitArray = (arr: number[], index: number) => {
  const firstPart = [...arr].filter((_, i) => i !== index);
  const secondPart = firstPart.splice(0, index);

  return [calcSum(firstPart), calcSum(secondPart)];
};

export function findEvenIndex(arr: number[]): number {
  return arr.reduce((acum: number, _, index): number => {
    const [firstPartSum, secondPartSum] = splitArray(arr, index);
    if (firstPartSum === secondPartSum) {
      arr.splice(1);
      return (acum = index);
    }
    if (index === arr.length - 1) {
      return -1;
    }
    return 0;
  }, 0);
}
