Given an array of integers `nums`, return *the number of **good pairs***.

A pair `(i, j)` is called *good* if `nums[i] == nums[j]` and `i` < `j`.

**Solution 1: Brute-Force Method**

```tsx
function numIdenticalPairs(nums: number[]): number {
    let goodPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                goodPairs++;
            }
        }
    }
    return goodPairs;
}

```

Time Complexity: O(n^2), where n is the length of the array. We use two nested loops to compare each pair of elements.
Space Complexity: O(1), as we are using a constant amount of space.

**Solution 2: Using a HashMap**

```tsx
function numIdenticalPairs(nums: number[]): number {
    let goodPairs = 0;
    let count = new Map<number, number>();
    for (let num of nums) {
        if (count.has(num)) {
            let existingPairs = count.get(num)!;
            goodPairs += existingPairs;
            count.set(num, existingPairs + 1);
        } else {
            count.set(num, 1);
        }
    }
    return goodPairs;
}

```

Time Complexity: O(n), where n is the length of the array. We traverse the array once and perform constant time operations for each element.
Space Complexity: O(n), as in the worst case scenario, we may need to store each unique number in the map.