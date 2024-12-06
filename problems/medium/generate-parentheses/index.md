Given `n` pairs of parentheses, write a function to * generate all combinations of well - formed parentheses *.

** Example 1:**

  ```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

```

  ** Example 2:**

  ```
Input: n = 1
Output: ["()"]
```

  ** Solution 1: Recursion **

      ```tsx
function generateParenthesis(n: number): string[] {
    let res = [];
    generate(n, n, '');
    return res;

    function generate(left: number, right: number, s: string) {
        if (left === 0 && right === 0) {
            res.push(s);
            return;
        }
        if (left > 0) generate(left - 1, right, s + '(');
        if (right > left) generate(left, right - 1, s + ')');
    }
}

```

This solution has a time complexity of O(4 ^ n / sqrt(n)) and a space complexity of O(n).The time complexity comes from the number of elements in the recursion tree, while the space complexity is due to the maximum depth of the recursion.

** Solution 2: Backtracking **

  ```tsx
function generateParenthesis(n: number): string[] {
    const res = [];
    backtrack(res, '', 0, 0, n);
    return res;
}

function backtrack(res: string[], cur: string, open: number, close: number, max: number) {
    if (cur.length == max * 2) {
        res.push(cur);
        return;
    }
    if (open < max)
        backtrack(res, cur + '(', open + 1, close, max);
    if (close < open)
        backtrack(res, cur + ')', open, close + 1, max);
}

```

This solution also has a time complexity of O(4 ^ n / sqrt(n)) and a space complexity of O(n) for the same reasons as the previous solution.However, it uses a different approach(backtracking instead of recursion).