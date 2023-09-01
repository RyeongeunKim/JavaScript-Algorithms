// 정렬된 배열을 인수로 받고 고유 값을 세는 countUniqueValues라는 함수를 구현한다.
// 배열에 음수가 있을 수 있지만 항상 정렬된다.

// my solution 1 : O(n)
function countUniqueValues1(values) {
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

// my solution 2 (힌트듣고 수정) : O(n)
function countUniqueValues2(values) {
  let result = 0;

  if (!values.length) return result;

  for (let i = 0; i < values.length; i++) {
    if (i === 0 || values[i - 1] < values[i]) {
      result++;
    }
  }

  return result;
}

// [권장] solution provided by the teacher - 추가 메모리를 사용하지 않고 중복 제거
// O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
