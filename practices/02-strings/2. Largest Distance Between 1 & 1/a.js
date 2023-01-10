function solution(str) {
  let i = 0;
  let j = 0;
  let max = -1;
  while (j < str.length) {
    if (str[j] === "1") {
      const distance = j - i;
      max = Math.max(max, distance);
      i = j;
    }
    j++;
  }

  return max;
}

console.log(solution("11"));
console.log(solution("101"));
console.log(solution("1001"));
console.log(solution("100001"));
console.log(solution("10010000101"));
console.log(solution("10000100100100000101"));