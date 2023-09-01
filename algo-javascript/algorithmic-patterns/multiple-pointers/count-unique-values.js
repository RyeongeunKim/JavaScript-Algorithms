// my solution
function countUniqueValues(values) {
  if (!values.length) return 0;

  const countUniqueList = [];
  let currentValue;

  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    if (i === 0 || currentValue < value) {
      countUniqueList.push(value);
      currentValue = value;
    }
  }

  return countUniqueList.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// teacher solution
