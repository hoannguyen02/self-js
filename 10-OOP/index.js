// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class

/**
 * Object-oriented programming (OOP) is a programming language model that organizes software design around data, or objects, rather than functions and logic.
 * An object can be defined as a data field that has unique attributes and behavior.
 */

/**
 * Encapsulation
 * The implementation and state of each object are privately held inside a defined boundary, or class.
 * Other objects do not have access to this class or the authority to make changes but are only able to call a list of public functions, or methods.
 * This characteristic of data hiding provides greater program security and avoids unintended data corruption.
 * Abstraction- Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code. This concept helps developers make changes and additions over time more easily.
 * Inheritance- Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy. This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.
 * Polymorphism- Objects are allowed to take on more than one form depending on the context. The program will determine which meaning or usage is necessary for each execution of that object, cutting down on the need to duplicate code.
 */

/**
 * Abstraction
 * Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code.
 * This concept helps developers make changes and additions over time more easily.
 * Inheritance- Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy. This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.
 * Polymorphism- Objects are allowed to take on more than one form depending on the context. The program will determine which meaning or usage is necessary for each execution of that object, cutting down on the need to duplicate code.
 */

/**
 * Inheritance
 * Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy.
 * This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.
 * Polymorphism- Objects are allowed to take on more than one form depending on the context. The program will determine which meaning or usage is necessary for each execution of that object, cutting down on the need to duplicate code.
 */

/**
 * Polymorphism
 * Objects are allowed to take on more than one form depending on the context.
 * The program will determine which meaning or usage is necessary for each execution of that object, cutting down on the need to duplicate code.
 */

// class Polygon {
//   constructor(height, width) {
//     this.name = "Polygon";
//     this.height = height;
//     this.width = width;
//   }
// }

// class Square extends Polygon {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//     this.name = "Square";
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set sideLength(newLength) {
//     this.height = newLength;
//     this.width = newLength;
//   }
// }

// var square = new Square(2);
// console.log("Square Class", square);
// console.log("Area", square.area);
