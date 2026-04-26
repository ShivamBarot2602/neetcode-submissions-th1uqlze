class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left=1;
        let right=x;
        let res=0;

        while(left <= right) {
            let mid = Math.trunc((left+right)/2);

            if(mid*mid < x) {
                left=mid+1;
                res=mid;
            } else if(mid*mid > x) {
                right=mid-1;
            } else {
                return Math.trunc(mid);
            }
        }

        return Math.trunc(res);
    }
}
