const solution = (str) => {
  if (str.length <= 1) return str.length;

  let longest = 1;
  let i = 0;
  const seenChar = {};
  for (let j = 0; j < str.length; j++) {
    const char = str[j];
   if (seenChar[char] >= i) {
     i = seenChar[char] + 1;
   }
   const long = j - i + 1;
   longest = Math.max(longest, long);
   seenChar[char] = j;
  }
  return longest;
};

console.log(solution(""));
console.log(solution("a"));
console.log(solution("abcbdca"));
console.log(solution("abccab"));
console.log(solution("abcbdaac"));
