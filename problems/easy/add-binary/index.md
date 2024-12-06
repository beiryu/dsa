Given two binary strings `a` and`b`, return * their sum as a binary string *.

** Solution 1: Using Built -in JavaScript Functions **

  In this solution, we first convert the binary strings to integers using the built-in `parseInt` function, then add them together and convert the result back to a binary string using the `toString` method.

```tsx
function addBinary(a: string, b: string): string {
    let sum = parseInt(a, 2) + parseInt(b, 2);
    return sum.toString(2);
}

```

Time Complexity: O(n), where n is the length of the binary strings.This is because the `parseInt` and `toString` methods run in linear time.
Space Complexity: O(1), as we are using a constant amount of space.

** Solution 2: Bit Manipulation **

  In this solution, we use bitwise operators to add the binary strings together.The '^' operator is used for addition, and the '&' operator is used to calculate the carry.We keep adding until there is no carry left.

```tsx
function addBinary(a: string, b: string): string {
    let i = a.length - 1, j = b.length - 1, carry = 0, res = "";
    while(i >= 0 || j >= 0 || carry > 0){
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        res = carry % 2 + res;
        carry = Math.floor(carry / 2);
    }
    return res;
}

```

Time Complexity: O(n), where n is the maximum length of the two binary strings.This is because we are iterating over the strings from the back.
Space Complexity: O(n), as we are storing the result in a new string.