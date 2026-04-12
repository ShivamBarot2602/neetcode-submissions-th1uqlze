class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let l=0;
        let res = Infinity;

        for(let r=0; r<nums.length; r++) {
            if(r-l+1 < k) {
                continue;
            }
            res = Math.min(res, nums[r]-nums[l]);
            l++;
        }

        return res
    }
}
