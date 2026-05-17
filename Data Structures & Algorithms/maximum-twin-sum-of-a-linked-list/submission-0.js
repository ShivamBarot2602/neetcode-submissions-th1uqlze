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
     * @return {number}
     */
    pairSum(head) {
        let slow=head;
        let fast=head;

        while(fast && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        let prev = null;
        let curr = second;

        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev=curr;
            curr=temp;
        }

        let ptr = head;
        let arr = []

        while(prev) {
            arr.push(ptr.val + prev.val);
            ptr=ptr.next;
            prev=prev.next;
        }

        return Math.max(...arr)
    }
}
