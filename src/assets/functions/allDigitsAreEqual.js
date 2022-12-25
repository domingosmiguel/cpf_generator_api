export default function allDigitsAreEqual(numbers) {
  return numbers.every((n, index, arr) => n === arr[0]);
}
