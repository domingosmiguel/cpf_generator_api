export default function allDigitsAreEqual(numbers) {
  const length = numbers.length;
  return numbers.every((n, index, arr) => n === arr[length - 1]);
}
