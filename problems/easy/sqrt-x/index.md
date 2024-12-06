Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Solution 1: Binary Search**

```tsx
function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1;
    let right = Math.floor(x / 2);
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

```

This solution uses binary search to find the square root. The time complexity is O(log n) because binary search cuts the search space in half every iteration, and the space complexity is O(1) because no additional space is being used.

**Solution 2: Newton's Method**

```tsx
function mySqrt(x: number): number {
    if (x < 2) return x;
    let x0 = x;
    let x1 = (x0 + x / x0) / 2;
    while (Math.abs(x0 - x1) >= 1) {
        x0 = x1;
        x1 = (x0 + x / x0) / 2;
    }
    return Math.floor(x1);
}

```

This solution uses Newton's method to find the square root. The time complexity is O(log n) because each iteration brings us closer to the answer, and the space complexity is O(1) because no additional space is being used.