function solution(arr) {
  let i = 0;
  let j = 0;
  let max = -1;
  while (j < arr.length) {
    if (arr[j] === 1) {
      const distance = j - i;
      max = Math.max(max, distance);
      i = j;
    }
    j++;
  }

  return max;
}

console.log(solution([1, 1]));
console.log(solution([1, 0, 1]));
console.log(solution([1, 0, 0, 1]));
console.log(solution([1, 0, 0, 0, 0, 1]));
console.log(solution([1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1]));
console.log(
  solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1])
);
