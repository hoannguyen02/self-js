/**
 * Flattening nested arrays to single array
 * Input: [[],1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]];
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const input = [[], 1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]];
const flattenArr = (array) => {
  let results = [];
  for (const a of array) {
    if (Array.isArray(a)) {
      results = [...results, ...flattenArr(a)];
    } else {
      results.push(a);
    }
  }
  return results;
};

console.log(flattenArr(input));
