class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        g.sort((a, b) => a - b)
        s.sort((a, b) => a - b)

        let l=0;
        let r=0;
        let count=0;

        while(l < g.length && r < s.length) {
            if(g[l] <= s[r]) {
                count++;
                l++;
                r++;
            } else {
                r++
            }
        }

        return count
    }
}
