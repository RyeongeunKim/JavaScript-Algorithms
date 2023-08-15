function getMin(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }
  let currentMinimum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error("Should not be an empty array!");
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement; // [1, 3]

        outerElement = numbers[i]; // => 1
        innerElement = numbers[j]; // => 3
      }
    }
  }

  return numbers[0];
}

const testNumbers = [2, 1, -5, 10, 10, -10];

const min = getMin2(testNumbers);

console.log(min);
