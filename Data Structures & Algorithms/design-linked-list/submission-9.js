class ListNode {
    constructor(val, next) {
        this.val=val;
        this.next=next || null;
    }
}

// class MyLinkedList {
//     constructor() {
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     /**
//      * @param {number} index
//      * @return {ListNode}
//      */
//     // getPrev(index) {

//     // }

//     /**
//      * @param {number} index
//      * @return {number}
//      */
//     get(index) {
//         // console.log("Head ",this.head, this.size)
//         if(this.size <= 0 || index >= this.size || this.size === 0) {
//             return -1
//         } else {
//             let curr=this.head;
//             for(let i=0; i<index;i++) {
//                 curr=curr.next;
//             }
        
//             console.log("Size ",this.size)
//             console.log("get ",curr)
//             return curr.val
//         }
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     addAtHead(val) {
//         let node = new Node(val);
//         if(this.size === 0) {
//             this.head= node;
//             this.tail = node;
//         } else {
//             node.next=this.head;
//             this.head = node;
//         }
//         // console.log("Add t head ",this.head)
       
//         this.size+=1;
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     addAtTail(val) {
//         const node = new Node(val);

//         if(this.size === 0) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size+=1;
//     }

//     /**
//      * @param {number} index
//      * @param {number} val
//      * @return {void}
//      */
//     addAtIndex(index, val) {
//         if(index < 0 || index > this.size) {
//             return 
//         }
//         let node = new Node(val);
//         if(index === 0) {
//             node.next = this.head;
//             this.head = node;
//             this.size += 1
//         } else if(index === this.size) {
//             this.addAtTail(index, val)
//         } else {
//             let curr = this.head;

//             for(let i=0; i<index-1; i++) {
//                 curr = curr.next;
//             }
//             let temp = curr.next;
//             curr.next = node;
//             node.next = temp;
//             this.size += 1
//         }
//     }

//     /**
//      * @param {number} index
//      * @return {void}
//      */
//     deleteAtIndex(index) {
//         if(index >= this.size || index < 0) {
//             return
//         } else if(index === 0) {
//             this.head = this.head?.next || null;
//             this.size -= 1;
//         } else if(this.size === 1 && index === 0) {
//             this.head = null;
//             this.tail = null;
//             this.size -= 1;
//         } else {
//             let curr = this.head;
//             for(let i=0; i<index-1; i++) {
//                 curr=curr.next;
//             }
//             let removeNode = curr.next;
//             curr.next = removeNode?.next || null;
//             this.size-=1;
//         }
//     }
// }

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.size) return -1;
        let cur = this.head.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new ListNode(val);
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        const node = new ListNode(val);
        node.next = cur.next;
        cur.next = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index >= this.size) return;
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.size--;
    }
}
