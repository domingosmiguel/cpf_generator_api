import allDigitsAreEqual from './allDigitsAreEqual.js';
import firstDigit from './firstDigitCPF.js';
import getRandomArbitraryNumber from './getRandomArbitraryNumber.js';
import secondDigit from './secondDigitCPF.js';

export default function cpfGenerator(punctuation) {
  const numbers = [];

  for (let i = 0; i < 9; i++) {
    numbers.push(getRandomArbitraryNumber(0, 9).toFixed());
  }
  if (allDigitsAreEqual(numbers)) {
    return cpfGenerator(punctuation);
  }
  numbers.push(firstDigit(numbers));
  numbers.push(secondDigit(numbers));

  if (punctuation) {
    numbers.splice(9, 0, '-');
    numbers.splice(6, 0, '.');
    numbers.splice(3, 0, '.');
  }
  return numbers.join('');
}
