// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

/**
 * A property of an execution context (global, function or eval)
 * In non–strict mode: Always a reference to an object
 * In strict mode can be any value
 */

// Ex1: In strict mode this is undefined
// "use strict";
// function a() {
//   console.log(this);
// }
// a();

// Ex2: In non–strict mode this is global or window(browser)
// function a() {
//   console.log(this === global);
// }
// a();

/**
 * Allow us to access properties of object
 */
// const aboutMe = {
//   name: "Hoan Nguyen",
//   job: "Coding",
//   hobbies: "Reading & Traveling",
//   do() {
//     return this.myName + " Love " + this.job;
//   },
//   favorite: function() {
//     return `${this.do()}, ${this.hobbies}`;
//   }
// };
// console.log(aboutMe.favorite());

/**
 * Allow us to share function for multiple object
 * It's work with function declaration
 */
// function whatDoYouDo() {
//   console.log(this.job);
// }
// const aboutMe = {
//   name: "Hoan Nguyen",
//   job: "Coding",
//   do: whatDoYouDo
// };
// const aboutHim = {
//   name: "Nguyen Hoan",
//   job: "Teaching",
//   do: whatDoYouDo
// };
// aboutMe.do();
// aboutHim.do();

/**
 * Fix This (inside method) refer window/global
 */
// Ex1: Will return undefined
// const aboutMe = {
//   name: "Hoan Nguyen",
//   do() {
//     function do2() {
//       return `${this.name}`;
//     }
//     return do2();
//   }
// };
// console.log(aboutMe.do());

// Ex2: Define that variable then assign this for it
// const aboutMe = {
//   name: "Hoan Nguyen",
//   do() {
//     const that = this;
//     function do2() {
//       return `${that.name}`;
//     }
//     return do2();
//   }
// };
// console.log(aboutMe.do());

// Ex3: Fix with arrow function
// const aboutMe = {
//   name: "Hoan Nguyen",
//   do() {
//     const do2 = () => {
//       return `${this.name}`;
//     };
//     return do2();
//   }
// };
// console.log(aboutMe.do());

// Ex4: Fix with bind
const aboutMe = {
  name: "Hoan Nguyen",
  do() {
    function do2() {
      return `${this.name}`;
    }
    return do2.bind(this);
  }
};
console.log(aboutMe.do()());
