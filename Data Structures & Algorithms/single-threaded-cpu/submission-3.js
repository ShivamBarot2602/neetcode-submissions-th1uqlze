class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let heap = new PriorityQueue((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
        for(let i=0; i<tasks.length; i++) {
            tasks[i] = [...tasks[i], i];
        }
        
        tasks.sort((a, b) => a[0] - b[0]);
        let i=0;
        let time = tasks[0][0];
        let order = []

        while(heap.size() > 0 || i < tasks.length) {
            while(i < tasks.length && tasks[i][0] <= time) {
                heap.enqueue([tasks[i][1], tasks[i][2]]);
                i+=1;
            }
            if(heap.isEmpty()) {
                time = tasks[i][0]
            } else {
                let [processedTime, index] = heap.dequeue();
                time += processedTime;
                order.push(index);
            }
        }

        return order;
    }
}
