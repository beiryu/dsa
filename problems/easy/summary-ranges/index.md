You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return \*the **smallest sorted** list of ranges that **cover all the numbers in the array exactly\***. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

**Solution 1: One Pass**

```tsx
function summaryRanges(nums: number[]): string[] {
  const ranges = [];
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    ranges.push(start + (start === nums[i] ? "" : "->" + nums[i]));
  }
  return ranges;
}
```

This solution uses one pass to iterate through the array. When the current number and the next number form a consecutive sequence, we keep moving forward. When they don't, we add the found range into the result.

- Time Complexity: O(n) where n is the number of elements in the array. This is because we are iterating through the array once.
- Space Complexity: O(1) except the space needed for the output. We only use a few variables for the current range.

**Solution 2: Using Two Pointers**

```tsx
function summaryRanges(nums: number[]): string[] {
  const ranges = [];
  let i = 0;
  while (i < nums.length) {
    const start = nums[i];
    let j = i + 1;
    while (j < nums.length && nums[j] === nums[j - 1] + 1) {
      j++;
    }
    ranges.push(start + (j - 1 === i ? "" : "->" + nums[j - 1]));
    i = j;
  }
  return ranges;
}
```

This solution uses two pointers to find consecutive sequences. The two pointers represent the start and end of the current range. When the end of the range is found, we add the range to the result.

- Time Complexity: O(n) where n is the number of elements in the array. This is because we are iterating through the array once.
- Space Complexity: O(1) except the space needed for the output. We only use a few variables for the current range.
