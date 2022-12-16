/**
 * 
 * Reduce can do a lot of things such as map, groupBy, filter, sum, min, max, etc
 * Format arr.reduce((acc, cur, index) => { ... })
 * [1, 2, 3] multiple by 2 then sum => 2 + 4 + 6 = 12
 */
const myReduce = function (fn, initialValue) {
  let acc = null;
  let startIdx = 0;
  if (initialValue === null || initialValue === undefined) {
    acc = this[0];
    startIdx = 1;
  } else {
    acc = initialValue;
  }

  for (let i = startIdx; i < this.length; i++) {
    acc = fn(acc, this[i], i);
  }

  return acc;
};

Array.prototype.myReduce = myReduce;
console.log(
  [1, 2, 3].myReduce((acc, cur) => {
    return acc + cur * 2;
  }, 0)
);
