You are given a ** 0 - indexed ** array of integers `nums` of length`n`.You are initially positioned at`nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index`i`.In other words, if you are at`nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
  - `i + j < n`

Return * the minimum number of jumps to reach * `nums[n - 1]`.The test cases are generated such that you can reach`nums[n - 1]`.

** Example 1:**

  ```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

  ** Example 2:**

    ```
Input: nums = [2,3,0,1,4]
Output: 2
```

    ** Solution 1: Dynamic Programming **

      ```tsx
function jump(nums: number[]): number {
    let dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }
    return dp[nums.length - 1];
}

```

Time Complexity: O(n ^ 2), where n is the length of the array.This is because for each element, we are checking all the other elements in the array.
Space Complexity: O(n), the algorithm uses an array of size n to store the minimum number of jumps to reach each index.

** Solution 2: Greedy Algorithm **

  ```tsx
function jump(nums: number[]): number {
    let jumps = 0, currEnd = 0, currFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);
        if (i === currEnd) {
            jumps++;
            currEnd = currFarthest;
        }
    }
    return jumps;
}

```

Time Complexity: O(n), where n is the length of the array.This is because we are traversing the array once.
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.