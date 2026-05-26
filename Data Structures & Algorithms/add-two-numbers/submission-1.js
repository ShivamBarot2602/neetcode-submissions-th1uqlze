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
    // addTwoNumbers(l1, l2) {
    //     let dummy = new ListNode();
    //     let curr = dummy;
    //     let carry = 0;

    //     while(l1 || l2 || carry) {
    //         let sum = 0;
    //         sum += (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    //         carry = Math.trunc(sum / 10);
    //         sum = sum % 10;

    //         curr.next = new ListNode(sum);
    //         curr = curr.next;
    //         l1 = l1 ? l1.next : null;
    //         l2 = l2 ? l2.next : null;
    //     }

    //     return dummy.next
    // }

    // Recursive Solution
     addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let curr = dummy;

        const recursive = (l1, l2, carry) => {
            if(!l1 && !l2 && carry === 0) {
                return carry;
            }
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            carry = Math.trunc(sum / 10);
            sum = sum % 10;
            curr.next = new ListNode(sum);
            curr = curr.next;
            recursive(l1 ? l1.next : null, l2 ? l2.next : null, carry);
        }

        recursive(l1, l2, 0);
        return dummy.next;
     }
}
