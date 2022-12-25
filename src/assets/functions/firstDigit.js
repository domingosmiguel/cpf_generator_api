import { TABLE_FIRST_DIGIT_MULTIPLIERS } from '../constants/consts.js';

export default function firstDigit(numbers) {
  const digit = numbers.reduce(
    (acc, cur, idx) => acc + cur * TABLE_FIRST_DIGIT_MULTIPLIERS[idx],
    0
  );
  const rest = digit % 11;
  return rest === 1 || rest === 0 ? '0' : `${11 - rest}`;
}
