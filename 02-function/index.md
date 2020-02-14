# Function

**Refer:** https://developer.mozilla.org/en-US/docs/Glossary/Function

**Two types of function: Function declaration(hoisted) or function expression**
> ```
> function func() {}
> const func = () => {};
> ```
**An anonymous function: Function without a function name (func expression only)**
> ```
> (function() {});
> () => {};
> ```
**A recursive function: A function that calls itself**
> ```
> function loop() {
>   return loop();
> }
> ```
**Function with arguments: When a function is called, arguments are passed to the function as input**
> ```
> const sum = (a, b) => {
>   return a + b;
> };
> console.log(sum(1, 2)); // 3
> console.log(sum(1)); // NaN
> console.log(sum()); // NaN
> ```


**Immediately Invoked Function Expressions (IIFE): It is a function that is called directly after the function is loaded into the browser’s compiler**
> ```
> (function() {})();
> ```

> ```
> const FE = (function() {
>   function test() {
>       console.log("IIFE");
>   }
>   return {
>       test: test
>   };
> })();
> FE.test();