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
     * @return {ListNode}
     */
    // reverseList(head) {
    //     if(!head){
    //         return null
    //     } else {
    //     let ptr = head;
    //     let prevPtr = null;
    //     while(ptr){
    //         let nextPtr = ptr.next;
    //         ptr.next = prevPtr;
    //         prevPtr = ptr;
    //         ptr = nextPtr; 
    //     }

    //         head = prevPtr;
    //      }

    //     return head
    // }

    // Recursive way

    // reverseList(head, prevPtr = null) {
    //     if(!head){
    //         return prevPtr;
    //     }

    //     let nextPtr = head.next;
    //     head.next = prevPtr;
    //     prevPtr = reverseList(nextPtr, head);
    //     head=prevPtr;
    //     return head;
    // }

    reverseList(head, prevPtr = null) {
        console.log("Head ",head, " PrevPtrv ",prevPtr)
        if(!head) {
            return prevPtr;
        }

        let temp = head.next;
        head.next = prevPtr;
        prevPtr = head;
        head = temp;

        return this.reverseList(head, prevPtr);
    }

}
