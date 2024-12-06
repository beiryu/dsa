**Balanced** strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a **balanced** string `s`, split it into some number of substrings such that:

- Each substring is balanced.

Return *the **maximum** number of balanced strings you can obtain.*

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Greedy Approach**

```tsx
function balancedStringSplit(s: string): number {
    let count = 0, balance = 0;
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === 'L' ? 1 : -1;
        if (balance === 0) count++;
    }
    return count;
}

```

Time Complexity: O(n), where n is the length of the string. This is because we are traversing the string once.
Space Complexity: O(1), since we only need a constant amount of space to store the count and balance variables.

**Solution 2: Stack Approach**

```tsx
function balancedStringSplit(s: string): number {
    let stack: string[] = [], count = 0;
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] === s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length === 0) count++;
        }
    }
    return count;
}

```

Time Complexity: O(n), where n is the length of the string. This is because we are traversing the string once.
Space Complexity: O(n), in the worst case, we might need to store all characters in the stack.