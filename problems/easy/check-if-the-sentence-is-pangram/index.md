A **pangram** is a sentence where every letter of the English alphabet appears at least once.

Given a string `sentence` containing only lowercase English letters, return **`true` *if* `sentence` *is a **pangram**, or* `false` *otherwise.*

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Using a Set**

```tsx
function isPangram(sentence: string): boolean {
    let uniqueChars = new Set(sentence);
    return uniqueChars.size === 26;
}

```

Time Complexity: O(n), where n is the length of the sentence. This is because we need to iterate over each character in the sentence.
Space Complexity: O(1), since the set can hold a maximum of 26 characters (all the alphabets), the space complexity is constant.

**Solution 2: Using an Array**

```tsx
function isPangram(sentence: string): boolean {
    let alphabet = Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        let index = sentence.charCodeAt(i) - 'a'.charCodeAt(0);
        alphabet[index] = true;
    }
    return alphabet.every(Boolean);
}

```

Time Complexity: O(n), where n is the length of the sentence. This is because we need to iterate over each character in the sentence.
Space Complexity: O(1), since the array can hold a maximum of 26 elements (all the alphabets), the space complexity is constant.