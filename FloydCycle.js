class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function detectLoop(head) {
  
    // Fast and slow pointers initially points to the head
    let slow = head, fast = head;

    // Loop that runs while fast and slow pointer are not
    // null and not equal
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // If fast and slow pointer points to the same node,
        // then the cycle is detected
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// Driver Code
// Create a hard-coded linked list:
// 1 -> 3 -> 4
let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);

// Create a loop
head.next.next.next = head.next;

if (detectLoop(head))
    console.log("true");
else
    console.log("false");

// Time complexity: O(n), where n is the number of nodes in the Linked List.
// Auxiliary Space: O(1). 