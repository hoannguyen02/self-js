function solution(arr) {
  if (arr.length == 1) return 0;
  
  let i = 0;
  let count = 0;
  const countedMap = {};
  while (i < arr.length - 1) {
    const sum = arr[i] + arr[i + 1];
    if (sum % 2 === 0) {
      if (!countedMap[i - 1]) {
        countedMap[i] = true;
        count++;
      }
    } else {
      countedMap[i] = false;
    }
    i++;
  }

  const lastPair = arr[0] + arr[arr.length - 1];
  if (lastPair % 2 === 0 && !countedMap[arr.length - 2] && !countedMap[0]) {
    count++;
  }

  return count;
}

console.log(solution([4, 2, 5, 8, 7, 3, 7]));
console.log(solution([14, 21, 16, 35, 22]));
console.log(solution([5, 5, 5, 5, 5, 5]));
console.log(solution([5]));
console.log(solution([5, 6]));
console.log(solution([5, 5]));
