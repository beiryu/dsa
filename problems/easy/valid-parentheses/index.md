Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Solution 1: Using a Stack**

```tsx
function isValid(s: string): boolean {
    let stack = [];
    let map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    for (let char of s) {
        if (map.has(char)) {
            let topElement = (stack.length === 0) ? '#' : stack.pop();
            if (topElement !== map.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

```

This solution has a time complexity of O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1) time. The space complexity is O(n) as in the worst case, we will end up pushing all the brackets into the stack.

**Solution 2: Optimized Solution using a Stack**

```tsx
function isValid(s: string): boolean {
    if (s.length % 2 === 1) {
        return false;
    }

    let pairs = new Map();
    pairs.set(')', '(');
    pairs.set('}', '{');
    pairs.set(']', '[');
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (pairs.has(ch)) {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}

```

This solution also has a time complexity of O(n) as we traverse the given string one character at a time and push and pop operations on a stack take O(1) time. However, the space complexity is slightly optimized, as we first check if the string's length is an odd number. If it is, we immediately return false, this prevents unnecessary stack operation for certain invalid strings.