# Hoisted 

**Refer:** https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

**If a variable is declared and initialized before using, it will return value**
``` 
var favorite = "fr";
console.log(favorite); // fr
```
``` 
favorite = "fr";
console.log(favorite); // fr
var favorite; 
```

**If a variable is declared and initialized after using, it will return undefined**
```
console.log(favorite); // undefined
favorite = 5;
var favorite;
```
```
console.log(favorite); // undefined
var favorite;
```

**Allow us to use a function before declare (putting function declarations into memory before it executes any code segment)**

Normal way
```
hoisted();
var hoisted = () => {
  console.log("hoisted"); // TypeError: hoisted is not a function
};
```
```
var hoisted = () => {
  console.log("hoisted"); // hoisted
};
hoisted();
```

Hoisted way
```
hoisted();
function hoisted() {
  console.log("hoisted"); // hoisted
}
```
```
function hoisted() {
  console.log("hoisted"); // hoisted
}
hoisted();
```