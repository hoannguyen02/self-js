const solution = (numbers, target) => {
  const seenNum = {};
  const numPairsAddUpToTarget = [];
  for (const num of numbers) {
    const numToFind = target - num;
    seenNum[num] = num;
    if (numToFind in seenNum) numPairsAddUpToTarget.push([numToFind, num]);
  }
  return numPairsAddUpToTarget;
};

console.log(solution([], 9));
console.log(solution([2, 7, 11, 15], 9));
console.log(solution([1, 4, 2, 1, 3, 0, 5], 5));
