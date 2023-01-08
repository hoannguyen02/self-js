function solution(arr) {
  let i = 0;
  let j = 0;
  let maxDistance = -1;
  while (j < arr.length) {
    if (arr[j] === 1) {
      const distance = j - i;
      maxDistance = Math.max(maxDistance, distance);
      i = j;
    }
    j++;
  }

  return maxDistance;
}

console.log(solution([1, 1]));
console.log(solution([1, 0, 1]));
console.log(solution([1, 0, 0, 1]));
console.log(solution([1, 0, 0, 0, 0, 1]));
console.log(solution([1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1]));
console.log(
  solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1])
);
