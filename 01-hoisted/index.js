// Refer: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

/**
 * If a variable is declared and initialized before using, it will return value
 */
// Ex1
// var favorite = "fr";
// console.log(favorite);// fr
// Ex2
// favorite = "fr";
// console.log(favorite); // fr
// var favorite;

/**
 * If a variable is declared and initialized after using, it will return undefined
 */
// Ex1
// console.log(favorite); //undefined
// favorite = 5;
// var favorite;
// Ex2
// console.log(favorite); // undefined
// var favorite;

/**
 * Allow us to use a function before declare (putting function declarations into memory before it executes any code segment)
 */
// Normal way
// Ex1
// hoisted();
// var hoisted = () => {
//   console.log("hoisted");
// };
// Ex2
// var hoisted = () => {
//   console.log("hoisted"); // hoisted
// };
// hoisted();

// Hoisted way
// Ex1
// hoisted();
// function hoisted() {
//   console.log("hoisted");
// }
// Ex2
// function hoisted() {
//   console.log("hoisted");
// }
// hoisted();
