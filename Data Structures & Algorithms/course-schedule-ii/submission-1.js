class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    // findOrder(numCourses, prerequisites) {
    //     let preMap = new Map();

    //     for(let r=0; r<numCourses; r++) {
    //         preMap.set(r, new Array());
    //     }

    //     for(let [crs, pre] of prerequisites) {
    //         preMap.get(crs).push(pre)
    //     }

    //     let visit = new Set();
    //     let cycle = new Set();
    //     let output = []

    //     for(let r=0; r<numCourses; r++) {
    //         if(!this.dfs(r, preMap, numCourses, visit, cycle, output)) {
    //             return []
    //         } 
    //     }

    //     return output
    // }

    // dfs(crs, preMap, numCourses, visit, cycle, output) {
    //     if(cycle.has(crs)) {
    //         return false
    //     }

    //     if(visit.has(crs)) {
    //         return true
    //     }

    //     cycle.add(crs);
    //     for(let pre of preMap.get(crs) || []) {
    //         if(!this.dfs(pre, preMap, numCourses, visit, cycle, output)) {
    //             return false
    //         }
    //     }
    //     visit.add(crs);
    //     cycle.delete(crs)
    //     output.push(crs)
    //     return true;
    // }

     findOrder(numCourses, prerequisites) {
        let adj = new Map();

        for(let i=0; i<numCourses; i++) {
            adj.set(i, []);
        }

        for(let [crs, dst] of prerequisites) {
            adj.get(crs).push(dst);
        }

        let visit = new Set();
        let path = new Set();
        let topSort = [];

        const dfs = (src) => {
            if(path.has(src)) {
                return false
            }
            if(visit.has(src)) {
                return true;
            }
            path.add(src)
            for(let neighbor of adj.get(src)) {
                if(!dfs(neighbor)) {
                    return false
                }
            }
            visit.add(src);
            path.delete(src);
            topSort.push(src);
            return true;
        }

        for(let i=0; i<numCourses; i++) {
            if(!dfs(i)) {
                return []
            }
        }

        return topSort
     }
}
