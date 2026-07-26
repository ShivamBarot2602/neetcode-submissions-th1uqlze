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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    // mergeTwoLists(list1, list2) {
    //     let node = new ListNode();
    //     let ptr = node;

    //     while(list1 && list2) {
    //         if(list1.val < list2.val) {
    //             ptr.next = list1;
    //             list1 = list1.next;
    //         } else {
    //             ptr.next = list2;
    //             list2 = list2.next;
    //         }
    //         ptr = ptr.next;
    //     }

    //     if(list1) {
    //         ptr.next = list1;
    //     } else {
    //         ptr.next = list2;
    //     }

    //     return node.next;
    // }

    mergeTwoLists(list1, list2) {
        let dummy = new ListNode();
        let ptr = dummy;

        while(list1 && list2) {
            if(list1.val < list2.val) {
                let node = new ListNode(list1.val);
                ptr.next = node;
                ptr = ptr.next;
                list1 = list1.next;
            } else {
                let node = new ListNode(list2.val);
                ptr.next = node;
                ptr = ptr.next;
                list2 = list2.next;
            }
        }

        if(!list1) {
            ptr.next = list2;
        }
        if(!list2) {
            ptr.next = list1;
        }

        return dummy.next;
    }

    // Recursive way
    // mergeTwoLists(list1, list2) {
    //     if(!list1) {
    //         return list2;
    //     }
    //     if(!list2) {
    //         return list1;
    //     }
    //     if(list1.val < list2.val) {
    //         list1.next = this.mergeTwoLists(list1.next, list2);
    //         return list1;
    //     } else {
    //         list2.next = this.mergeTwoLists(list1, list2.next);
    //         return list2;
    //     }
    // }
}
