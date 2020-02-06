/**
 * Bind return new function for us, this way help us fix this reference window object in #03 chapter
 * Bind also use  to reduce functions of more than one argument to functions of one argument with the help of lambda calculus(Currying)
 */

// Ex1
// function multiply(a, b) {
//   return a * b;
// }
// const multiplyByTen = multiply.bind(this, 10);
// console.log(multiplyByTen(10));

// Ex2: Arrow function
// multiply = (n, m) => n * m;
// console.log(multiply(3, 4) === 12);
// const curryMultiply = n => m => multiply(n, m);
// const triple = curryMultiply(3);
// console.log(triple(4) === 12);
