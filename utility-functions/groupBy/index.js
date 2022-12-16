/**
 * Array => Object with chosen key
 * Format groupBy(arr, key)
[
  { name: "Cary", age: 31 },
  { name: "Hoan", age: 32 },
  { name: "Nguyen", age: 32 },
]
=>
{
  '31': [
    { name: "Cary", age: 31 },
  ],
  '32': [
    { name: "Nguyen", age: 32 },  
    { name: "Hoan", age: 32 },
  ]
}
 */

const groupBy = (arr, key) => {
  return arr.reduce((acc, cur) => {
    if (acc[cur[key]] === undefined) {
      acc[cur[key]] = [];
    }
    acc[cur[key]].push(cur);
    return acc;
  }, {});
};

console.log(
  groupBy(
    [
      { name: "Cary", age: 31 },
      { name: "Hoan", age: 32 },
      { name: "Nguyen", age: 32 },
    ],
    "age"
  )
);
