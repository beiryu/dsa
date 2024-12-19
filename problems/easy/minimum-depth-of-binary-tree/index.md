Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**Solution 1: Depth-First Search (DFS)**

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

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    let min_depth = Number.MAX_VALUE;
    if (root.left !== null) {
        min_depth = Math.min(minDepth(root.left), min_depth);
    }
    if (root.right !== null) {
        min_depth = Math.min(minDepth(root.right), min_depth);
    }
    return min_depth + 1;
}

```

The time complexity for this solution is O(N), where N is the number of nodes in the tree. This is because we traverse each node once.
The space complexity is O(H), where H is the height of the tree, which corresponds to the maximum recursion stack size.

**Solution 2: Breadth-First Search (BFS)**

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

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let queue = [{node: root, depth: 1}];
    while(queue.length > 0) {
        let {node, depth} = queue.shift();
        if (node.left === null && node.right === null) {
            return depth;
        }
        if (node.left !== null) {
            queue.push({node: node.left, depth: depth + 1});
        }
        if (node.right !== null) {
            queue.push({node: node.right, depth: depth + 1});
        }
    }
}

```

The time complexity for this solution is also O(N), where N is the number of nodes in the tree. This is because we traverse each node once.
The space complexity is O(N) for the worst case when the tree is a complete binary tree, as all nodes will be in the queue at once. For average cases, the space complexity will be O(width), where width is the maximum width of the tree.