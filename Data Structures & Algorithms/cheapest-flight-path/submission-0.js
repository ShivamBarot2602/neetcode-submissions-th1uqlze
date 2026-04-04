class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let adj = {};
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        for(let i=0; i<n; i++) {
            adj[i] = []
        }
        for(let [src, dst, wt] of flights) {
            adj[src].push([dst, wt]);
        }
        const q = new Queue([[0, src, 0]]);

        while(!q.isEmpty()) {
            let [cost, src, stops] = q.dequeue();
            if(stops > k) continue;

            for(const [nei, wt] of adj[src]) {
                const nextCost = cost + wt;
                if(nextCost < prices[nei]) {
                    prices[nei] = nextCost;
                    q.enqueue([nextCost, nei, stops+1]);
                }
            }
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
