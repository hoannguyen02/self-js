/**
 * Filter => Return new array(all items with true condition)
 * New array length is equal or less than original one
 * Format arr.filter((cur, index) => { ... })
 * Example [1, 2, 3] => [3]
 */

const myFilter = function (fn) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (fn(this[index], index)) { // true condition
      result.push(this[index]);
    }
  }
  return result;
};

Array.prototype.myFilter = myFilter;

console.log([1, 2, 3].myFilter((item) => item > 2));
