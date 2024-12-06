Given two non-negative integers, `num1` and `num2` represented as string, return *the sum of* `num1` *and* `num2` *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.

**Solution 1: Elementary Math**

```tsx
function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, res = '';
    while(i >= 0 || j >= 0 || carry > 0){
        let n1 = i >= 0 ? parseInt(num1[i--]) : 0;
        let n2 = j >= 0 ? parseInt(num2[j--]) : 0;
        let sum = n1 + n2 + carry;
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
    }
    return res;
}

```

Time Complexity: O(max(N,M)), where N and M are the lengths of num1 and num2. The algorithm loops at most max(N,M) times.
Space Complexity: O(max(N,M)), because the length of the new string is at most max(N,M) + 1.

**Solution 2: Character Code Conversion**

```tsx
function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, res = '';
    while(i >= 0 || j >= 0 || carry){
        let n1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        let n2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;
        let sum = n1 + n2 + carry;
        res = String(sum % 10) + res;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return res;
}

```

Time Complexity: O(max(N,M)), where N and M are the lengths of num1 and num2. The algorithm loops at most max(N,M) times.
Space Complexity: O(max(N,M)), because the length of the new string is at most max(N,M) + 1.