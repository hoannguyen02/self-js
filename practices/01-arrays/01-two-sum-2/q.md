
Given an array of integers numbers and an integer target, return array of pair that two numbers add up to target.

Example 1:
```
Input: numbers = [2,7,11,15], target = 9
Output: [2,7]
Output: Because numbers[0] + numbers[1] == 9, we return [2, 7].
```

Example 2:
```
Input: numbers = [], target = 6
Output: []
```

Example 3:
```
Input: numbers = [1, 4, 4, 2, 3, 0, 5], target = 5
Output: [[1, 4], [2, 3], [0, 5]]
```

Constraints:
```
2 <= numbers.length <= 105
-109 <= numbers[i] <= 109
-109 <= target <= 109
Numbers Not have same number continuously such as [1, 3, 3]
```