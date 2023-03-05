// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in

function frequencySort(nums) {
  if (nums.length === 1) return nums;
  const frequencyNumMap = {};
  for (const num of nums) {
    if (num in frequencyNumMap) {
      frequencyNumMap[num].push(num);
    } else {
      frequencyNumMap[num] = [num];
    }
  }

  const newNums = Object.keys(frequencyNumMap)
    .map((key) => ({ key, values: frequencyNumMap[key] }))
    .sort((a, b) => {
      if (a.values.length > b.values.length) {
        return 1;
      }
      if (a.values.length === b.values.length) {
        if (parseInt(a.key) >= parseInt(b.key)) {
          return -1;
        }
        return 1;
      }

      return -1;
    })
    .reduce((acc, cur) => [...acc, ...cur.values], []);
  return newNums;
}

console.log(frequencySort([2, 3, 1, 3, 2]));
