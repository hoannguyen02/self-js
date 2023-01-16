// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in

function frequencySort(nums) {
  if (nums.length === 1) return nums;
  const cache = {};
  for (const num of nums) {
    if (cache[num] !== undefined) {
      cache[num] += 1;
    } else {
      cache[num] = 1;
    }
  }

  const newNums = Object.keys(cache)
    .map((key) => ({ key, value: cache[key] }))
    .sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value === b.value) {
        if (parseInt(a.key) >= parseInt(b.key)) {
          return -1;
        }
        return 1;
      }

      return -1;
    });
  const results = newNums.reduce((acc, cur) => {
    const values = [];
    for (let i = 0; i < cur.value; i++) {
      values.push(parseInt(cur.key));
    }

    return [...acc, ...values];
  }, []);

  return results;
}

console.log(frequencySort([2, 3, 1, 3, 2]));
