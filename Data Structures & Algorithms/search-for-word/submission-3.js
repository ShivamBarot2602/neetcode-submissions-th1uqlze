class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    // exist(board, word) {
    //     let ROWS=board.length;
    //     let COLS=board[0].length;
    //     let visit = new Array(ROWS).fill().map(() => new Array(COLS).fill(0));

    //     const dfs = (r, c, i) => {
    //         if(i === word.length) {
    //             return true
    //         }

    //         if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visit[r][c] === 1 || word[i] !== board[r][c]) {
    //             return false
    //         }

    //         let res = false;
    //         visit[r][c] = 1;
    //         res = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
    //         visit[r][c] = 0;

    //         return res;
    //     }

    //     for(let r=0; r<ROWS; r++) {
    //         for(let c=0; c<COLS; c++) {
    //             if(dfs(r, c, 0)) {
    //                 return true;
    //             }
    //         }
    //     }

    //     return false;
    // }

    exist(board, word) {
        let ROW=board.length;
        let COL=board[0].length;
        let visit = new Array(ROW).fill().map(() => new Array(COL).fill(0));

        const dfs = (r, c, i) => {
            if(i === word.length) {
                return true
            }

            if(r < 0 || c < 0 || r >= ROW || c >= COL || board[r][c] !== word[i] || visit[r][c] === 1) {
                return false
            }

            let res = false;
            visit[r][c] = 1;
            res = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
            visit[r][c] = 0;

            return res;
        }

        for(let i=0; i<ROW; i++) {
            for(let j=0; j<COL; j++) {
                if(dfs(i, j, 0)) {
                    return true
                }
            }
        }

        return false;
    }
}
