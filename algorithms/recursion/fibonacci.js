/**
 * Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

let count = 0;
const recursive = (n) => {
    count++;
    if(n < 2) {
        return n;
    } else {
        return recursive(n-1) + recursive(n - 2);
    }

}

console.log("Recursive - Fibonacci", recursive(10));
console.log("count", count);

let cacheCount = 0;
const recursiveWithCache = () => {
    const cache = {};
    return function fib(n) {
      cacheCount++;
      if (n in cache) {
        return cache[n];
      } else {
        if (n < 2) {
            return n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        }
      }
    };
};

const recursiveCache = recursiveWithCache();

console.log("Recursive - Fibonacci", recursiveCache(10));
console.log("cacheCount", cacheCount);
