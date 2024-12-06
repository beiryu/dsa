Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` **and** `nums[j] < nums[i]`.

Return the answer in an array.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Brute Force**

```tsx
function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map((num, i) => nums.filter((_, j) => j !== i && nums[j] < num).length);
}

```

- Time Complexity: O(n^2), where n is the length of the array. This is because for each element in the array, we are checking all the other elements.
- Space Complexity: O(n), as we are creating a new array of size n.

**Solution 2: Counting Sort**

```tsx
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const count = new Array(101).fill(0);
    const res = new Array(nums.length);
    for(let i = 0; i < nums.length; i++)
        count[nums[i]]++;
    for(let i = 1; i <= 100; i++)
        count[i] += count[i-1];
    for(let i = 0; i < nums.length; i++)
        res[i] = nums[i] ? count[nums[i] - 1] : 0;
    return res;
}

```

- Time Complexity: O(n), where n is the length of the array. This is because we are traversing the array once.
- Space Complexity: O(n), as we are creating a new array of size n.