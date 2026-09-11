class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROW=grid.length;
        let COL=grid[0].length;
        let visit = new Set();
        let queue = new Queue();
        let fresh=0;
        let time=0;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        for(let i=0; i<ROW; i++) {
            for(let j=0; j<COL; j++) {
                if(grid[i][j] === 1) {
                    fresh++;
                }
                if(grid[i][j] === 2) {
                    queue.enqueue([i, j])
                }
            }
        }

        while(!queue.isEmpty()) {
            let queueLength = queue.size();

            if(fresh === 0) {
                return time;
            }

            for(let i=0; i<queueLength; i++) {
                let [r, c] = queue.dequeue();

                for(let [dr, dc] of directions) {
                    let nr=r+dr;
                    let nc=c+dc;

                    if(nr<0 || nr===ROW || nc<0 || nc===COL || grid[nr][nc] !== 1 || visit.has(`${nr}-${nc}`)) {
                        continue
                    }

                    queue.enqueue([nr, nc]);
                    visit.add(`${nr}-${nc}`);
                    fresh--;
                }
            }

            time+=1;
        }

        return time !== 0 || fresh !== 0 ? -1 : 0
    }
}
