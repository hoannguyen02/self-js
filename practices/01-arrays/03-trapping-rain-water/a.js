// Input [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
// Output: 8
// Explains: formula currentWater = min(maxLeft, maxRight) - currentHeight
/* Steps:
1. Identify pointer with less value
2. Is this pointer value greater than or equal to max on that side
    Yes: Update max on that size
    No: Get water for pointer value, add to total
3. Move pointer forward 
4. Repeat for other pointer 
*/

const trappingRainWater = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let total = 0;
  let maxLeft = 0;
  let maxRight = 0;
  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxLeft) {
        maxLeft = arr[left];
      } else {
        total += maxLeft - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= maxRight) {
        maxRight = arr[right];
      } else {
        total += maxRight - arr[right];
      }
      right--;
    }
  }

  return total;
};

console.log(
  "trappingRainWater",
  trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
);
