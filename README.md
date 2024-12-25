# Typescript DSA handbook

This is a public typescript handbook for DSA. It is a work in progress and will be updated regularly.

## Table of Contents

- [Problems](#problems)
- [Interview Questions](#interview-questions)
- [System Design](#system-design)

### Problems

- [Easy](#easy)
- [Medium](#medium)
- [Hard](#hard)

#### Easy

| Problem                                                                                                                          | Approach                                        | Solution                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Longest Common Prefix](problems/easy/longest-common-prefix)                                                                     | Horizontal Scanning, Vertical Scanning          | [Solution](problems/easy/longest-common-prefix/index.md)                                   |
| [Search Insert Position](problems/easy/search-insert-position)                                                                   | Binary Search, Linear Search                    | [Solution](problems/easy/search-insert-position/index.md)                                  |
| [Add Binary](problems/easy/add-binary)                                                                                           | Built-in JavaScript Functions, Bit Manipulation | [Solution](problems/easy/add-binary/index.md)                                              |
| [Sqrt(x)](problems/easy/sqrt-x)                                                                                                  | Binary Search, Newton's Method                  | [Solution](problems/easy/sqrt-x/index.md)                                                  |
| [Count Pair Whose Sum is Less Than Target](problems/easy/count-pair-whose-sum-is-less-than-target)                               | Two Pointers, Brute Force                       | [Solution](problems/easy/count-pair-whose-sum-is-less-than-target/index.md)                |
| [Number of Good Pairs](problems/easy/number-of-good-pairs)                                                                       | Brute Force, Hashmap                            | [Solution](problems/easy/number-of-good-pairs/index.md)                                    |
| [Check if the Sentence is Pangram](problems/easy/check-if-the-sentence-is-pangram)                                               | Set, Array                                      | [Solution](problems/easy/check-if-the-sentence-is-pangram/index.md)                        |
| [Add Strings](problems/easy/add-string)                                                                                          | Elementary Math, Character Code Conversion      | [Solution](problems/easy/add-string/index.md)                                              |
| [Contains Duplicate 2](problems/easy/contains-duplicate-2)                                                                       | Brute Force, Set                                | [Solution](problems/easy/contains-duplicate-2/index.md)                                    |
| [Split a String in Balanced Strings](problems/easy/split-a-string-in-balanced-strings)                                           | Greedy Approach, Stack                          | [Solution](problems/easy/split-a-string-in-balanced-strings/index.md)                      |
| [Xor Operation in an Array](problems/easy/xor-operation-in-an-array)                                                             | Bit Manipulation                                | [Solution](problems/easy/xor-operation-in-an-array/index.md)                               |
| [Decode XORed Array](problems/easy/decode-xor-in-an-array)                                                                       | Bit Manipulation                                | [Solution](problems/easy/decode-xor-in-an-array/index.md)                                  |
| [Minimum Sum of Four Digit Number After Splitting Digits](problems/easy/minimum-sum-of-four-digit-number-after-splitting-digits) | Min Heap                                        | [Solution](problems/easy/minimum-sum-of-four-digit-number-after-splitting-digits/index.md) |
| [Can Place Flowers](problems/easy/can-place-flowers)                                                                             | Iterative, Early Return                         | [Solution](problems/easy/can-place-flowers/index.md)                                       |
| [Majority Element](problems/easy/majority-element)                                                                               | Boyer-Moore Voting Algorithm, Sorting, Map      | [Solution](problems/easy/majority-element/index.md)                                        |
| [Sum of Odd Length Subarrays](problems/easy/sum-of-odd-length-subarrays)                                                         | Brute Force, Optimized                          | [Solution](problems/easy/sum-of-odd-length-subarrays/index.md)                             |
| [How Many Numbers Are Smaller Than the Current Number](problems/easy/how-many-numbers-are-smaller-than-the-current-number)       | Brute Force, Counting Sort                      | [Solution](problems/easy/how-many-numbers-are-smaller-than-the-current-number/index.md)    |
| [Two Sum](problems/easy/two-sum)                                                                                                 | Brute Force, Hashmap                            | [Solution](problems/easy/two-sum/index.md)                                                 |
| [Valid Parentheses](problems/easy/valid-parentheses)                                                                             | Stack                                           | [Solution](problems/easy/valid-parentheses/index.md)                                       |
| [Number of Arithmetic Triplets](problems/easy/number-of-arithmetic-triplets)                                                     | Brute Force, Hashmap                            | [Solution](problems/easy/number-of-arithmetic-triplets/index.md)                           |
| [Generate Parentheses](problems/easy/generate-parentheses)                                                                       | Closure Number, Backtracking                    | [Solution](problems/easy/generate-parentheses/index.md)                                    |
| [Shuffle the Array](problems/easy/shuffle-array)                                                                                 | Brute Force, Two Pointers                       | [Solution](problems/easy/shuffle-array/index.md)                                           |
| [Move Zeroes](problems/easy/move-zeros)                                                                                          | Two Pointers, Swapping                          | [Solution](problems/easy/move-zeros/index.md)                                              |
| [Intersection of Two Arrays 2](problems/easy/insersection-of-two-arrays-2)                                                       | Hashmap, Sorting and Two Pointers               | [Solution](problems/easy/insersection-of-two-arrays-2/index.md)                            |
| [Word Pattern](problems/easy/word-pattern)                                                                                       | Two Maps, Map and Set                           | [Solution](problems/easy/word-pattern/index.md)                                            |
| [Minimum Absolute Difference in BST](problems/easy/minimum-absolute-difference-bst)                                              | In-order Traversal                              | [Solution](problems/easy/minimum-absolute-difference-bst/index.md)                         |
| [Average of Levels in Binary Tree](problems/easy/average-of-levels-in-binary-tree)                                               | BFS, DFS                                        | [Solution](problems/easy/average-of-levels-in-binary-tree/index.md)                        |
| [Best Time to Buy and Sell Stock](problems/easy/best-time-to-buy-and-sell-stock)                                                 | Brute Force, One Pass                           | [Solution](problems/easy/best-time-to-buy-and-sell-stock/index.md)                         |
| [Remove Element](problems/easy/remove-element)                                                                                   | Two Pointers                                    | [Solution](problems/easy/remove-element/index.md)                                          |
| [Climbing Stairs](problems/easy/climbing-stairs)                                                                                 | Dynamic Programming, Fibonacci Number           | [Solution](problems/easy/climbing-stairs/index.md)                                         |
| [Remove Duplicates from Sorted List](problems/easy/remove-duplicates-from-sorted-list)                                           | Iterative, Recursion                            | [Solution](problems/easy/remove-duplicates-from-sorted-list/index.md)                      |
| [Merge Sorted Array](problems/easy/merge-sorted-array)                                                                           | Two Pointers                                    | [Solution](problems/easy/merge-sorted-array/index.md)                                      |
| [Summary Ranges](problems/easy/summary-ranges)                                                                                   | Two Pointers                                    | [Solution](problems/easy/summary-ranges/index.md)                                          |
| [Path Sum](problems/easy/path-sum)                                                                                               | DFS, BFS                                        | [Solution](problems/easy/path-sum/index.md)                                                |
| [Minimum Depth of Binary Tree](problems/easy/minimum-depth-of-binary-tree)                                                       | DFS, BFS                                        | [Solution](problems/easy/minimum-depth-of-binary-tree/index.md)                            |
| [Determine if Tree is Height Balanced](problems/easy/determine-height-balanced)                                                  | DFS, Recursion, Top-Down, Bottom-Up             | [Solution](problems/easy/determine-height-balanced/index.md)                               |
| [Convert Sorted Array to Binary Search Tree](problems/easy/convert-sorted-array-to-binary-search-tree)                           | Recursion, Preorder Traversal                   | [Solution](problems/easy/convert-sorted-array-to-binary-search-tree/index.md)              |
| [Symmetric Tree](problems/easy/symmetric-tree)                                                                                   | Recursion, Iteration                            | [Solution](problems/easy/symmetric-tree/index.md)                                          |

#### Medium

| Problem                                                                        | Approach                                     | Solution                                                           |
| ------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------ |
| [Generate Parentheses](problems/medium/generate-parentheses)                   | Recursion, Backtracking                      | [Solution](problems/medium/generate-parentheses/index.md)          |
| [Jump Game](problems/medium/jump-game)                                         | Greedy Approach, Backtracking                | [Solution](problems/medium/jump-game/index.md)                     |
| [Jump Game 2](problems/medium/jump-game-2)                                     | Greedy Approach, Dynamic Programming         | [Solution](problems/medium/jump-game-2/index.md)                   |
| [Insert Interval](problems/medium/insert-interval)                             | Merge, One Pass                              | [Solution](problems/medium/insert-interval/index.ts)               |
| [Minimum Size Subarray Sum](problems/medium/minimum-size-subarray-sum)         | Sliding Window, Prefix Sum and Binary Search | [Solution](problems/medium/minimum-size-subarray-sum/index.md)     |
| [Copy List with Random Pointer](problems/medium/copy-list-with-random-pointer) | Hashmap, Iteration                           | [Solution](problems/medium/copy-list-with-random-pointer/index.md) |

#### Hard

### Interview Questions

- [Easy](#easy)
- [Medium](#medium)
- [Hard](#hard)

### System Design

## Contributing

We welcome contributions from the community! This handbook aims to be a comprehensive resource for TypeScript Data Structures and Algorithms. Whether you want to add new problems, improve existing solutions, enhance documentation, or fix bugs - your contributions are valuable. Here's how you can contribute:

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes following the existing code style
4. Add appropriate comments and complexity analysis
5. Submit a pull request with a clear description of your changes

Please ensure your code submissions include:

- Clear problem description
- Multiple solution approaches where applicable
- Time and space complexity analysis
- Well-documented TypeScript code
- Test cases if possible

Together we can build a better resource for the TypeScript community to learn DSA concepts!
