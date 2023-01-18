function solution(str) {
  if(str.length <= 1) {
    return -1;
  }
  const cache = {};
  let maxDistance = -1;
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const prevSeen = cache[current];
    if (prevSeen !== undefined) {
      const distance = i - prevSeen;
      maxDistance = Math.max(distance, maxDistance);
    } else {
      cache[current] = i;
    }
  }
  return maxDistance;
}

console.log(solution(""));
console.log(solution("a"));
console.log(solution("abcbdca"));
console.log(solution("abccabb"));
console.log(solution("abcbdaac"));
