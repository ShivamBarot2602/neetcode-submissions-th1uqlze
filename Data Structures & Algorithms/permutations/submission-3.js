class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Recursive sol
    // permute(nums) {
    //     const generatePermutations = (i) => {
    //         if(i >= nums.length) {
    //             return [[]]
    //         }

    //         let resPerms = [];
    //         let perms = generatePermutations(i+1);

    //         for(let p of perms) {
    //             for(let j=0; j<p.length+1; j++) {
    //                 let pCopy = [...p];
    //                 pCopy.splice(j, 0, nums[i]);
    //                 resPerms.push(pCopy);
    //             }
    //         }

    //         return resPerms
    //     }

    //     return generatePermutations(0)
    // }

    // Iterative sol
    // permute(nums) {
    //     let perms = [[]];

    //     for(let i=0; i<nums.length; i++) {
    //         let nextPerms = [];
    //         for(let p of perms) {
    //             for(let j=0; j<p.length+1; j++) {
    //                 let pCopy = [...p];
    //                 pCopy.splice(j, 0, nums[i]);
    //                 nextPerms.push(pCopy);
    //             }
    //         }
    //         perms = nextPerms
    //     }

    //     return perms
    // }



    permute(nums) {
        const generatePermutations = (i) => {
            if(i >= nums.length) {
                return [[]]
            }
            let resPerms = [];
            let perms = generatePermutations(i+1);

            for(let perm of perms) {
                for(let j=0; j<perm.length+1; j++) {
                    let pCopy = [...perm];
                    pCopy.splice(j, 0, nums[i]);
                    resPerms.push(pCopy);
                }
            }
            
            return resPerms;
        }

        return generatePermutations(0);
    }
}
