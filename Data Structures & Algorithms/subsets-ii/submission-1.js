class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        let res = [];
        let subsets = [];
        
        const generateSubsets = (i) => {
            if(i >= nums.length) {
                res.push([...subsets]);
                return
            }

            subsets.push(nums[i]);
            generateSubsets(i+1);

            subsets.pop();
            while(i+1 < nums.length && nums[i] === nums[i+1]) {
                i+=1;
            }
            generateSubsets(i+1);
        }

        generateSubsets(0);
        return res;
    }
}
