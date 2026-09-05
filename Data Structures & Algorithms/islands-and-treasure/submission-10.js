class Solution {
    /**
     * @param {number[][]} grid
     */
    // islandsAndTreasure(grid) {
    //     let ROW=grid.length;
    //     let COL=grid[0].length;
    //     let treasure = [];
    //     let visit = new Set()
    //     let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    //     for(let r=0; r<ROW; r++) {
    //         for(let c=0; c<COL; c++) {
    //             if(grid[r][c] === 0) {
    //                 treasure.push([r, c]);
    //             }
    //         }
    //     }

    //     const dfs = (r, c, length, visit) => {
    //         if(r<0 || r===ROW || c<0 || c===COL || grid[r][c] === -1 || visit.has(`${r}-${c}`)) {
    //             return;
    //         }
    //         if(length < grid[r][c]) {
    //             grid[r][c] = length;
    //         }

    //         visit.add(`${r}-${c}`)
    //         length += 1;

    //         for(let [dr, dc] of directions) {
    //             let nr = r+dr;
    //             let nc = c+dc;

    //             if(nr<0 || nr===ROW || nc<0 || nc===COL || (grid[nr][nc] !== 2147483647 && grid[nr][nc] < length)) {
    //                 continue
    //             }
    //             dfs(nr, nc, length, visit)
    //         }

    //         // dfs(r+1, c, length, visit);
    //         // dfs(r-1, c, length, visit);
    //         // dfs(r, c+1, length, visit);
    //         // dfs(r, c-1, length, visit);

    //         visit.delete(`${r}-${c}`)
    //         length -= 1;
    //         return;
    //     }

    //     for(let i=0; i<treasure.length; i++) {
    //         dfs(treasure[i][0], treasure[i][1], 0, visit)
    //     }

    //     return grid
    // }

    islandsAndTreasure(grid) {
        let ROW=grid.length;
        let COL=grid[0].length;
        let queue = new Queue();
        let length = 1;
        let visit = new Set()
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        for(let r=0; r<ROW; r++) {
            for(let c=0; c<COL; c++) {
                if(grid[r][c] === 0) {
                    queue.enqueue([r, c]);
                    visit.add(`${r}-${c}`);
                }
            }
        }

        while(!queue.isEmpty()) {
            let queueLength = queue.size();
            for(let i=0; i<queueLength; i++) {
                let [r, c] = queue.dequeue();
                // console.log("R ",r, " C ",c)
                
                for(let [dr, dc] of directions) {
                    let nr=r+dr;
                    let nc=c+dc;
                    // console.log("Nr ",nr, " Nc ",nc)

                    if(nr<0 || nc<0 || nr===ROW || nc===COL || visit.has(`${nr}-${nc}`) || grid[nr][nc] === -1) {
                        continue;
                    }

                    grid[nr][nc] = length;
                    queue.enqueue([nr, nc])
                    visit.add(`${nr}-${nc}`);
                }
            }
            length+=1;
        }

        // console.log("Grid ",grid)
        return grid;
    }
}
