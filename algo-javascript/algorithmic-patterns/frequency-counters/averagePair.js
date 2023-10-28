// 정렬된 정수 배열에서 평균이 목표 평균과 같은 쌍의 유무 확인(목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있음)
// Time: O(N), Space: O(1)
function averagePair(array, num) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === num) return true;
    avg < num ? start++ : end--;
  }
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
