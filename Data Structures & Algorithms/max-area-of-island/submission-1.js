class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // maxAreaOfIsland(grid) {}
    maxAreaOfIsland(grid) {
        let ROW=grid.length;
        let COL=grid[0].length;
        let visit = new Array(ROW).fill().map(() => new Array(COL).fill(0));
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let area = 0;

        const dfs = (r, c) => {
            if(r < 0 || c < 0 || r === ROW || c === COL || grid[r][c] !== 1 || visit[r][c] === 1) {
                return 0;
            }
            let res = 1;
            visit[r][c] = 1
            for(let [dr, dc] of directions) {
                let nr = r+dr;
                let nc = c+dc;
               
                res += dfs(nr, nc);
            }

            return res
        }

        for(let r=0; r<ROW; r++) {
            for(let c=0; c<COL; c++) {
                if(grid[r][c] === 1 && visit[r][c] === 0) {
                    area = Math.max(area, dfs(r, c));
                }
            }
        }

        return area;
    }
}
