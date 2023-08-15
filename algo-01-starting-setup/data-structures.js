const age = [30, 29, 54];

// [30, 29, 54] => [30, 29, 54, _]
// [0 , 1 , 2 ] => [0 , 1 , 2 , 3]
age.push(60); // Constant Time Complexity: O(1)

// [30, 29, 54] => [_, 30, 29, 54]
// [0 , 1 , 1 ] => [0, 1 , 2 , 3 ]
age.unshift(10); // => Linear Time Complexity: O(n)

const myAge = age[1]; // => Constant Time Complexity: O(1)

// ----

const namePopularity = [
  { userName: "max", usages: 5 },
  { userName: "manu", usages: 6 },
];

const manuUsages = namePopularity.find(
  (pers) => pers.userName === "manu"
).usages;
// BEST CASE: Constant Time Complexity => O(1)
// WORST CASE: Linear Time Complexity => O(n)
// AVERAGE CASE: Linear Time Complexity => O(n)

const nameMap = {
  max: 5,
  manu: 6,
};

const manuUsages2 = nameMap["manu"]; // => Constant Time Complexity: O(1)

// const nameRealMap = new Map();