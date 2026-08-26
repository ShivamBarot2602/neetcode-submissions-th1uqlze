class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // shortestPathBinaryMatrix(grid) {
    //     let ROW = grid.length;
    //     let COL = grid[0].length;
    //     if(grid[0][0] === 1) return -1
    //     let directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
    //     let length = 1
    //     let queue = new Queue()
    //     queue.enqueue([0, 0]);

    //     while(!queue.isEmpty()) {
    //         let queueLength = queue.size();
    //         for(let i=0; i<queueLength; i++) {
    //             let [r, c] = queue.dequeue();

    //             if(r === ROW-1 && c === COL-1) {
    //                 return length;
    //             }

    //             for(let [dr, dc] of directions) {
    //                 let nr = r+dr;
    //                 let nc = c+dc;

    //                 if(nr < 0 || nc < 0 || nr === ROW || nc === COL || grid[nr][nc] === 1) {
    //                     continue;
    //                 }

    //                 queue.enqueue([nr, nc])
    //                 grid[nr][nc] = 1;
    //             }
    //         }

    //         length += 1;
    //     }
    //       return -1
    // }

    shortestPathBinaryMatrix(grid) {
        let ROW = grid.length;
        let COL = grid[0].length;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
        if(grid[0][0] === 1) return -1
        let queue = new Queue();
        queue.enqueue([0, 0])
        let visit = new Set();
        let length = 1;

        while(!queue.isEmpty()) {
            let queueLength = queue.size();
            for(let i=0; i<queueLength; i++) {
                let [r, c] = queue.dequeue();

                if(r === ROW-1 && c === COL-1) {
                    return length;
                }

                for(let [dr, dc] of directions) {
                    let nr = r+dr;
                    let nc = c+dc;

                    if(nr < 0 || nr === ROW || nc < 0 || nc === COL || grid[nr][nc] === 1 || visit.has(`${nr}-${nc}`)) {
                        continue;
                    }

                    queue.enqueue([nr, nc]);
                    visit.add(`${nr}-${nc}`);
                }
            }
            length += 1;
        }

        return -1
    }
}
