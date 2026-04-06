class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l=0;
        let r=nums.length-1;
        let res = [];

        while(l <= r) {
            if(nums[l] * nums[l] > nums[r] * nums[r]) {
                res.push(nums[l] * nums[l]);
                l++;
            } else {
                res.push(nums[r] * nums[r]);
                r--;
            }
        }
        
        return res.reverse()
    }
}
