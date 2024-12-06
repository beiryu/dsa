You are given a **positive** integer `num` consisting of exactly four digits. Split `num` into two new integers `new1` and `new2` by using the **digits** found in `num`. **Leading zeros** are allowed in `new1` and `new2`, and **all** the digits found in `num` must be used.

- For example, given `num = 2932`, you have the following digits: two `2`'s, one `9` and one `3`. Some of the possible pairs `[new1, new2]` are `[22, 93]`, `[23, 92]`, `[223, 9]` and `[2, 329]`.

Return *the **minimum** possible sum of* `new1` *and* `new2`.

**Solution 2: Using Min Heap**

```tsx
function minSum(num: number): number {
    let digits = num.toString().split('').map(Number);
    let minHeap = new MinHeap();
    for (let digit of digits) {
        minHeap.add(digit);
    }
    let new1 = 0, new2 = 0;
    while (minHeap.size() > 0) {
        new1 = new1 * 10 + minHeap.poll();
        if (minHeap.size() > 0) {
            new2 = new2 * 10 + minHeap.poll();
        }
    }
    return new1 + new2;
}

class MinHeap {
    heap: number[];
    constructor() {
        this.heap = [];
    }
    add(val: number) {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);
    }
    poll() {
        return this.heap.shift();
    }
    size() {
        return this.heap.length;
    }
}

```

Time Complexity: O(n log n), where n is the number of digits in the number. This is because we are using a min heap, where each insertion operation is O(log n).
Space Complexity: O(n), as we are storing all the digits in a min heap.