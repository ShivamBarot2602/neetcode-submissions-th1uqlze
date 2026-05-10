class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l=0;
        let r=nums.length-1;

        while(l <= r) {
            let mid = Math.trunc((l + r) / 2);

            if(nums[mid] === target) {
                return true
            }

            // mid in left portion of the array
            if(nums[l] < nums[mid]) {
                if(target < nums[l] || target > nums[mid]) {
                    l=mid+1;
                } else {
                    r=mid-1;
                }
            } else if(nums[l] > nums[mid]) {
                if(target > nums[r] || target < nums[mid]) {
                    r=mid-1;
                } else {
                    l=mid+1;
                }
            } else {
                l+=1;
            }
        }

        return false
    }
}
