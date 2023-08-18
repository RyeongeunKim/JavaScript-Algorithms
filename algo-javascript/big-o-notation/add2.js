function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const startTime = performance.now();
addUpTo(100000000);
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log(`작업 실행 시간: ${executionTime}ms`);
