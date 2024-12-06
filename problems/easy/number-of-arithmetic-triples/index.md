You are given a **0-indexed**, **strictly increasing** integer array `nums` and a positive integer `diff`. A triplet `(i, j, k)` is an **arithmetic triplet** if the following conditions are met:

- `i < j < k`,
- `nums[j] - nums[i] == diff`, and
- `nums[k] - nums[j] == diff`.

Return *the number of unique **arithmetic triplets***

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Brute Force**

```tsx
function numArithmeticTriplets(nums: number[], diff: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

```

Time Complexity: O(n^3), where n is the length of the array. This is because for each element in the array, we are checking all the possible pairs in the array.
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.

**Solution 2: Using Hashmap**

```tsx
function arithmeticTriplets(nums: number[], diff: number): number {
    const map = new Map();
    let ans = 0;
    for (let i=0; i<nums.length; i++) {
      const cur = nums[i];
      if (map.has(cur-diff) && map.has(cur-diff*2)) {
        ans++;
      }
      map.set(cur, true);
    }
    return ans;
};
```

Time Complexity: O(n^2), where n is the length of the array. The outer loop runs n times and the inner loop runs i times (where i is the current index of the outer loop), giving us a total of n*(n+1)/2 iterations, which simplifies to O(n^2).
Space Complexity: O(n), as we are storing each unique number in the map.