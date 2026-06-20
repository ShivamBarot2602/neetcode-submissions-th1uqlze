class KthLargest {
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;

        for(const num of nums) {
            this.minHeap.enqueue(num);
        }

        while(this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    add(val) {
        this.minHeap.enqueue(val);

        while(this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
