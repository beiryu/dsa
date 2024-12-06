Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*.

Sure, here are two TypeScript solutions for the problem:

**Solution 1: Using Depth-First Search (DFS)**

```tsx
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function averageOfLevels(root: TreeNode | null): number[] {
    let sum: number[] = [];
    let count: number[] = [];
    dfs(root, 0, sum, count);
    return sum.map((val, i) => val / count[i]);
}

function dfs(node: TreeNode | null, level: number, sum: number[], count: number[]): void {
    if (node === null) return;
    if (level < sum.length) {
        sum[level] += node.val;
        count[level]++;
    } else {
        sum.push(node.val);
        count.push(1);
    }
    dfs(node.left, level + 1, sum, count);
    dfs(node.right, level + 1, sum, count);
}

```

Time Complexity: O(n), where n is the number of nodes in the tree. This is because we are visiting each node once.
Space Complexity: O(h), where h is the height of the tree. This is the maximum amount of space required by the DFS call stack.

**Solution 2: Using Breadth-First Search (BFS)**

```tsx
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function averageOfLevels(root: TreeNode | null): number[] {
    let result: number[] = [];
    let queue: TreeNode[] = [];
    if (root !== null) {
        queue.push(root);
    }
    while (queue.length) {
        let sum = 0;
        let count = queue.length;
        for (let i = 0; i < count; i++) {
            let node = queue.shift()!;
            sum += node.val;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        result.push(sum / count);
    }
    return result;
}

```

Time Complexity: O(n), where n is the number of nodes in the tree. This is because we are visiting each node once.
Space Complexity: O(m), where m is the maximum number of nodes at any single depth level of the tree. This space is required for the queue.