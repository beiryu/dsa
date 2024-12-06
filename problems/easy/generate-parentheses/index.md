Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

Sure, here are two TypeScript solutions for generating all combinations of well-formed parentheses:

**Solution 1: Backtracking**

```tsx
function generateParenthesis(n: number): string[] {
    let res: string[] = [];
    function backtrack(s = '', left = 0, right = 0) {
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }
        if (left < n) backtrack(s + '(', left + 1, right);
        if (right < left) backtrack(s + ')', left, right + 1);
    }
    backtrack();
    return res;
}

```

Time Complexity: O(4^n / sqrt(n)), each valid sequence has at most n steps during the backtracking procedure.
Space Complexity: O(n), as it only uses a constant amount of space to store the solution.

**Solution 2: Closure Number**

```tsx
function generateParenthesis(n: number): string[] {
    if (n === 0) {
        return [''];
    }
    let ans: string[] = [];
    for (let c = 0; c < n; ++c)
        for (let left of generateParenthesis(c))
            for (let right of generateParenthesis(n - 1 - c))
                ans.push(`(${left})${right}`);
    return ans;
}

```

Time Complexity: O(4^n / sqrt(n)), each valid sequence has at most n steps during the backtracking procedure.
Space Complexity: O(n), as it only uses a constant amount of space to store the solution.