Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

Sure, here are two TypeScript solutions for constructing a binary tree from inorder and postorder traversal:

```tsx
// Defining the structure of the TreeNode
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Solution 1:
 * Using recursion and a hashmap to store inorder indices
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }
  let postIndex = postorder.length - 1;
  return helper(0, inorder.length - 1);

  function helper(inLeft: number, inRight: number) {
    if (inLeft > inRight) return null;

    let rootVal = postorder[postIndex];
    let root = new TreeNode(rootVal);

    let index = indexMap.get(rootVal);

    postIndex--;
    root.right = helper(index + 1, inRight);
    root.left = helper(inLeft, index - 1);
    return root;
  }
}

/**
 * Time complexity: O(n), where n is the number of nodes. This is because we visit each node exactly once.
 * Space complexity: O(n), since we store each node in the hashmap.
 */

/**
 * Solution 2:
 * Using recursion without a hashmap
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) return null;
  let root = new TreeNode(postorder[postorder.length - 1]);
  let mid = inorder.indexOf(postorder[postorder.length - 1]);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1));
  return root;
}

/**
 * Time complexity: O(n^2), where n is the number of nodes. This is because for each node we are slicing the inorder and postorder arrays.
 * Space complexity: O(n), since in the worst case, if the tree is unbalanced, the recursion stack could go up to n levels deep.
 */
```
