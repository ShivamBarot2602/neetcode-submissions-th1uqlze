class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums, p) {
        if(p === 0) return 0
        nums.sort((a, b) => a-b)
        let l=0;
        let r=nums[nums.length-1] - nums[0];
        let res=0;

        const isValid = (threshold) => {
            let count=0;
            let i=0;

            while(i < nums.length) {
                if(Math.abs(nums[i] - nums[i+1]) <= threshold) {
                    count+=1;
                    i+=2;
                } else {
                    i+=1;
                }

                if(count === p) {
                    return true
                }
            }

            return false
        }

        while(l <= r) {
            let mid = Math.trunc((l+r)/2);

            if(isValid(mid)) {
                res=mid;
                r=mid-1;
            } else {
                l=mid+1;
            }
        }

        return res
    }
}
