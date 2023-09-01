// 정렬된 배열을 인수로 받고 고유 값을 세는 countUniqueValues라는 함수를 구현한다.
// 배열에 음수가 있을 수 있지만 항상 정렬된다.

// my solution 1
function countUniqueValues2(values) {
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

// my solution 2 (힌트듣고 수정)
function countUniqueValues(values) {
  let result = 0;

  if (!values.length) return result;

  for (let i = 0; i < values.length; i++) {
    if (i === 0 || values[i - 1] < values[i]) {
      result++;
    }
  }

  return result;
}

// teacher solution

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
