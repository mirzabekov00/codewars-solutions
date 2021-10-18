const createArray = (size: number, start = 0) =>
  Array(size)
    .fill(null)
    .map((_, index) => index + start);

export function multiplicationTable(size: number): number[][] {
  return createArray(size, 1).reduce(
    (acum: number[][], current) => [
      ...acum,
      createArray(size, 1).map((item) => item * current),
    ],
    []
  );
}
