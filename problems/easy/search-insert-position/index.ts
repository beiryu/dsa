// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with `O(log n)` runtime complexity.

// Solution 1: Binary Search
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
// Time Complexity: O(log n), where n is the size of the array.The binary search algorithm divides the search space in half each time, giving it a logarithmic time complexity.
// Space Complexity: O(1), the algorithm only uses a constant amount of extra space.

// Solution 2: Linear Search
function searchInsert2(nums: number[], target: number): number {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) {
      return i;
    }
    i++;
  }
  return i;
}
// Time Complexity: O(n), where n is the number of elements in the array.This is because in the worst case, we might have to look at every element in the array once.
// Space Complexity: O(1), the algorithm only uses a constant amount of extra space.