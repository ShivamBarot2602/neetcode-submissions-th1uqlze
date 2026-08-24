class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let visited = new Array(ROWS).fill().map(() => new Array(COLS).fill(0));
        let area = 0;

        console.log("Visited ",visited)

        for(let r=0; r<ROWS; r++) {
            for(let c=0; c<COLS; c++) {
                if(grid[r][c] === 1) {
                    area = Math.max(area, this.dfs(r, c, ROWS, COLS, grid, visited))
                }
            }
        }

        return area
    }

    dfs(r, c, ROWS, COLS, grid, visited) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        if(r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0 || visited[r][c] === 1) {
            return 0
        }

        console.log("Here ", r, c)

        visited[r][c] = 1;
        let count = 1;

        for(let [dr, dc] of directions) {
            count += this.dfs(r+dr, c+dc, ROWS, COLS, grid, visited);
        }

        console.log("Count ",count)
        return count;
    }
}
