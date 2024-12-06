Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

```

**Solution 1: Brute Force**

```tsx
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return [];
}

```

This solution has a time complexity of O(n^2) due to the two nested loops and a space complexity of O(1) because we are not using any additional space.

**Solution 2: Using a Hash Map**

```tsx
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

```

This solution has a time complexity of O(n) because we traverse the list containing n elements only once. Each lookup in the table costs only O(1) time. The space complexity is also O(n) as the extra space required depends on the number of items stored in the hash map, which stores exactly n elements.