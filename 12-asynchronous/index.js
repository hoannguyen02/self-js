// Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

/**
 * A Promise is a proxy for a value not necessarily known when the promise is created.
 * It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
 * This lets asynchronous methods return values like synchronous methods: Return a promise to supply the value at some point in the future instead immediately value
 */

/**
 * Ex1
 * Basic promise
 */
// const resolve = new Promise((resolve, _) => {
//   resolve(1);
// });
// resolve.then(console.log);

/**
 * Ex2
 * Catch:
 * The catch() method returns a Promise and deals with rejected cases only.
 * Always catch all method above it
 * Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 */
// const resolve = new Promise((_, reject) => {
//   reject(1);
// });
// resolve
//   .then(() => {
//     throw Error;
//   })
//   .catch(err => console.log("err", err))
//   .then(result => console.log(`${result} after catch won't works`));

/**
 * Ex3:
 * Promises on browser
 */
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments"
// ];
// Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
//   console.log
// );
// Promise.race(urls.map(url => fetch(url).then(res => res.json()))).then(
//   console.log
// );

/**
 * Async: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * Async make our code Look quite sync and cleaner
 */

// Ex1: Re-write ex above with async
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments"
// ];
// const fetchData = async function() {
//   try {
//     const [todos, posts, comments] = await Promise.all(
//       urls.map(url => fetch(url).then(res => res.json()))
//     );
//     console.log("todos", todos);
//     console.log("posts", posts);
//     console.log("comments", comments);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchData();

// Ex2: Re-write ex above with for await of
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments"
// ];
// const fetchData = async function() {
//   try {
//     const requestAsync = urls.map(url => fetch(url));
//     for await (let request of requestAsync) {
//       const data = await request.json();
//       console.log(data);
//     }
//   } catch (error) {
//     console.log("For await of ", error);
//   }
// };
// fetchData();

// Ex2: Sequence
// async function sequentialStart() {
//   console.log("==SEQUENTIAL START==");

//   // 1. Execution gets here almost instantly
//   const slow = await resolveAfter2Seconds();
//   console.log(slow); // 2. this runs 2 seconds after 1.

//   const fast = await resolveAfter1Second();
//   console.log(fast); // 3. this runs 3 seconds after 1.
// }

// sequentialStart();

// function resolveAfter2Seconds() {
//   console.log("starting slow promise");
//   return new Promise(resolve => {
//     setTimeout(function() {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// }

// function resolveAfter1Second() {
//   console.log("starting fast promise");
//   return new Promise(resolve => {
//     setTimeout(function() {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// }
