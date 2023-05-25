/**
 * Flattening nested arrays to single array
 * Input: [[],1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]];
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const solution = (arr) => {
  let results = [];
  for (const a of arr) {
    if (Array.isArray(a)) {
      results = [...results, ...solution(a)];
    } else {
      results.push(a);
    }
  }
  return results;
};
console.log(solution([[], 1, 2, [3, 4, [5, 6, [7, 8, [9, 10], []]]]]));
