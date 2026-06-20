class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    // kClosest(points, k) {
    //     const maxHeap = new PriorityQueue((a, b) => b[0]- a[0]);

    //     for(const point of points) {
    //         let [x1, y1] = point
    //         let dist = (x1-0) ** 2 + (y1-0) ** 2;

    //         maxHeap.push([dist, x1, y1]);

    //         if(maxHeap.size() > k) {
    //             maxHeap.pop()
    //         } 
    //     }

    //     let res = [];

    //     while(maxHeap.size() > 0) {
    //         let temp = maxHeap.pop();

    //         res.push([temp[1], temp[2]])
    //     }

    //     return res
    // }

    // kClosest(points, k) {
    //     let maxHeap = new PriorityQueue((a, b) => b[0]-a[0]);

    //     for(const [x, y] of points) {
    //         let dist = (x-0) ** 2 + (y-0) ** 2;

    //         maxHeap.push([dist, x, y]);

    //         if(maxHeap.size() > k) {
    //             maxHeap.pop()
    //         }
    //     }

    //     let result = []

    //     while(maxHeap.size() > 0) {
    //         let max = maxHeap.pop()
    //         result.push([max[1], max[2]])
    //     }

    //     return result
    // }

    kClosest(points, k) {
        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

        for(const point of points) {
            let [x1, y1] = point;
            let dist = x1 ** 2 + y1 ** 2;
            minHeap.enqueue([dist, point]);
        }

        let res = [];

        for(let i=0; i<k; i++) {
            res.push(minHeap.dequeue()[1])
        }

        return res
    }
}
