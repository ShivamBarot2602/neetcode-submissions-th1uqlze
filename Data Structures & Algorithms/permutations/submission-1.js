class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Recursive sol
    permute(nums) {
        const generatePermutations = (i) => {
            if(i >= nums.length) {
                return [[]]
            }

            let resPerms = [];
            let perms = generatePermutations(i+1);

            for(let p of perms) {
                for(let j=0; j<p.length+1; j++) {
                    let pCopy = [...p];
                    pCopy.splice(j, 0, nums[i]);
                    resPerms.push(pCopy);
                }
            }

            return resPerms
        }

        return generatePermutations(0)
    }
}
