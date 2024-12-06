Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

Sure, here are two TypeScript solutions for finding the intersection of two arrays:

**Solution 1: Using Hash Map**

```tsx
function intersect(nums1: number[], nums2: number[]): number[] {
    let map = new Map<number, number>();
    let result: number[] = [];

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (map.has(num) && map.get(num)! > 0) {
            result.push(num);
            map.set(num, map.get(num)! - 1);
        }
    }

    return result;
}

```

Time Complexity: O(n + m), where n and m are the lengths of nums1 and nums2, respectively. This is because we first iterate through nums1 to create the map, and then through nums2 to fill the result array.
Space Complexity: O(n), where n is the length of nums1. This is because in the worst case, every number from nums1 is stored in the map.

**Solution 2: Sorting and Two Pointers**

```tsx
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let result: number[] = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

```

Time Complexity: O(n log n + m log m), where n and m are the lengths of nums1 and nums2, respectively. This is because we first sort the two arrays, and then iterate through them to fill the result array.
Space Complexity: O(1), if we do not count the space needed for the output. Otherwise, the space complexity is O(min(n, m)), where n and m are the lengths of nums1 and nums2, respectively.