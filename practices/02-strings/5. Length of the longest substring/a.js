function solution(str) {
  if (str.length <= 1) {
    return str.length;
  }
  let i = 0;
  let longest = 0;
  const cache = {};
  for (let j = 0; j < str.length; j++) {
    const current = str[j];
    const prevSeen = cache[current];
    if (prevSeen >= i) {
      i = prevSeen + 1;
    }
    cache[current] = j;
    const long = j - i + 1;
    longest = Math.max(long, longest);
  }
  return longest;
}

console.log(solution(""));
console.log(solution("a"));
console.log(solution("abcbdca"));
console.log(solution("abccab"));
console.log(solution("abcbdaac"));
