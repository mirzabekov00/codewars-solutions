export class G964 {
  public static digPow = (n: number, p: number) => {
    const arrayOfNumber = n.toString().split("").map(Number);

    let powNumber = p;
    const sum = arrayOfNumber.reduce((acum, current) => {
      acum += Math.pow(current, powNumber);
      powNumber++;
      return acum;
    }, 0);

    const result = sum / n;

    if (Number.isInteger(result)) {
      return result;
    }

    return -1;
  };
}
