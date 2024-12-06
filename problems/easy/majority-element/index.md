Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Boyer-Moore Voting Algorithm**

```tsx
function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}

```

Time Complexity: O(n), where n is the length of the nums array. This is because we need to loop through all the elements in the array.
Space Complexity: O(1), as we only need a constant amount of space to store the count and candidate variables.

**Solution 2: Sorting**

```tsx
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

```

Time Complexity: O(n log n), where n is the length of the nums array. The sorting operation takes O(n log n) time.
Space Complexity: O(log n), this comes from the space required to hold the recursion stack in the worst case scenario when a space sort is used.