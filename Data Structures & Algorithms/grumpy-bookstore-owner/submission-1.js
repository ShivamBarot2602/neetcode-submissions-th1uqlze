class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let l=0;
        let window=0;
        let maxWindow=0;
        let satisfied=0;

        for(let r=0; r<customers.length; r++) {
            if(grumpy[r] === 1) {
                window += customers[r]
            } else {
                satisfied += customers[r]
            }

            if(r-l+1 > minutes) {
                if(grumpy[l] === 1) {
                    window -= customers[l];
                }
                l++;
            }

            maxWindow = Math.max(maxWindow, window);
        }

        return satisfied + maxWindow
    }
}
