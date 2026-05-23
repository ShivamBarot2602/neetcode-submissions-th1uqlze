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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let curr = dummy;

        let prev1 = null;
        let curr1 = l1;
        while(curr1) {
            let temp = curr1.next;
            curr1.next = prev1;
            prev1 = curr1;
            curr1 = temp;
        }

        let prev2 = null;
        let curr2= l2;
        while(curr2) {
            let temp = curr2.next;
            curr2.next = prev2;
            prev2 = curr2;
            curr2 = temp;
        }

        let carry = 0;
        while(prev1 || prev2 || carry) {
            let sum = (prev1 ? prev1.val : 0) + (prev2 ? prev2.val : 0) + carry;

            carry = Math.trunc(sum / 10);
            sum = sum % 10;

            curr.next = new ListNode(sum);
            curr = curr.next;
            prev1 = prev1 ? prev1.next : null;
            prev2 = prev2 ? prev2.next : null;
        }

        let prev=null;
        curr = dummy.next;

        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev
    }
}
