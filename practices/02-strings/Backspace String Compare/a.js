// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
// Example
// Equals: ab#c vs ad#c, ab## vs c#d#, a##c vs #a#c
// Not equals: a#c vs b

const convertStringToArr = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  return arr;
};

const compareTwoStrings = (s, t) => {
  const sArr = convertStringToArr(s);
  const tArr = convertStringToArr(t);
  if (sArr.length !== tArr.length) {
    return false;
  } else {
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] !== tArr[i]) return false;
    }
    return true;
  }
};

console.log("compareTwoStrings", compareTwoStrings("ab#c", "ad#c"));
console.log("compareTwoStrings", compareTwoStrings("ab##", "c#d#"));
console.log("compareTwoStrings", compareTwoStrings("a#c", "b"));


const compareTwoStringsPointers = (s, t) => {
  let i = s.length - 1;
  let j = s.length - 1;
  while (i >= 0 || j >= 0) {
    if (s[i] === "#" || s[j] === "#") {
      if (s[i] === "#") {
        let moveStep = 2;
        while (moveStep > 0) {
          i--;
          moveStep--;
          if (s[i] === "#") {
            moveStep += 2;
          }
        }
      }
      if (t[j] === "#") {
        let moveStep = 2;
        while (moveStep > 0) {
          j--;
          moveStep--;
          if (t[j] === "#") {
            moveStep += 2;
          }
        }
      }
    } else {
      if (s[i] !== t[j]) {
        return false;
      } else {
        i--;
        j--;
      }
    }
  }

  return true;
};

console.log("compareTwoStringsPointers", compareTwoStringsPointers("ab#c", "ad#c"));
console.log("compareTwoStringsPointers", compareTwoStringsPointers("ab##", "c#d#"));
console.log("compareTwoStringsPointers", compareTwoStringsPointers("a#c", "b"));