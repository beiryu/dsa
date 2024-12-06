Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Two Pointers Approach**

```tsx
function moveZeroes(nums: number[]): void {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i !== j) {
                nums[i] = 0;
            }
            j++;
        }
    }
}

```

The `moveZeroes` function is designed to move all zeros in an array to the end while maintaining the relative order of the non-zero elements.

The function accepts a numerical array `nums` as input. It initializes a pointer `j` to 0. The function then loops over the array, and for each element, it checks if the element is not equal to zero. If it's not, the function assigns the value of this element to the position pointed to by `j` in the array, and if the current index `i` is not equal to `j`, it assigns zero to the position `i`. After that, it increments `j`. As a result, all non-zero elements are moved to the front of the array, and all zeroes are placed at the end.

For example:

If the input array is `[0,1,0,3,12]`, the function will process it as follows:

- On the first iteration, it skips the zero.
- On the second iteration, it finds the `1`, puts it on the position pointed to by `j` (which is 0), and increments `j`.
- On the third iteration, it skips the zero.
- On the fourth iteration, it finds the `3`, puts it on the position pointed to by `j` (which is 1), and increments `j`.
- On the fifth iteration, it finds the `12`, puts it on the position pointed to by `j` (which is 2), and increments `j`.

The resulting array is `[1,3,12,0,0]`.

Time Complexity: O(n), where n is the length of the array. This is because we are traversing the array once.
Space Complexity: O(1), as we are using a constant amount of space.

**Solution 2: Swap Zeros**

```tsx
function moveZeroes(nums: number[]): void {
    for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
        if (nums[cur] !== 0) {
            let temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt] = nums[cur];
            nums[cur] = temp;
            lastNonZeroFoundAt++;
        }
    }
}

```

Time Complexity: O(n), where n is the length of the array. This is because we are traversing the array once.
Space Complexity: O(1), as we are using a constant amount of space.