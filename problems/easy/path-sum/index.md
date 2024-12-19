Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

Sure, here are two TypeScript solutions for the problem:

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }
    if (root.val === targetSum && root.left === null && root.right === null) {
        return true;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

```

**Time Complexity**: O(n), where n is the number of nodes in the tree. This is because we visit each node exactly once.
**Space Complexity**: O(h), where h is the height of the tree. This space is used by the recursion stack. In the worst case (when the tree is a straight line), the height of the tree equals the number of nodes, in which case the space complexity would be O(n).

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }
    let nodeQueue: TreeNode[] = [root];
    let valQueue: number[] = [root.val];
    while (nodeQueue.length > 0) {
        let currentNode = nodeQueue.shift();
        let currentVal = valQueue.shift();
        if (currentNode.left === null && currentNode.right === null) {
            if (currentVal === targetSum) {
                return true;
            }
            continue;
        }
        if (currentNode.left !== null) {
            nodeQueue.push(currentNode.left);
            valQueue.push(currentNode.left.val + currentVal);
        }
        if (currentNode.right !== null) {
            nodeQueue.push(currentNode.right);
            valQueue.push(currentNode.right.val + currentVal);
        }
    }
    return false;
}

```

**Time Complexity**: O(n), where n is the number of nodes in the tree. This is because we visit each node exactly once.
**Space Complexity**: O(n), where n is the number of nodes. This space is used for the two queues. In the worst case, we might end up inserting all nodes into the queue.