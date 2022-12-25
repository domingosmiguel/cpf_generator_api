import allDigitsAreEqual from './allDigitsAreEqual.js';
import firstDigit from './firstDigit.js';
import getRandomArbitraryNumber from './getRandomArbitraryNumber.js';
import secondDigit from './secondDigit.js';

export default function cpfGenerator(punctuation) {
  const numbers = [];

  for (let i = 0; i < 9; i++) {
    numbers.push(getRandomArbitraryNumber(0, 9).toFixed());
  }
  if (allDigitsAreEqual(numbers)) {
    cpfGenerator(punctuation);
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
