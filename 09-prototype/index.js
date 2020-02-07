// https://developer.mozilla.org/en-US/docs/Glossary/Prototype

/**
 * All functions have a special property named prototype
 * Only functions have prototype property
 */
// Open console of browser then execute for more detail
// function aboutMe() {}
// console.log(aboutMe.prototype);
// aboutMe.prototype.firstName = "Hoan";
// aboutMe.prototype.lastName = "Nguyen";
// console.log(aboutMe.prototype);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
/**
 * Each object has a private property which holds a link to another object called its prototype
 * A prototype is a model that displays the appearance and behavior of an application/product early in the development lifecycle.
 * End of the prototype chain is null
 * null has no prototype
 */

/**
 * Inheriting properties
 */
// Create object based on function, then add more prototype
// function person() {
//   (this.firstName = "Hoan"), (this.lastName = "Nguyen");
// }
// const aboutMe = new person();
// person.prototype.yob = "1990";
// console.log(
//   `${aboutMe.firstName} ${aboutMe.lastName} was born in ${aboutMe.yob}`
// );

/**
 * Inheriting methods
 */

// function person(firstName, lastName, job) {
//   (this.firstName = firstName), (this.lastName = lastName), (this.job = job);
// }
// const aboutMe = new person("Hoan", "Nguyen", "Coding");
// aboutMe.do = function() {
//   return this.job;
// };
// console.log(`${aboutMe.firstName} ${aboutMe.lastName} love ${aboutMe.job}`);
// const myColleague = Object.create(aboutMe);
// myColleague.firstName = "Thanh";
// myColleague.lastName = "Nguyen";
// myColleague.job = "Dancing";
// console.log(
//   `${myColleague.firstName} ${myColleague.lastName} love ${myColleague.job}`
// );
