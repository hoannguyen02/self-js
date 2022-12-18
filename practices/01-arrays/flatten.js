/**
 * Flattening nested arrays to single array
 * Input: [[],1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]];
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const input = [[],1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]];
const flattenArr = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if(Array.isArray(item)) {
        results = [...results, ...flattenArr(item)]
    } else {
        results.push(item);
    }
  }
  return results;
};

console.log(flattenArr(input))