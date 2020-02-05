// Refer: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

/**
 * If a variable is declared and initialized before using it will return value
 */

// Ex1
// favorite = "favorite";
// console.log(favorite);

/**
 * If a variable is declared the value will be undefined, even initialized after using it
 */
// Ex1
// console.log(favorite);
// favorite = 5;
// var favorite;

// Ex2
// console.log(favorite);
// var favorite;

/**
 * Putting function declarations into memory before it executes any code segment
 * It's mean allows us to use a function before declare
 */

// Ex1
// Normal way like this will throw error: TypeError: hoisted is not a function
// hoisted();
// var hoisted = () => {
//   console.log("hoisted");
// };

// Ex1
// Hoisted way
// hoisted();
// function hoisted() {
//   console.log("hoisted");
// }
