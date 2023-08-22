// 정렬된 배열에서 두 개의 포인터가 왼쪽 끝과 오른쪽 끝에서 가운데로 이동하며 합이 0이 되는 쌍을 찾는다.
// [-3. 3] = 0

// O(N^2)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]);

// O(n)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));
