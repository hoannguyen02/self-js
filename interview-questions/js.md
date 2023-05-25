1. What are types in javascript?
* Primitive(number, string, boolean-true/false/0/1, null, undefined, symbol)
* Non-Primitive is Object(Array, Function)

2. What is difference between `null`, `undefined`, `undeclared`?

* Undeclared variable is created when we assign a value that not declare yet.
* Undefined is a variable that already declared but not assign any value yet.
* Null is a variable that already declared but assign null value to that variable.

3. What is a closure in javascript? why we need it?

A closure give an access to an outer function's scope from an inner function. It is created every time a function is created at function creation time.

Closure helps us to write a javascript module pattern.

4. What is difference between `map` and `foreach`?

`map` iterates through the elements in array and return new array, but `foreach` not return any value.

5. What is difference between host objects and native subjects?

Native objects are objects provided by Javascript language such as String, Math, etc
Host objects are objects provided by the runtime environment such as window.

6. What is difference between `call` and `apply` ?

Both are excuse function, `apply` receive arguments as an array, however `call` receive arguments individually.

7. Have you using `bind`?

Bind return new function for us, help us reduce function with more than one argument to a function with one argument.

8. What promises are and why they are useful?'

Promises return a promise to supply value at some point in the future instead immediately value.

9. What is an example of an immutable object in Javascript?

Buit-in types(numbers, strings) or objects(math, date) are immutable.
Custom objects are generally mutable, we can configure it by option `writable` and `configurable`
For example:

```
let myObject = {}
Object.defineProperty(myObject, 'number', {
  value: 1,
  writable: false,
  configurable: false,
});
```

10. What is difference between synchronous and asynchronous functions?

Synchronous functions are blocking while asynchronous are not.
With asynchronous functions, execution continue to next line immediately(not blocking main thread) like synchronous functions once the call stack is empty the callback of asynchronous functions from the callback queue will be invoked(with the help of event loop).

12. What is event loop?

The event loop is a single-threaded loop that monitors the call stacks and checks if there is any work to be done in the task queue. Once the call stack is empty, if there is any callback functions in the queue will be pushed onto the call stack to be executed.

13. How does react works?

React basically maintains a tree, a tree help re-construct DOM and push only diff changes to the DOM.

14. What is Virtual DOM?

The Virtual DOM is a concept implemented by libraries in JS on top of browser APIs.

15. What is Shadow DOM?

The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.



