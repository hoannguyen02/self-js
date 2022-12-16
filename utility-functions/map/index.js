/**
 * Return new array with the same length
 * Format arr.map((cur, index) => { ... })
 * [1, 2, 3] multiple by 2 =>  [2, 4, 6]
 */
const myMap = function (fn) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(fn(this[index], index));
  }
  return result;
};

Array.prototype.myMap = myMap;

console.log([1, 2, 3].myMap((item) => item * 2));
