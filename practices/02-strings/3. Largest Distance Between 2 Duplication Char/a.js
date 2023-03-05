const solution = (str) => {
  if (str.length <= 1) return -1;

  let maxDistance = 0;
  const seenChar = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in seenChar) {
      const distance = i - (seenChar[char] + 1);
      maxDistance = Math.max(maxDistance, distance);
    } else {
      seenChar[char] = i;
    }
  }
  return maxDistance;
};

console.log(solution("abcbdca"));
console.log(solution("abccabb"));
console.log(solution("abcbdaac"));
console.log(solution(""));
console.log(solution("a"));
