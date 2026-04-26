class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let left=1;
        let right=n;
        let res = 0;

        while(left <= right) {
            let mid = Math.trunc((left+right)/2);
            let coins = (mid/2) * (mid+1);

            if(coins > n) {
                right=mid-1;
            } else {
                left = mid+1;
                res = Math.max(res, mid)
            }
        }

        return res
    }
}
