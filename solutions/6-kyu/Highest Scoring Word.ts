/**
 * Description:
 * 
   Given a string of words, you need to find the highest scoring word.
   Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
   You need to return the highest scoring word as a string.
   If two words score the same, return the word that appears earliest in the original string.
   All letters will be lowercase and all inputs will be valid.
 */

interface ICounted {
  [key: string]: number;
}

const VALUE_OFFSET = 96;

export const high = (str: string): string => {
  const counted = str.split(" ").reduce<ICounted>((acum, current) => {
    return {
      ...acum,
      [current]: current
        .split("")
        .reduce(
          (letterAcum, letter) =>
            (letterAcum += letter.charCodeAt(0) - VALUE_OFFSET),
          0
        ),
    };
  }, {});

  const resultObject = Object.entries(counted).reduce<{
    [key: string]: number;
  }>((acum, current) => {
    const [key, value] = current;

    const acumValue = Object.values(acum)[0];

    if (value > acumValue || !acumValue) {
      return (acum = { [key]: value });
    }

    return acum;
  }, {});

  return Object.keys(resultObject)[0];
};
