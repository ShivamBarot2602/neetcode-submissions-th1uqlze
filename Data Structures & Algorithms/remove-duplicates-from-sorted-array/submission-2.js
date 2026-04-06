class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // removeDuplicates(nums) {
    //     let l=1;

    //     for(let r=1; r<nums.length; r++) {
    //         if(nums[r] !== nums[r-1]) {
    //             nums[l] = nums[r];
    //             l++;
    //         }
    //     }

    //     return l
    // }

    // removeDuplicates(nums) {
    //     let n=nums.length;
    //     let l=0;
    //     let r=0;

    //     while(r < n) {
    //         nums[l] = nums[r];
    //         while(r < n && nums[l] === nums[r]) {
    //             r++;
    //         }
    //         l++;
    //     }

    //     return l
    // }





    removeDuplicates(nums) {
        let l=1;

        for(let r=1; r<nums.length; r++) {
            if(nums[r] !== nums[r-1]) {
                nums[l] = nums[r];
                 l++;
            }
        }

        return l
    }
}
