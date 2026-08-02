class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const generateCombinations = (i, res, curr, sum) => {
            if(sum === target) {
                res.push([...curr]);
                return;
            }

            if(i >= nums.length || sum > target) {
                return;
            }

            curr.push(nums[i]);
            generateCombinations(i, res, curr, sum+nums[i]);

            curr.pop();
            generateCombinations(i+1, res, curr, sum)
        }

        generateCombinations(0, res, [], 0);
        return res
    }
}
