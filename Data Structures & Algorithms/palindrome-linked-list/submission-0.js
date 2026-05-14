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
     * @return {boolean}
     */
    isPalindrome(head) {
        let fast=head;
        let slow=head;

        // find middle of linkedlist
        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev=null;
        
        // Reverse the linkedlist
        while(slow) {
            let ptr = slow.next;
            slow.next=prev;
            prev=slow;
            slow=ptr;
        }

        let left=head;
        let right=prev;

        while(left && left.next) {
            if(left.val !== right.val) {
                return false
            }
            left = left.next;
            right=right.next;
        }

        return true
    }
}
