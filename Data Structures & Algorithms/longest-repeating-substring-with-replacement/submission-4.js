class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // characterReplacement(s, k) {
    //    let res = 0;
    //    let charSet = new Set(s)

    //    console.log("CharSet ",charSet, " S ",s)

    //     for (let c of charSet) {
    //         let count = 0, l = 0;

    //         for(let r=0; r<s.length; r++) {
    //             if(s[r] === c) {
    //                 count++;
    //             }

    //             while((r-l+1) - count > k) {
    //                 if(s[l] === c) {
    //                     count--;
    //                 }
    //                 l++;
    //             }

    //             res = Math.max(res, r-l+1)
    //         } 
    //     }
    //     return res
    // }

    // characterReplacement(s, k) {
    //   let map = new Map();
    //   let l=0;
    //   let res=0;

    //   for(let r=0; r<s.length; r++) {
    //     map.set(s[r], (map.get(s[r]) || 0) + 1);
        
    //     let maxF = Math.max(...map.values());

    //     while((r-l+1) - maxF > k) {
    //         map.set(s[l], map.get(s[l]) - 1);
    //         l++;
    //     }

    //     res = Math.max(res, r-l+1)
    //   }

    // return res
    // }



















    // characterReplacement(s, k) {
    //     let freqMap = {};
    //     let res = Number.NEGATIVE_INFINITY;
    //     let l=0;
    //     let maxFreq = 0

    //     for(let r=0; r<s.length; r++) {
    //         freqMap[s[r]] = (freqMap[s[r]] || 0) + 1;

    //         // let maxFreq = Math.max(...Object.values(freqMap));

    //         maxFreq = Math.max(maxFreq, freqMap[s[r]])

    //         while((r-l+1) - maxFreq > k) {
    //             freqMap[s[l]] = freqMap[s[l]] - 1;
    //             l++;
    //         }

    //         res = Math.max(res, r-l+1)
    //     }

    //     return res === Infinity ? 0 : res
    // }


    characterReplacement(s, k) {
        let count = new Map();
        let max = 0;
        let l=0;

        for(let r=0; r<s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            while(((r-l+1) - Math.max(...count.values())) > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            max = Math.max(max, r-l+1)
        }

        return max
    }
}
