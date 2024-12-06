Given an array of positive integers `arr`, return *the sum of all possible **odd-length subarrays** of* `arr`.

A **subarray** is a contiguous subsequence of the array.

Sure, here are two TypeScript solutions for finding the sum of all possible odd-length subarrays of an array:

**Solution 1: Brute Force**

```tsx
function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
        }
    }
    return sum;
}

```

Time Complexity: O(n^3), where n is the length of the array. This is because we have three nested loops that traverse the array.
Space Complexity: O(1), as we are using a constant amount of space to store the sum.

**Solution 2: Optimized Solution**

```tsx
function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0, n = arr.length;
    for (let i = 0; i < n; i++) {
        let contribution = Math.floor(((i + 1) * (n - i) + 1) / 2);
        sum += contribution * arr[i];
    }
    return sum;
}

```

Time Complexity: O(n), where n is the length of the array. This is because we are traversing the array once.
Space Complexity: O(1), as we are using a constant amount of space to store the sum.