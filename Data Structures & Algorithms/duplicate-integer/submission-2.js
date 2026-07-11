class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const map = new Map();

    //     for(const num of nums) {
    //         if(map.has(num)) {
    //             return true
    //         } else {
    //             map.set(num, (map.get(num) || 0) + 1)
    //         }
    //     }

    //     return false
    // }

    hasDuplicate(nums) {
        let set = new Set();

        for(let num of nums) {
            if(set.has(num)) {
                return true;
            }
            set.add(num);
        }

        return false
    }
}
