class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // longestConsecutive(nums) {
    //     let set = new Set(nums);
    //     let longest = 0;

    //     for(let i=0; i< nums.length; i++) {
    //         if(!set.has(nums[i] - 1)) {
    //             let largest = 1;
    //             while(set.has(nums[i]+largest)) {
    //                 largest++;
    //             }
    //             longest = Math.max(longest, largest)
    //         }
    //     }

    //     return longest
    // }

    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            if(!set.has(num-1)) {
                let length = 1;

                while(set.has(num+length)) {
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest
    }
}
