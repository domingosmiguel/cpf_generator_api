import allDigitsAreEqual from './allDigitsAreEqual.js';
import firstDigitCNPJ from './firstDigitCNPJ.js';
import getRandomArbitraryNumber from './getRandomArbitraryNumber.js';
import secondDigitCNPJ from './secondDigitCNPJ.js';

export default function cnpjGenerator(mask) {
  const numbers = [];

  for (let i = 0; i < 8; i++) {
    numbers.push(getRandomArbitraryNumber(0, 9).toFixed());
  }
  if (allDigitsAreEqual(numbers)) {
    console.log('repeated numbers on cnpjGenerator')
    return cnpjGenerator(mask);
  }
  numbers.splice(8, 0, '0', '0', '0', '1');
  numbers.push(firstDigitCNPJ(numbers));
  numbers.push(secondDigitCNPJ(numbers));

  if (mask) {
    numbers.splice(12, 0, '-');
    numbers.splice(8, 0, '/');
    numbers.splice(5, 0, '.');
    numbers.splice(2, 0, '.');
  }
  return numbers.join('');
}
