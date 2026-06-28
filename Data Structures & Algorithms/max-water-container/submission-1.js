class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let L = 0;
        let R = heights.length-1;

        while(L < R) {
            let width = R-L;
            let height = Math.min(heights[L], heights[R]);
            let area = width * height;
            res = Math.max(res, area);
            if(heights[L] < heights[R]) {
                L++;
            } else {
                R--;
            }
        }
        return res
    }
}
