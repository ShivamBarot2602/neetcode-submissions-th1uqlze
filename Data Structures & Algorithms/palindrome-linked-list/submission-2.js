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
    // Array solution 
    // isPalindrome(head) {
    //     let array = new Array();
    //     let ptr = head;

    //     while(ptr) {
    //         array.push(ptr.val);
    //         ptr=ptr.next;
    //     }

    //     let left=0;
    //     let right=array.length-1;

    //     while(left < right) {
    //         if(array[left] !== array[right]) {
    //             return false;
    //         }
    //         left++;
    //         right--;
    //     }
    //     return true
    // }

    // Fast & Slow Pointers
    // isPalindrome(head) {
    //     let fast=head;
    //     let slow=head;

    //     // find middle of linkedlist
    //     while(fast && fast.next) {
    //         fast = fast.next.next;
    //         slow = slow.next;
    //     }

    //     let prev=null;
        
    //     // Reverse the linkedlist
    //     while(slow) {
    //         let ptr = slow.next;
    //         slow.next=prev;
    //         prev=slow;
    //         slow=ptr;
    //     }

    //     let left=head;
    //     let right=prev;

    //     while(left && left.next) {
    //         if(left.val !== right.val) {
    //             return false
    //         }
    //         left = left.next;
    //         right=right.next;
    //     }

    //     return true
    // }

    // Recursion
    isPalindrome = (head) => {
        let curr = head;

        const rec = (node) => {
           if(node !== null) {
                if(!rec(node.next)) {
                    return false;
                }
                if(node.val !== curr.val) {
                    return false;
                }
                curr = curr.next;
           }
           return true
        }

        return rec(head)
    }
}
