class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let l=0;
        let r=nums.length-1;

        while(l <= r) {
            let mid = Math.trunc((l+r)/2);

            if(
                (mid-1 < 0 || nums[mid-1] !== nums[mid]) &&
                (mid+1 === 0 || nums[mid+1] !== nums[mid])
            ) {
                return nums[mid]
            }
            
            let leftSize = mid-1 >= 0 && nums[mid-1] === nums[mid] ? mid-1 : mid;

            if(leftSize % 2 === 1) {
                r=mid-1
            } else {
                l=mid+1
            }
        }
    }
}
