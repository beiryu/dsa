Given the `head` of a sorted linked list, *delete all duplicates such that each element appears only once*. Return *the linked list **sorted** as well*.

**Solution 1: Iterative Method**

```tsx
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
```

This solution iterates over the list and for each node, it checks if the next node has the same value. If it does, it removes that next node by pointing the current node's `next` to the node after the next.

Time Complexity: O(n), where n is the number of nodes in the list. This is because we are iterating over the list once.
Space Complexity: O(1), as there is no additional space being used.

**Solution 2: Recursive Method**

```tsx
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
}
```

This solution uses recursion to solve the problem. It first recurses to the end of the list, then on the way back up, if it finds that the current node and the next node have the same value, it removes the current node by returning the next node instead of the current node.

Time Complexity: O(n), where n is the number of nodes in the list. This is because we are iterating over the list once.
Space Complexity: O(n), where n is the height of the recursion tree which in the worst case could be n, if the list is very skewed.
