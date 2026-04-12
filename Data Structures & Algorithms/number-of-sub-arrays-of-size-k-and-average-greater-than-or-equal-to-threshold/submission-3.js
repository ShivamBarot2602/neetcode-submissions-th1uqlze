class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    // numOfSubarrays(arr, k, threshold) {
    //     let sum = 0;
    //     let l=0;
    //     let res = 0;

    //     for(let r=0; r<arr.length; r++) {
    //         if(r-l+1 > k) {
    //             sum = sum - arr[l];
    //             l++;
    //         }

    //         sum = sum + arr[r];

    //         if(r-l+1 === k && sum / k >= threshold) {
    //             res += 1
    //         }
    //     }

    //     return res
    // }

    numOfSubarrays(arr, k, threshold) {
        let l=0;
        let res = 0;
        let sum = 0;

        for(let r=0; r<arr.length; r++) {
            sum += arr[r];
            if(r-l+1 < k) {
                continue
            }
            if(sum / k >= threshold) {
                res += 1;
            }
            sum -= arr[l];
            l++;
        }

        return res
    }
}
