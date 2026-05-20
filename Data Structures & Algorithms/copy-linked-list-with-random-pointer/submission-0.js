// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr=head;
        let map = new Map();
        map.set(null, null)

        while(curr) {
            let node = new Node(curr.val);
            map.set(curr, node);
            curr=curr.next;
        }

        curr=head;

        while(curr) {
            let newNode = map.get(curr);
            newNode.next = map.get(curr.next);
            newNode.random = map.get(curr.random);
            curr=curr.next;
        }

        return map.get(head)
    }
}
