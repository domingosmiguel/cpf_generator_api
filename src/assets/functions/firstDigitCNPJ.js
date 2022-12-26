import { FIRST_DIGIT_MULTIPLIERS_CNPJ } from '../constants/consts.js';

export default function firstDigitCNPJ(numbers) {
  const digit = numbers.reduce(
    (acc, cur, idx) => acc + cur * FIRST_DIGIT_MULTIPLIERS_CNPJ[idx],
    0
  );
  const rest = digit % 11;
  return rest === 1 || rest === 0 ? '0' : `${11 - rest}`;
}
