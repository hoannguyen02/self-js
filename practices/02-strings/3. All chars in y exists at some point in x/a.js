function solution(x, y) {
  let i = 0;
  let j = 0;
  let filteredX = "";
  while (i < x.length && j < y.length) {
    if (x[i] === y[j]) {
      filteredX += x[i];
      j++;
    }
    i++;
  }
  return filteredX.length === y.length;
}

console.log(solution("ABCD", "AC"));
console.log(solution("ABCD", "CA"));
console.log(solution("ABCAD", "BA"));
