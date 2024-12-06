Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Using Two Maps**

```tsx
function wordPattern(pattern: string, s: string): boolean {
    let words = s.split(' ');
    if (pattern.length != words.length) return false;
    let wordMap = new Map(), patternMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
        let word = words[i], p = pattern[i];
        if (!wordMap.has(word)) wordMap.set(word, p);
        if (!patternMap.has(p)) patternMap.set(p, word);
        if (wordMap.get(word) != p || patternMap.get(p) != word) return false;
    }
    return true;
}

```

Time Complexity: O(n), where n is the length of the pattern string or the number of words in s. This is because we need to iterate over the pattern and s once.
Space Complexity: O(n), as we are storing the words and characters in two maps.

**Solution 2: Using Single Map and a Set**

```tsx
function wordPattern(pattern: string, s: string): boolean {
    let words = s.split(' ');
    if (pattern.length != words.length) return false;
    let map = new Map();
    let usedWords = new Set();
    for (let i = 0; i < pattern.length; i++) {
        let p = pattern[i];
        if (map.has(p)) {
            if (map.get(p) !== words[i]) return false;
        } else {
            if (usedWords.has(words[i])) return false;
            map.set(p, words[i]);
            usedWords.add(words[i]);
        }
    }
    return true;
}

```

Time Complexity: O(n), where n is the length of the pattern string or the number of words in s. This is because we need to iterate over the pattern and s once.
Space Complexity: O(n), as we are storing the characters in a map and the words in a set.