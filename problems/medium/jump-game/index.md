
You are given an integer array`nums`.You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return`true` *if you can reach the last index, or * `false` * otherwise *.

** Example 1:**

  ```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

  ** Example 2:**

    ```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

    ** Solution 1: Greedy Approach **

      ```tsx
function canJump(nums: number[]): boolean {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}

```

      ** Time Complexity:** O(n), where n is the length of the `nums` array.This is because we need to loop through each element in the array once.

** Space Complexity:** O(1), as we are only using a constant amount of space to store the `maxReach` variable.

** Solution 2: Backtracking(inefficient) **

  ```tsx
function canJump(nums: number[]): boolean {
    return jumpFromPosition(0, nums);
}

function jumpFromPosition(position: number, nums: number[]): boolean {
    if (position === nums.length - 1) return true;

    const furthestJump = Math.min(position + nums[position], nums.length - 1);
    for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
        if (jumpFromPosition(nextPosition, nums)) {
            return true;
        }
    }

    return false;
}

```

  ** Time Complexity:** O(2 ^ n), where n is the length of the `nums` array.This is because in the worst case, we are visiting every possible jump sequence.

** Space Complexity:** O(n), as we are storing information for up to n recursive calls in the call stack.