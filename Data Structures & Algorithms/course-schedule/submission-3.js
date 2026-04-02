class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    // canFinish(numCourses, prerequisites) {
    //     if(prerequisites.length === 0) return true
    //     let courseMap = new Map();

    //     for(let i=0; i<numCourses; i++) {
    //         courseMap.set(i, [])
    //     }

    //     for(let [src, dst] of prerequisites) {
    //         courseMap.get(src).push(dst);
    //     }

    //     let visit = new Set()

    //     for(let i=0; i< numCourses; i++) {
    //         if(!this.dfs(i, courseMap, visit)) return false
    //     }

    //     return true
    // }

    // dfs(node, courseMap, visit) {
    //     if(visit.has(node)) {
    //         return false
    //     }
    //     if(courseMap.get(node).length === 0) {
    //         return true
    //     }

    //     visit.add(node);
    //     for(const neighbor of courseMap.get(node)) {
    //         if(!this.dfs(neighbor, courseMap, visit)) {
    //             return false
    //         }
    //     }

    //     visit.delete(node);
    //     courseMap.set(node, [])
    //     return true
    // }

    canFinish(numCourses, prerequisites) {
        let adj = new Map();

        for(let i=0; i<numCourses; i++) {
            adj.set(i, []);
        }

        for(let [src, dst] of prerequisites) {
            adj.get(src).push(dst);
        }

        let visit = new Set();

        const dfs = (src) => {
            if(visit.has(src)) {
                return false;
            }
            if(adj.get(src).length === 0) {
                return true;
            }
            visit.add(src);

            for(let neighbor of adj.get(src)) {
                if(!dfs(neighbor)) {
                    return false;
                }
            }
            visit.delete(src);
            adj.set(src, []);
            return true
        }
        
        for(let i=0; i<numCourses; i++) {
            if(!dfs(i)) {
                return false
            }
        }

        return true;
    }
}
