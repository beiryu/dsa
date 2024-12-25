A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a [**deep copy**](https://en.wikipedia.org/wiki/Object_copying#Deep_copy) of the list. The deep copy should consist of exactly `n` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. **None of the pointers in the new list should point to nodes in the original list**.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

Return *the head of the copied linked list*.

The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:

- `val`: an integer representing `Node.val`
- `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.

Your code will **only** be given the `head` of the original linked list.

Sure, here are two TypeScript solutions for this problem:

**Solution 1: Using a Map**

```tsx
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node | null): Node | null {
  if (head === null) return null;
  let map = new Map();
  let node = head;
  while (node !== null) {
    map.set(node, new Node(node.val));
    node = node.next;
  }
  node = head;
  while (node !== null) {
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random) || null;
    node = node.next;
  }
  return map.get(head);
}
```

Time Complexity: O(n), where n is the number of nodes in the linked list. This is because we are traversing the linked list once.
Space Complexity: O(n), to store the map.

**Solution 2: Iterative Clone Nodes**

```tsx
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node | null): Node | null {
  if (head === null) return null;
  let ptr = head;
  while (ptr !== null) {
    let newNode = new Node(ptr.val);
    newNode.next = ptr.next;
    ptr.next = newNode;
    ptr = newNode.next;
  }
  ptr = head;
  while (ptr !== null) {
    ptr.next.random = ptr.random !== null ? ptr.random.next : null;
    ptr = ptr.next.next;
  }
  let ptrOldList = head;
  let ptrNewList = head.next;
  let headOld = head.next;
  while (ptrOldList !== null) {
    ptrOldList.next = ptrOldList.next.next;
    ptrNewList.next = ptrNewList.next !== null ? ptrNewList.next.next : null;
    ptrOldList = ptrOldList.next;
    ptrNewList = ptrNewList.next;
  }
  return headOld;
}
```

Time Complexity: O(n), where n is the number of nodes in the linked list. This is because we are traversing the linked list once.
Space Complexity: O(1), as we are not using any additional space.
