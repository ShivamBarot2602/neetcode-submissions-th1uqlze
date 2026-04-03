class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        let adj = new Map();
        
        for(let i=0; i<numCourses; i++) {
            adj.set(i, []);
        }

        for(let [dst, src] of prerequisites) {
            adj.get(src).push(dst);
        }

        let resMap = new Map();
        let res = [];

        const dfs = (src) => {
            if(resMap.has(src)) {
                return resMap.get(src);
            }

            let visit = new Set();
            for(let neighbor of adj.get(src)) {
                for(let pre of dfs(neighbor)) {
                    visit.add(pre);
                }
            }
            visit.add(src);
            resMap.set(src, visit);
            return visit;
        }

        for (let i=0; i<numCourses; i++) {
            dfs(i)
        }

        for(let [dst, src] of queries) {
            res.push(resMap.get(src).has(dst));
        }

        return res;
    }
}
