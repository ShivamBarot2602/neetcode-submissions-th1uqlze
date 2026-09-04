class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preReqMap = {};

        for(let [c1, c2] of prerequisites) {
            if(!preReqMap[c1]) {
                preReqMap[c1] = []
            }
            if(!preReqMap[c2]) {
                preReqMap[c2] = []
            }
            preReqMap[c1].push(c2);
        }
        let visit = new Set();

        const dfs = (node) => {
            if(visit.has(node)) {
                return false
            }
            if(preReqMap[node].length === 0) {
                return true
            }

            visit.add(node);
            for(let neighbor of preReqMap[node]) {
                if(!dfs(neighbor)) {
                    return false
                }
            }
            visit.delete(node);
            preReqMap[node] = [];

            return true;
        }

        for(let [key, value] of Object.entries(preReqMap)) {
            if(!dfs(key)) {
                return false
            }
        }

        return true
    }
}
