class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let l=0;
        let res=0;
        let product=1;

        for(let r=0; r<nums.length; r++) {
            product = product * nums[r]
            while(l<=r && product >= k) {
                product = product / nums[l];
                l++;
            }
            res += r-l+1; 
        }

        return res
    }
}
