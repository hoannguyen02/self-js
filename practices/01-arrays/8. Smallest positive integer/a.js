function solution(arr) {
  let result = 1;
  const seen = {};
  for (const a of arr) {
    if (result === a) {
      let newResult = result + 1;
      while (seen[newResult] !== undefined) {
        newResult++;
      }
      result = newResult;
    }
    seen[a] = a;
  }
  return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
