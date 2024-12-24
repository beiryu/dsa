Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).

**Solution 1: Recursive Approach**

```tsx
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

function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root);
}

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  return (
    node1.val === node2.val &&
    isMirror(node1.right, node2.left) &&
    isMirror(node1.left, node2.right)
  );
}
```

This solution has a time complexity of O(n) because we are traversing the entire tree once. The space complexity is O(n) because in the worst case, we might have to hold the space for the entire tree height in the stack due to recursion.

**Solution 2: Iterative Approach**

```tsx
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

function isSymmetric(root: TreeNode | null): boolean {
  let queue = [];
  queue.push(root);
  queue.push(root);

  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift();

    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
}
```

This solution also has a time complexity of O(n) because we are traversing the entire tree once. The space complexity is O(n) because in the worst case, we might have to hold all the elements of a level in the queue for a full binary tree.
