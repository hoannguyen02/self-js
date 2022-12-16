/**
 * 5! = 5*4*3*2*1
 */
const normal = (number) => {
   let result = 1;
   for(let i = number; i > 1; i--) {
      result *= i;
   }

   return result;
}
console.log("Normal factorial", normal(5));

const recursive = (number) => {
   if(number == 2) {
      return 2;
   }
   return number * recursive(number - 1);
}

console.log("Recursive factorial", recursive(5));
