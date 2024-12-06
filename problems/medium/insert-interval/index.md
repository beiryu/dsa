You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` *after the insertion*.

**Note** that you don't need to modify `intervals` in-place. You can make a new array and return it.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Insert then Merge**

```tsx
function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let merged: number[][] = [];
    for (let interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }
    return merged;
}

```

Time Complexity: O(n log n), where n is the length of the intervals array. Sorting the array takes O(n log n) time.
Space Complexity: O(n), since we are creating a new array to store the merged intervals.

**Solution 2: One-Pass Method**

```tsx
function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
    let result: number[][] = [], i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    return result;
}

```

Time Complexity: O(n), where n is the length of the intervals array. We are doing a single pass through the array.
Space Complexity: O(n), since we are creating a new array to store the result intervals.