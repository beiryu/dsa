Given a binary tree, determine if it is **height-balanced**.

**Solution 1: Top-Down Approach**

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

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

function height(node: TreeNode | null): number {
    if (node === null) return -1;
    return 1 + Math.max(height(node.left), height(node.right));
}

```

In this solution, we use a top-down approach where for each node, we compute the height of its two subtrees and check the balance factor. This approach has a time complexity of O(n^2) because for each node, we are computing the height, which takes O(n) time. The space complexity is O(n) because in the worst case, the height of the tree can be n (for a skewed tree).

**Solution 2: Bottom-Up Approach**

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

function isBalanced(root: TreeNode | null): boolean {
    return height(root) !== -1;
};

function height(node: TreeNode | null): number {
    if (node === null) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    return 1 + Math.max(leftHeight, rightHeight);
}

```

In this solution, we use a bottom-up approach where we traverse the nodes in postorder. While traversing, we check the balance factor and height for each node. This approach has a time complexity of O(n) because we are visiting each node once. The space complexity is O(n) because in the worst case, the height of the recursion tree can be n (for a skewed tree).