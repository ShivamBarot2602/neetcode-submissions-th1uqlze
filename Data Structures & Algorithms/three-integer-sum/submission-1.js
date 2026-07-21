class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];

        for(let i=0; i<nums.length; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;

            let L = i+1;
            let R = nums.length - 1;
            while(L < R) {
                let sum = nums[i] + nums[L] + nums[R];
                if(sum < 0) {
                    L++
                } else if(sum > 0) {
                    R--;
                } else {
                    res.push([nums[i], nums[L], nums[R]]);
                    L++;
                    R--;
                    while(L<R && nums[L] === nums[L-1]) {
                        L++;
                    }
                }
            }
        }
        return res
    }
}
