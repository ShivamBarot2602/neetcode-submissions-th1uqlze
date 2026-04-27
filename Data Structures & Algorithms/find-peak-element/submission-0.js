class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        if(nums.length === 1) return 0
        let l=0;
        let r=nums.length-1;

        while(l<=r) {
            let mid = Math.trunc((l+r)/2);

            if(
                (mid <= 0 || (nums[mid] > nums[mid-1])) &&
                (mid >= nums.length-1 || (nums[mid] > nums[mid+1]))
                ) {
                    return mid
                }

            if(nums[mid+1] > nums[mid]) {
                l=mid+1;
            } else if(nums[mid-1] > nums[mid]) {
                r=mid-1;
            }      
        }
    }
}
