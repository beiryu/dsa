Given an array of positive integers

```
nums
```

and a positive integer

```
target
```

, return

*the **minimal length** of a*

*subarray*

*whose sum is greater than or equal to*

```
target
```

. If there is no such subarray, return

```
0
```

instead.

Sure, here are two TypeScript solutions for finding the minimal length of a subarray whose sum is greater than or equal to a given target:

**Solution 1: Sliding Window**

```tsx
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

```

- Time Complexity: O(n), where n is the length of the array. This is because each element is processed at most twice, once when added to the sum and once when removed.
- Space Complexity: O(1), as the algorithm only uses a constant amount of extra space.

**Solution 2: Prefix Sum and Binary Search**

```tsx
function minSubArrayLen(target: number, nums: number[]): number {
    let n = nums.length;
    let minLength = Infinity;
    let prefixSum = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    for (let i = 1; i <= n; i++) {
        let targetSum = prefixSum[i] - target;
        let left = 0;
        let right = i;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (prefixSum[mid] <= targetSum) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (prefixSum[left - 1] <= targetSum) {
            minLength = Math.min(minLength, i - (left - 1));
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

```

- Time Complexity: O(n log n), where n is the length of the array. This is due to the binary search performed for each element.
- Space Complexity: O(n), as the algorithm uses an additional array to store prefix sums.