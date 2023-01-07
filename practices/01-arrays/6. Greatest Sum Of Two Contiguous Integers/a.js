function solution(arr) {
  let i = 0;
  let max = 0;
  while (i < arr.length - 1) {
    const sum = arr[i] + arr[i + 1];
    max = Math.max(max, sum);
    i++;
  }

  return max;
}

console.log(solution([1, 3, 7, 9, 2, 4]));
