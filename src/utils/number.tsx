export const formatDigitNumber = myNumber => ("0" + myNumber).slice(-2);

// @ts-ignore
export function formatMoney(
  amount,
  decimalCount = 0,
  decimal = ".",
  thousands = ","
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    // tslint:disable-next-line: radix
    const i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      // @ts-ignore
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {}
}
export const unitTx = "d";
