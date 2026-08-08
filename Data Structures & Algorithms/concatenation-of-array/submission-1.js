class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res = [];
        for(let i=0; i<2; i++){
            for(let j=0; j<nums.length; j++) {
                res.push(nums[j]);
            }
        }

        return res;
    }
}
