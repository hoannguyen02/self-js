function solution(arr) {
  let i = 1;
  let result = null;
  while (i < arr.length) {
    if (!arr.includes(i)) {
      return i;
    }
    i++;
  }

  if (result == null) {
    return i + 1;
  }

  return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
