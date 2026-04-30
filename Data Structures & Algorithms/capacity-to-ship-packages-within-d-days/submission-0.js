class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l=Math.max(...weights);
        let r=weights.reduce((a, b) => a+b, 0);
        let res=+Infinity;

        const canShip = (mid) => {
            let ships=1;
            let currCap=mid;

            for(let i=0; i<weights.length; i++) {
                if(currCap - weights[i] < 0) {
                    ships++;
                    if(ships > days) {
                        return false
                    }
                    currCap=mid;
                }
                currCap -= weights[i]
            }

            return true;
        }

        while(l<=r) {
            let mid=Math.floor((l+r)/2);
            if(canShip(mid)) {
                res = Math.min(res, mid);
                r=mid-1;
            } else {
                l=mid+1;
            }
        }

        return res;
    }
}
