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
     * @return {void}
     */
    // reorderList(head) {
    //     let slow = head;
    //     let fast = head;

    //     while(fast && fast.next) {
    //         fast = fast.next.next;
    //         slow = slow.next;
    //     }

    //     // Beginning of the second half of the list
    //     let second = slow.next;
    //     let prev = null;
    //     slow.next = null;

    //     while(second) {
    //         let temp = second.next;
    //         second.next = prev;
    //         prev = second;
    //         second = temp;
    //     }

    //     let first = head;
    //     second = prev;

    //     while(second) {
    //         let temp1 = first.next;
    //         let temp2 = second.next;
    //         first.next = second;
    //         second.next = temp1;
    //         first = temp1;
    //         second = temp2;
    //     }
    // }


    // Recursive Solution
    // reorderList(head) {
    //     return this.recursive(head, head.next);
    // }

    // recursive(root, curr) {
    //     if(curr === null) {
    //         return root;
    //     }

    //     root = this.recursive(root, curr.next);
    //     if(root === null) {
    //         return null;
    //     }
    //     let temp = null;

    //     if(curr === root || root.next === curr) {
    //         curr.next = null;
    //     } else {
    //         temp = root.next;
    //         root.next = curr;
    //         curr.next = temp;
    //     }

    //     return temp
    // }

    reorderList(head) {
        let fast = head.next;
        let slow = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let curr = slow.next;
        slow.next = null;

        let prev = null;

        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let h1 = head;
        let h2 = prev;

        while(h2) {
            let temp1 = h1.next;
            let temp2 = h2.next;

            h1.next = h2;
            h2.next = temp1;

            h1 = temp1;
            h2 = temp2;
        }
    }
}
