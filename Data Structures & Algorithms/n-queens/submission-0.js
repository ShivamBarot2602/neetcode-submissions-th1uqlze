class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    // solveNQueens(n) {
    //     const col = new Set();
    //     const posDiag = new Set();
    //     const negDiag = new Set();

    //     const res = [];
    //     const board = Array.from({ length: n }, () => Array(n).fill('.'));

    //     /**
    //      * @param {number} r
    //      * @return {void}
    //      */
    //     function backtrack(r) {
    //         if (r === n) {
    //             res.push(board.map((row) => row.join('')));
    //             return;
    //         }

    //         for (let c = 0; c < n; c++) {
    //             if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
    //                 continue;
    //             }

    //             col.add(c);
    //             posDiag.add(r + c);
    //             negDiag.add(r - c);
    //             board[r][c] = 'Q';

    //             this.backtrack(r + 1);

    //             col.delete(c);
    //             posDiag.delete(r + c);
    //             negDiag.delete(r - c);
    //             board[r][c] = '.';
    //         }
    //     }

    //     this.backtrack(0);
    //     return res;
    // }

    solveNQueens(n) {
        let col = new Set();
        let posDiagonal = new Set();
        let negDiagonal = new Set();
        let board = Array.from({ length: n }, () => Array(n).fill('.'));
        let res = [];

        const backtrack = (r) => {
            if(r === n) {
                res.push(board.map((row) => row.join('')));
                return;
            }

            for(let c=0; c<n; c++) {
                if(col.has(c) || posDiagonal.has(r+c) || negDiagonal.has(r-c)) {
                    continue;
                }

                col.add(c);
                posDiagonal.add(r+c);
                negDiagonal.add(r-c);
                board[r][c] = 'Q';

                backtrack(r+1);

                col.delete(c);
                posDiagonal.delete(r+c);
                negDiagonal.delete(r-c);
                board[r][c] = '.';
            }
        }

        backtrack(0);

        return res
    }
}
