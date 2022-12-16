// Input [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explains: formula maxArea = height * width = min(a, b) * b - a = 7 * 7(8 - 1) = 49

const mostWaterContainer = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;
  while (p1 < p2) {
    // console.log({p1, p2, maxArea})
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    // console.log({height, width, area})
    maxArea = Math.max(area, maxArea);
    // console.log({maxArea})
    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

console.log(
  "mostWaterContainer",
  mostWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])
);
