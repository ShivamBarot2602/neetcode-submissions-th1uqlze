// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     /**
//      * @param {number} index
//      * @return {number}
//      */
//     get(index) {
//         if(this.size === 0 || index > this.size-1){
//             return -1
//         } else {
//             let ptr = this.head;
//             let i = 0;
            
//             while(index !== i){
//                 ptr = ptr.next;
//                 i++;
//             }
//             return ptr.val;
//         }
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     insertHead(val) {
//         const node = new Node(val);
//         if(this.size === 0){
//             this.head = node;
//             this.size++
//         } else {
//             node.next = this.head;
//             this.head = node;
//             this.size++;
//         }
//     }

//     /**
//      * @param {number} val
//      * @return {void}
//      */
//     insertTail(val) {
//         const node = new Node(val);
//         if(this.size === 0){
//             this.head = node;
//             this.size++
//         } else {
//             let ptr = this.head;
//             while(ptr.next !== null){
//                 ptr = ptr.next;
//             }
//             ptr.next = node;
//             this.size++;
//         }
//     }

//     /**
//      * @param {number} index
//      * @return {boolean}
//      */
//     remove(index) {
//         if(index < 0 || index > this.size || index > this.size-1){
//             return false
//         }

//         let removeNode
//         if(index === 0){
//             removeNode = this.head;
//             this.head = this.head.next
//         } else if(this.size === 1){
//             this.head = null;
//         } else {
//             let ptr = this.head;
//             for(let i=0; i<index-1;i++){
//                 ptr = ptr.next;
//             }
//             removeNode = ptr.next;
//             ptr.next = removeNode?.next;
//         }
//         this.size--;
//         return true
//     }

//     /**
//      * @return {number[]}
//      */
//     getValues() {
//         if(this.size === 0){
//             return []
//         } else {
//             let arr = [];
//             let ptr = this.head;
//             while(ptr){
//                 arr.push(ptr.val)
//                 ptr = ptr.next;
//             }

//             console.log("Arr ",arr)

//             return arr
//         }
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size=0;
        this.head=null;
        this.tail=null;
    }

    get(i) {
        if(this.size === 0 || i > this.size - 1) {
            return -1;
        }
        let ptr = this.head;
        let idx=0
        while(idx !== i) {
            ptr=ptr.next;
            idx+=1
        }

        return ptr.val
    }

    insertHead(val) {
        let node = new Node(val);
        if(this.size === 0) {
            this.head = node;
        } else {
           node.next = this.head;
           this.head = node;
        }
        this.size+=1;
    }

    insertTail(val) {
        const node = new Node(val);
        if(this.size === 0) {
            this.head = node;
        } else {
            let ptr = this.head;

            while(ptr.next !== null) {
                ptr = ptr.next;
            }
            ptr.next = node;
        }
        this.size += 1;
    }

    remove(i) {
        if(i < 0 || i > this.size || i > this.size - 1) {
            return false
        } 
        
        let removeNode
        if(i === 0) {
            removeNode = this.head;
            this.head = this.head.next
        } else if (this.size === 1) {
            this.head = null;
        }
        else {
            let ptr = this.head;
            for(let j=0; j<i-1;j++){
                ptr = ptr.next;
            }
            removeNode = ptr.next;
            ptr.next = removeNode?.next;
        }
        this.size -= 1;
        return true
    }

    // remove(index) {
    //     if(index < 0 || index > this.size || index > this.size-1){
    //         return false
    //     }

    //     let removeNode
    //     if(index === 0){
    //         removeNode = this.head;
    //         this.head = this.head.next
    //     } else if(this.size === 1){
    //         this.head = null;
    //     } else {
    //         let ptr = this.head;
    //         for(let i=0; i<index-1;i++){
    //             ptr = ptr.next;
    //         }
    //         removeNode = ptr.next;
    //         ptr.next = removeNode?.next;
    //     }
    //     this.size--;
    //     return true
    // }

    getValues() {
        let arr = [];
        let ptr = this.head;

        while(ptr) {
            arr.push(ptr.val);
            ptr = ptr.next;
        }
        console.log("Arr ",arr)
        return arr
    }
}
