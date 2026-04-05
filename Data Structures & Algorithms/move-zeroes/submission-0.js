class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    // moveZeroes(nums) {
    //     let l=0; 
    //     let r=nums.length-1;

    //     while(l < r) {
    //         console.log("Inside ", nums, " L ",l, " R ",r)
    //         if(nums[l] === 0) {
    //             nums.push(0);
    //             nums.splice(l, 1);
    //             l++;
    //         } else if(nums[r] === 0) {
    //             nums.push(0);
    //             nums.splice(r, 1);
    //             r--;
    //         }else if(nums[r] !== 0 && nums[l] !== 0) {
    //             l++;
    //             r--;
    //         }
    //     }
    //     console.log("Nums ",nums)
    // }
        moveZeroes(nums) {
        let l=0; 

        for(let r=0; r<nums.length; r++) {
            if(nums[r] !== 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
        }

        return nums
    }
}
