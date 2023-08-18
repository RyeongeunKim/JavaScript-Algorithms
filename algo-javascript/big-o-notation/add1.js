function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

const startTime = performance.now();
addUpTo(100000000);
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`작업 실행 시간: ${executionTime}ms`);
