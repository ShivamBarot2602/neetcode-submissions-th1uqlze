class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i=0; i<nums.length;i++){
            let subValue = target - nums[i];
            if(map.has(subValue)){
                return [i, map.get(subValue)]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
