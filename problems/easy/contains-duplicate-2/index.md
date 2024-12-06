Given an integer array `nums` and an integer `k`, return `true` *if there are two **distinct indices*** `i` *and* `j` *in the array such that* `nums[i] == nums[j]` *and* `abs(i - j) <= k`.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Brute Force**

```tsx
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

```

Time Complexity: O(n*k), where n is the length of the array and k is the maximum distance between equal elements. This is because for each element in the array, we are checking the next k elements.
Space Complexity: O(1), since we are not using any additional space.

**Solution 2: Using a Set**

```tsx
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
}

```

Time Complexity: O(n), where n is the length of the array. This is because we are traversing the array once.
Space Complexity: O(min(n, k)), since in the worst case, the set can hold up to k distinct elements.