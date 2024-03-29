function solution(arr) {
  let max = -1;
  let i = 0;
  const seen = {};
  while (i < arr.length) {
    const current = arr[i];

    for (const key in seen) {
      seen[key] = seen[key] + current;
    }

    if (seen[current] !== undefined) {
      max = Math.max(seen[current], max);
    } else {
      seen[current] = current;
    }

    i++;
  }

  return max;
}

console.log(solution([1, 3, 6, 1, 6, 6, 9, 9]));
console.log(solution([5, 2, 4, 3]));
console.log(solution([2, 2, 2, 3, 2, 3]));
