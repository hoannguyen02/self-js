/**
 * Move each item in array to the right k position
 * Ie, [3, 8, 9, 7, 6]; k = 3 => [ 9, 7, 6, 3, 8 ]
 */
function solution(a, k) {
  let newA = [];
  let i = k;
  while (i > 0) {
    newA = [...newA, ...a];
    i--;
  }
  const results = [];
  for (let i = 0; i < a.length; i++) {
    results.push(newA[i + k - 1]);
  }
  console.log("result:", results);
}

let a = [3, 8, 9, 7, 6];
let k = 3;

// let a = [3, 8, 9, 7, 6, 3, 8, 9, 7, 6];
// let k = 1;
solution(a, k);
