const solution = (strs) => {
  if (strs.length <= 1) return [strs];

  const cache = {};
  for (const s of strs) {
    const sortedS = s.split("").sort().join("");
    if (cache[sortedS] !== undefined) {
      cache[sortedS].push(s);
    } else {
      cache[sortedS] = [s];
    }
  }
  // console.log('cache', cache);
  const results = Object.keys(cache)
    .map((key) => ({ key, values: cache[key] }))
    .sort((a, b) => a.values.length - b.values.length)
    .map((s) => s.values);
  return results;
};

console.log(solution([""]));
console.log(solution(["a"]));
console.log(solution(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(solution(["age", "tan", "ega", "nta", "bac"]));
