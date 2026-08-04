class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let res = [];
        let perms = [];
        let count = {};

        for(let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const dfs = () => {
            if(perms.length === nums.length) {
                res.push([...perms]);
                return;
            }

            for(let num in count) {
                if(count[num] > 0) {
                    perms.push(+num);
                    count[num] -= 1;

                    dfs();
                    perms.pop();
                    count[num] += 1;
                }
            }
        }

        dfs();
        return res;
    }
}
