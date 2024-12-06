Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.

Sure, here are two TypeScript solutions for finding the minimum absolute difference in a Binary Search Tree:

**Solution 1: In-Order Traversal**

```tsx
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function getMinimumDifference(root: TreeNode | null): number {
    let vals: number[] = [];
    inOrder(root, vals);
    let min = Infinity;
    for (let i = 0; i < vals.length - 1; i++) {
        min = Math.min(min, vals[i + 1] - vals[i]);
    }
    return min;
}

function inOrder(node: TreeNode | null, vals: number[]): void {
    if (node === null) return;
    inOrder(node.left, vals);
    vals.push(node.val);
    inOrder(node.right, vals);
}

```

Time Complexity: O(N), where N is the number of nodes in the tree. This is because we need to visit each node once during the in-order traversal.
Space Complexity: O(N), as we are storing the values of all the nodes in an array.

**Solution 2: Iterative In-Order Traversal**

```tsx
function getMinimumDifference(root: TreeNode | null): number {
    let stack: TreeNode[] = [], node = root, prev = -Infinity, min = Infinity;
    while (stack.length > 0 || node !== null) {
        while (node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        min = Math.min(min, node.val - prev);
        prev = node.val;
        node = node.right;
    }
    return min;
}

```

Time Complexity: O(N), where N is the number of nodes in the tree. This is because we need to visit each node once during the in-order traversal.
Space Complexity: O(H), where H is the height of the tree. This is because in the worst case, we might need to store all the nodes at a single level of the tree in the stack, and the maximum number of nodes at a single level is equal to the height of the tree.