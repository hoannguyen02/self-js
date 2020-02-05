// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

/**
 * Basically call & apply is execute function
 * Apply receive arguments with array
 */
// Ex1
// function learnCall() {
//   console.log("Learn Call");
// }
// learnCall();
// learnCall.call();
// learnCall.apply();

// Ex2
// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3]));

// Ex3
// function findMax(arr) {
//   return Math.max.apply(this, arr);
// }
// console.log(findMax([1, 2, 3]));

// Ex4
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum.call(this, 1, 2));

// The call() method calls a function with a given this value and arguments provided individually.
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "Food";
// }
// function Vegetable(name, price) {
//   Product.call(this, name, price);
//   this.category = "Vegetable";
// }
// console.log(new Food("cheese", 5));
// console.log(new Vegetable("pizza", 100));
