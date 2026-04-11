class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    // minSubArrayLen(target, nums) {
    //     let l=0;
    //     let sum = 0;
    //     let res = Number.POSITIVE_INFINITY;

    //     for(let r=0; r<nums.length; r++) {
    //         sum = sum+nums[r];

    //         while(sum >= target) {
    //             sum = sum-nums[l];
    //             res = Math.min(r-l+1, res);
    //             l++
    //         }
    //     }

    //     return res === Number.POSITIVE_INFINITY ? 0 : res
    // }

    minSubArrayLen(target, nums) {
        let l=0;
        let length = Number.POSITIVE_INFINITY;
        let total=0;

        for(let r=0; r<nums.length; r++) {
            total += nums[r];

            while(total >= target) {
                length = Math.min(length, r-l+1);
                total -= nums[l];
                l++;
            }
        }

        console.log("Length ",length)

        return length === Number.POSITIVE_INFINITY ? 0 : length
    }
}
