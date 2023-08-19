// 주어진 두 배열 간에, 첫 번째 배열의 값들이 두 번째 배열에서 제곱된 값으로 존재하는지 확인하는 함수
// 순서는 중요하지 않으며, 값의 빈도는 동일해야 한다.

// 생각해보기 => O(n^2)

function same0(arr1, arr2) {
  let result = false;

  if (arr1.length !== arr2.length) {
    return result;
  }

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    const num1 = element * element;

    const findIndex = arr2.findIndex((num2) => num2 === num1);
    if (findIndex !== -1) {
      arr2.splice(findIndex, 1);
    }

    if (i === arr1.length - 1 && !arr2.length) {
      result = true;
    }
  }

  return result;
}
console.log(same0([2, 1, 3], [4, 1, 9]));

// 예시1) 순진한 해결책 => O(n^2)

function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same1([1,2,3,2], [9,1,4,4])

// [권장] 예시2 => O(n)

function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same2([1,2,3,2,5], [9,1,4,4,11])



