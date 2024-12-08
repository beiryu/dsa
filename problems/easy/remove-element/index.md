Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm). The order of the elements may be changed. Then return *the number of elements in* `nums` *which are not equal to* `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

**Solution 1: Two Pointers**

```tsx
function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
```

This solution has a time complexity of O(n) where n is the number of elements in the array. This is because we are traversing the array once. The space complexity is O(1) because we are not using any extra space.

**Solution 2: Two Pointers - when elements to remove are rare**

```tsx
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
}
```

This solution also has a time complexity of O(n) for the same reason. However, this approach is more efficient when the elements to remove are rare. The space complexity is also O(1).
