class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // subsets(nums) {
    //     let res = [];
    //     let subSets = [];

    //     const dfs = (i, subSets, res) => {
    //         if(i >= nums.length) {
    //             res.push([...subSets])
    //             return
    //         }

    //         subSets.push(nums[i]);
    //         dfs(i+1, subSets, res);

    //         subSets.pop();
    //         dfs(i+1, subSets, res);
    //     }

    //     dfs(0, subSets, res);
    //     return res
    // }

    subsets(nums) {
        let res = [];
        let subsets = [];

        const generateDFS = (i) => {
            if(i >= nums.length) {
                res.push([...subsets]);
                return res;
            }

            subsets.push(nums[i]);
            generateDFS(i+1);

            subsets.pop();
            generateDFS(i+1);
        }

        generateDFS(0);
        return res
    }
}
