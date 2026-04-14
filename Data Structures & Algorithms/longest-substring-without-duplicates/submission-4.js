class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     let l=0;
    //     let arr = [];
    //     let res = Number.NEGATIVE_INFINITY;

    //     for(let r=0; r<s.length; r++) {
    //         while(arr.includes(s[r])) {
    //             arr.shift();
    //             l++;
    //         }
    //         arr.push(s[r])
    //         res = Math.max(res, arr.length)
    //     }

    //     console.log("Arr ",arr, "res ",res)
    //     return res === Number.NEGATIVE_INFINITY ? 0 : res
    // }

    // lengthOfLongestSubstring(s) {
    //     let window = new Set();
    //     let len = 0;
    //     let l=0;

    //     for(let r=0; r<s.length; r++) {
    //         while(window.has(s[r])) {
    //             window.delete(s[l]);
    //             l++;
    //         }

    //         window.add(s[r])
    //         len = Math.max(len, r-l+1)
    //     }

    //     return len
    // }


    lengthOfLongestSubstring(s) {
        let l=0;
        let set = new Set();
        let res = 0;

        for(let r=0; r<s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            set.add(s[r]);
            res = Math.max(res, r-l+1);
        }

        return res
    }
}
