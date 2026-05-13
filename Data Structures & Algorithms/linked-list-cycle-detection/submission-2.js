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
    // hasCycle(head) {
    //     let visit = new Set();

    //     while(head && head.next) {
    //         if(visit.has(head)) {
    //             return true;
    //         }
    //         visit.add(head);
    //         head=head.next;
    //     }

    //     return false
    // }

    hasCycle(head) {
        let slow=head;
        let fast=head;

        while(fast && fast.next) {
            slow=slow.next;
            fast=fast.next.next;

            if(slow === fast) {
                return true;
            }
        }

        return false
    }
}
