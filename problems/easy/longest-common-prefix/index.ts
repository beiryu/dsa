// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string`""`.

// ** Solution 1: Horizontal Scanning **
function longestCommonPrefix1(strs: string[]): string {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}
// Time Complexity: O(S), where S is the sum of all characters in all strings.In the worst case scenario, all strings are the same, and the algorithm will perform S character comparisons where S is the sum of all characters in the strings.
// Space Complexity: O(1), the algorithm only uses a constant amount of extra space.

// ** Solution 2: Vertical Scanning **
function longestCommonPrefix2(strs: string[]): string {
  if (!strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== c)
        return strs[0].substring(0, i);
    }
  }
  return strs[0];
}
// Time Complexity: O(S), where S is the sum of all characters in all strings.In the worst case scenario, all strings are the same, and the algorithm will perform S character comparisons where S is the sum of all characters in the strings.
// Space Complexity: O(1), the algorithm only uses a constant amount of extra space.