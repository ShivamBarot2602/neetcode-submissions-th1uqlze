/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = head;

        while(curr) {
            if(curr.val === val) {
                prev.next = curr.next;
            } else {
                prev=curr;
            }
            curr = curr.next;
        }

        return dummy.next;
    }
}
