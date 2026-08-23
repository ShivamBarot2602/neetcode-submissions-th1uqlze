class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let ROW=image.length;
        let COL=image[0].length;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let originalColor = image[sr][sc];

        if(image[sr][sc] === color) return image

        const dfs = (r, c) => {
            if(r<0 || c<0 || r===ROW || c===COL || image[r][c] !== originalColor) {
                return
            }

            image[r][c] = color;

            for(let [dr, dc] of directions) {
                let nr=r+dr; 
                let nc=c+dc;

                dfs(nr, nc);
            }
        }

        dfs(sr, sc);
        return image
    }
}
