class MyQueue {
    constructor() {
        this.arr = new Array();
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.arr.push(x);
        this.rear += 1;
        this.size += 1;
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.size === 0) {
            return null
        } else {
            let val = this.arr[this.front];
            this.front += 1;
            this.size -= 1;

            return val
        }
    }

    /**
     * @return {number}
     */
    peek() {
        return this.arr[this.front]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.size === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
