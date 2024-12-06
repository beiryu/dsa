Return *the original array* `arr`. It can be proved that the answer exists and is unique.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Using a Loop**

```tsx
function decode(encoded: number[], first: number): number[] {
    let arr = [first];
    for (let i = 0; i < encoded.length; i++) {
        arr.push(arr[i] ^ encoded[i]);
    }
    return arr;
}

```

- Time Complexity: O(n), where n is the length of the encoded array. This is because we are traversing the array once.
- Space Complexity: O(n), since we are creating a new array of size n.

**Solution 2: Using Array map**

```tsx
function decode(encoded: number[], first: number): number[] {
    return encoded.map((num, i) => first = first ^ num, first);
}

```

- Time Complexity: O(n), where n is the length of the encoded array. This is because the map operation traverses the array once.
- Space Complexity: O(n), as we are creating a new array of size n.

You are given the `encoded` array. You are also given an integer `first`, that is the first element of `arr`, i.e. `arr[0]`.

It was encoded into another integer array `encoded` of length `n - 1`, such that `encoded[i] = arr[i] XOR arr[i + 1]`. For example, if `arr = [1,0,2,1]`, then `encoded = [1,2,3]`.

There is a **hidden** integer array `arr` that consists of `n` non-negative integers.