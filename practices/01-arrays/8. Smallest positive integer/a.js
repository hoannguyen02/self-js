const solution = (arr) => {
  const seenNums = {};
  let smallLeastNum = 1;

  const findSmallLeastNum = () => {
    smallLeastNum++;
    while (smallLeastNum in seenNums) {
      smallLeastNum++;
    }
    return smallLeastNum;
  };

  for (let a of arr) {
    if (a === smallLeastNum) {
      smallLeastNum = findSmallLeastNum();
    } else {
      seenNums[a] = a;
    }
  }

  return smallLeastNum;
};

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
