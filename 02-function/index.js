// Refer: https://developer.mozilla.org/en-US/docs/Glossary/Function

/**
 * Function declaration or function expression
 * Function declaration can use hoisted
 */
// // Ex1
// function func() {}
// const func = () => {};

/**
 * An anonymous function:
 * It is a function without a function name
 * Only function expressions can be anonymous, function declarations must have a name
 */

// Ex1
// (function() {});
// () => {};

/**
 * A recursive function:
 * It is a function that calls itself
 */

// Ex1
// function loop() {
//   return loop();
// }

/**
 * Function with arguments
 * When a function is called, arguments are passed to the function as input
 * and the function can optionally return a value.
 * A function in JavaScript is also an object.(Must update an example later on)
 */
// Ex1
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());

// Ex2
// const sum = (...args) => {
//   console.log(args);
// };
// console.log(sum(1, 2));
// console.log(sum({ count: 1 }));

/**
 * An Immediately Invoked Function Expressions (IIFE)
 * It is a function that is called directly after the function is loaded into the browser’s compiler
 */
// Ex1
// (function() {})();

// Ex2
// const FE = (function() {
//   function test() {
//     console.log("IIFE");
//   }
//   return {
//     test: test
//   };
// })();
// FE.test();
