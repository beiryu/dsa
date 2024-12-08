You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Solution 1: Dynamic Programming**

```tsx
function climbStairs(n: number): number {
  let dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

The time complexity of this solution is O(n) because we are making one iteration up to `n`. The space complexity is also O(n) because we are using an array of size `n + 1` to hold the solutions to subproblems.

**Solution 2: Fibonacci Number**

```tsx
function climbStairs(n: number): number {
  if (n == 1) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}
```

This solution is based on the fact that the number of ways to reach the `n`th step is the sum of the number of ways to reach the `(n-1)`th step and the `(n-2)`th step since we can either take 1 step from `(n-1)`th step or 2 steps from `(n-2)`th step.

The time complexity is O(n) because we are making one iteration up to `n`. The space complexity is O(1) because we are only using three variables and not an array like the previous solution.
