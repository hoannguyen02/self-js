# Javascript Types

1. Primitive
   1. number - 1
   2. string - ''
   3. boolean - true/false/0/1
   4. null - null
   5. undefined - undefined
   6. symbol - new Symbol('Unique')
2. Non-Primitive
   1. Object - {}
      1. Array
      2. Function


# Pass by value - Simply copy the value of primitive type to somewhere else(new address) in memory
var a = 5;
var b = a;
b++;
console.log(a)
console.log(b)

# Pass by references - Simply assign/modify it within that address in memory
let obj1 = { name : "A"};
let obj2 = obj1;
obj2.name = "B"
console.log(obj1);
console.log(obj2);

let a = [1, 2, 3]
let b = a;
b.push('test')
console.log(a)
console.log(b)

// Fixed by clone for 1 level only - shallow  clone (not nested so many level, each object has each address in memory)
let obj1 = { name : "A"};
let obj2 = {...obj1} or let obj2 = Object.assign({}, obj1)
obj2.name = "B"
console.log(obj1);
console.log(obj2);

let deepClone = JSON.parse(JSON.stringify(obj1)) // Might affect performance

let a = [1, 2, 3]
let b = [...a, 'test']  or let b = a.concat('test')
console.log(a)
console.log(b)


# Type coercion => convert it to the same type

1 == '1' => true(js assuming '1' is 1)