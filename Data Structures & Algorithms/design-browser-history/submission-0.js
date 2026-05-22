class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        let node = new Node(homepage);
        this.curr = node;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let node = new Node(url);

        this.curr.next = node;
        node.prev = this.curr;
        this.curr = this.curr.next
        console.log("Visit ",this.head, " curr ",this.curr)
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
       while(this.curr.prev && steps > 0) {
        this.curr = this.curr.prev;
        steps -= 1;
       }

       return this.curr.val
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
       while(this.curr.next && steps > 0) {
        this.curr = this.curr.next;
        steps -= 1;
       }

       return this.curr.val
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
