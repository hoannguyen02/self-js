/**
 * Convert any type data(except null or undefined)) to single string
 * Format stringify(data)
 */

const stringify = (obj) => {
  // Strings
  if (typeof obj === "string") return `"${obj}"`;
  // Boolean, Number
  if (typeof obj === "number" || typeof obj === "boolean") return `${obj}`;
  // Array
  if (Array.isArray(obj)) {
    if (!obj.length) return `[]`;
    let result = `"[`;
    obj.forEach((item) => {
      result += `${stringify(item)},`;
    });

    return result.substring(0, result.length - 1) + `]"`;
  }
  // Object
  let result = `"{`;
  Object.keys(obj).forEach((key) => {
    result += `"${key}":${stringify(obj[key])},`;
  });

  return result.substring(0, result.length - 1) + `}"`;
};

console.log(stringify(null));
