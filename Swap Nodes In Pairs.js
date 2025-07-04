/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Base cases: empty list or single node
    if (!head || !head.next) {
        return head;
    }
    
    // Create dummy node to simplify edge cases
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    while (head && head.next) {
        // Nodes to be swapped
        let first = head;
        let second = head.next;
        
        // Swapping
        prev.next = second;
        first.next = second.next;
        second.next = first;
        
        // Move pointers
        prev = first;
        head = first.next;
    }
    
    return dummy.next;
};
