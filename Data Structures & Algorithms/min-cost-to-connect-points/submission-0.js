class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let adj = new Map();
        for(let i=0; i<points.length; i++) {
            adj.set(i ,[])
        }
        for(let i=0; i<points.length; i++) {
            let [x1, y1] = points[i];
            for(let j=i+1; j<points.length; j++) {
                let [x2, y2] = points[j];
                let dist = Math.abs(x1-x2) + Math.abs(y1-y2);

                adj.get(i).push([dist, j]);
                adj.get(j).push([dist, i])
            }
        }

        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        let visit = new Set();
        minHeap.enqueue([0, 0]);
        let total = 0;

        while(!minHeap.isEmpty()) {
            let [wt1, j] = minHeap.dequeue();
            if(visit.has(j)) continue;

            visit.add(j);
            total += wt1;

            for(let [wt2, neighbor] of adj.get(j)) {
                if(visit.has(neighbor)) continue;
                minHeap.enqueue([wt2, neighbor]);
            }
        }

        return total
    }
}
