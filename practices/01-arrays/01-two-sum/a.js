// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSumCache = (arr, target) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const numToFind = target - arr[i];
    if (numToFind in cache) {
      return [cache[numToFind], i];
    } else {
      cache[arr[i]] = i;
    }
  }
  return null;
};

console.log(
  "Expected indices: [2,7,11,15], 9 ",
  twoSumCache([2, 7, 11, 15], 9)
);
console.log("Expected indices: [3, 2, 4], 6 ", twoSumCache([3, 2, 4], 6));
console.log("Expected indices: [3, 3], 6 ", twoSumCache([3, 3], 6));
