// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

/**
 * A closure gives you access to an outer function’s scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 */

// Ex1: Bellow displayName() is a closure and hosted also
// function init() {
//   var name = "Hoan Nguyen";
//   displayName();
//   function displayName() {
//     console.log(name);
//   }
// }
// init();

// Ex2
// const callMeBaby = () => {
//   setTimeout(() => {
//     console.log(myName);
//   }, 1000);
//   const myName = "Hoan Nguyen";
// };
// callMeBaby();

// Ex3: Common mistake with loop
// Wrong way
// function loop() {
//   const array = new Array(1000).fill("@");
//   for (var index = 0; index < array.length; index++) {
//     setTimeout(() => {
//       console.log(array[index]);
//     }, 1000);
//   }
// }
// loop();
// Right and better way
// function loop() {
//   const array = new Array(1000).fill("@");
//   return function() {
//     for (let index = 0; index < array.length; index++) {
//       setTimeout(() => {
//         console.log(array[index]);
//       }, 1000);
//     }
//   };
// }
// const rightLoop = loop();
// rightLoop();

/**
 * Emulating private methods with closures
 */

// Ex1: Using with IIFE
// const counter = (function() {
//   let counter = 0;
//   const changeBy = val => {
//     counter += val;
//   };

//   return {
//     increment: () => {
//       changeBy(1);
//     },
//     decrement: () => {
//       changeBy(-1);
//     },
//     value: () => counter
//   };
// })();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.value());
