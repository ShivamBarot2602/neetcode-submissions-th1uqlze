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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let ptr1 = headA;
        let ptr2 = headB;

        while(ptr1 !== ptr2) {
            ptr1 = ptr1 ? ptr1.next : headB;
            ptr2 = ptr2 ? ptr2.next : headA;
        }

        return ptr1
    }
}
