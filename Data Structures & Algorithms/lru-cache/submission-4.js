class Node {
    constructor(key, val) {
        this.next=null;
        this.prev=null;
        this.key = key;
        this.val=val;
    }
}
// class LRUCache {
//     /**
//      * @param {number} capacity
//      */
//     constructor(capacity) {
//         this.head = null;
//         this.tail = null;
//         this.capacity = capacity;
//         this.size = 0;
//         this.map = new Map();
//     }

//     /**
//      * @param {number} key
//      * @return {number}
//      */
//     get(key) {
//         // console.log("Get Key ", key, "Map ",this.map)
//         // console.log("Start ",this.head, ' Tail ',this.tail)
//         if(this.map.has(key)) {
//             let curr = this.map.get(key);
//             let prev = curr.prev;
//             let next = curr.next;

//             // console.log("Test Curr ",curr, " Prev ",prev, " Next ",next, "KEy ",key)

//             if(!prev && !next) {
//                 return curr.val[1]
//             }

//             if(prev) {
//                 prev.next = curr.next;
//             }
//             if(next) {
//                 next.prev = curr.prev;
//             }
            
//             // console.log("here ",curr, "Tail ",this.tail)
//             console.log("Val ",this.head.val, "Key ",key)
//             if(this.head.val[0] === key) {
//                 this.head = this.head.next;
//             }
//             curr.prev = this.tail;
//             this.tail.next = curr;
//             curr.next = null;
//             this.tail = curr;

//             // console.log("Head ",this.head, " Tail ",this.tail, "Key ",key)
//             // console.log("Curr ",curr, " Key ",key)

//             return curr.val[1];
//         }
//         return -1
//     }

//     /**
//      * @param {number} key
//      * @param {number} value
//      * @return {void}
//      */
//     put(key, value) {
//        if(this.map.has(key)) {
//             let curr = this.map.get(key);
//             curr.val[1] = value;
//             let prev = curr.prev;
//             let next = curr.next;
//             // console.log("Shivam Curr ",curr, " Prev ",prev, " Next ",next)

//             if(prev) {
//                 prev.next = curr.next;
//             }
//             if(next) {
//                 next.prev = curr.prev;
//             }

//             this.tail.next = curr; 
//             curr.prev = this.tail;
//             curr.next = null;
//             this.tail = curr;
//        } else {
//             let node = new Node([key, value]);
//             // console.log("Node ",node)
//             if(this.size === 0) {
//                 this.tail = node;
//                 this.head = node;
//                 this.size += 1;
//                 this.map.set(key, node);

//                 return
//             }
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//             this.size += 1;

//             // console.log("NODE ", node, "Key",key)

//             this.map.set(key, node);

//             // console.log("Map ",this.map)

//             if(this.size > this.capacity) {
//                 this.map.delete(this.head.val[0])
//                 this.head = this.head.next;
//                 this.head.prev = null;
//                 this.size -= 1;
//             }
//        }
//     }
// }

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
    }

    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    put(key, val) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, val);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
