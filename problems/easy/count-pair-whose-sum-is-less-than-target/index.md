Given a

**0-indexed**

integer array

```
nums
```

of length

```
n
```

and an integer

```
target
```

, return

*the number of pairs*

```
(i, j)
```

*where*

```
0 <= i < j < n
```

*and*

```
nums[i] + nums[j] < target
```

.

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Brute Force**

```tsx
function numPairs(nums: number[], target: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }
    return count;
}

```

Time Complexity: O(n^2), where n is the length of the array. This is because for each element, we are checking all the other elements in the array.
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.

**Solution 2: Sorting and Two Pointers**

```tsx
function numPairs(nums: number[], target: number): number {
    let count = 0;
    nums.sort((a, b) => a - b);
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] < target) {
            count += j - i;
            i++;
        } else {
            j--;
        }
    }
    return count;
}

```

Time Complexity: O(n log n), where n is the length of the array. The sort operation takes O(n log n) time and we are doing a single pass through the array which takes O(n) time. Therefore, the overall time complexity is O(n log n) + O(n) = O(n log n).
Space Complexity: O(1), the algorithm only uses a constant amount of extra space.