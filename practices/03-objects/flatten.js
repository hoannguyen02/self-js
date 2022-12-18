/**
 * Flatten object
 * Input: 
// const input = {
//   Company: "Coligomed",
//   Address: "America",
//   contact: "+91 - 999999999",
//   lang: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//     Other: {
            A: 1
        }
//   },
// };

// const output = {
//   Company: "Coligomed",
//   Address: "America",
//   contact: "+91 - 999999999",
//   lang_HTML: "GFG",
//   lang_CSS: "GFG",
//   lang_Javascript: "GFG",
//   lang_Other_A: 1,
// };
 */

const input = {
  Company: "Coligomed",
  Address: "America",
  contact: "+91 - 999999999",
  lang: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
    Other: {
            A: 1
        }
  },
};

const flattenObj = (obj) => {
    let result = {};
    for (const i in obj) {
      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
        const children = flattenObj(obj[i]);
        for(const j in children) {
            result[i + '_' + j] = children[j]
        }
      } else {
        result[i] = obj[i]
      }
    }

    return result;
}

console.log(flattenObj(input));