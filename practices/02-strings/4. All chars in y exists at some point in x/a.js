const solution = (y, x) => {
  let xPointer = 0;
  let yPointer = 0;
  let filteredX = "";
  while (yPointer < y.length && xPointer < x.length) {
    if (x[xPointer] === y[yPointer]) {
      filteredX += x[xPointer];
      yPointer++;
    }
    xPointer++;
  }
  return y.length === filteredX.length;
};

console.log(solution("AC", "ABCD"));
console.log(solution("CA", "ABCD"));
console.log(solution("BA", "ABCAD"));
