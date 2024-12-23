Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a **height-balanced** binary search tree*.

**Solution 1: Using Middle Element**

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

function sortedArrayToBST(nums: number[], left: number = 0, right: number = nums.length - 1): TreeNode | null {
    if (left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums, left, mid - 1);
    node.right = sortedArrayToBST(nums, mid + 1, right);
    return node;
}

```

This solution uses the middle element of the array to create the root node and recursively creates the left and right subtrees.

Time Complexity: O(n), where n is the number of elements in the array. This is because we are visiting each node once.
Space Complexity: O(n), where n is the height of the tree. In the worst case, the tree can be skewed and the height can be n.

**Solution 2: Using Preorder Traversal**

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null;
    let stack = [];
    let node = new TreeNode(0);
    let low = 0;
    let high = nums.length - 1;
    let mid = Math.floor((low + high) / 2);
    node.val = nums[mid];
    let item = [node, low, mid - 1];
    stack.push(item);
    item = [node, mid + 1, high];
    stack.push(item);

    while (stack.length) {
        item = stack.pop();
        low = item[1];
        high = item[2];
        node = item[0];
        mid = Math.floor((low + high) / 2);
        if (low <= high) {
            let left = new TreeNode(nums[mid]);
            node.left = left;
            let right = new TreeNode(0);
            node.right = right;
            item = [right, mid + 1, high];
            stack.push(item);
            item = [left, low, mid - 1];
            stack.push(item);
        }
    }
    return node;
}

```

This solution uses the preorder traversal (root, left, right) to create nodes in the order of root, left subtree and right subtree.

Time Complexity: O(n), where n is the number of elements in the array. This is because we are visiting each node once.
Space Complexity: O(n), where n is the height of the tree. In the worst case, the tree can be skewed and the height can be n.