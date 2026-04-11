class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let recolor = 0;
        let l = 0;
        let res = k;

        for(let r =0; r<blocks.length; r++) {
            if(blocks[r] === "W") {
                recolor += 1;
            }
            if(r-l+1 === k) {
                res = Math.min(res, recolor);
                if(blocks[l] === "W") {
                    recolor -= 1;
                }
                l++;
            }
        }

        return res
    }
}
