class MyStack {
    constructor() {
        this.queue = new Array();
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
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
            this.rear -= 1;
            this.size -= 1;
            return this.queue.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.size === 0) {
            return null
        } else {
            return this.queue[this.rear-1];
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.size === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
