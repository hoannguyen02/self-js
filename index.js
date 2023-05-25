const solution = (arr) => {
   const positiveIntegers = new Set();
   for (const num of arr) {
     if (num > 0) {
       positiveIntegers.add(num);
     }
   }
   // Find the smallest positive integer
   let smallestNum = 1;
   while (positiveIntegers.has(smallestNum)) {
     smallestNum++;
   }

   return smallestNum;
};
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
