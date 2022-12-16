// Function scope
// We cannot access variable inside a function, This will throw `ReferenceError: fScope is not defined`
// function a() {
//   var fScope = "Hoan Nguyen";
// }
// console.log(fScope);

// Block scope: Start with `{` end with `}` like if, for
// We can access inside block`{}` if we use var
// Ex1
// if (1 > 0) {
//   var fScope = "Hoan Nguyen";
// }
// console.log(fScope);
// Ex2
// for (var i = 0; i < 2; i++) {
//   console.log(i);
// }
// console.log(i);

// We cannot access inside block`{}` if we use let/const, This will throw `ReferenceError: fScope is not defined`
// Ex1
// if (1 > 0) {
//   let fScope = "Hoan Nguyen";
// }
// console.log(fScope);

// Ex2
// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
// console.log(i);

// Ex3
// for (var index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index * 20);
//   }, 10);
// }

// Ex4
// for (let index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index * 20);
//   }, 10);
// }
