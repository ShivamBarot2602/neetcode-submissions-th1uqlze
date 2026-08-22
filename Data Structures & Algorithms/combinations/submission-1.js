class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        let combs = [];

        const generateCombinations = (i) => {
            if(combs.length === k) {
                res.push([...combs]);
                return
            }
            if(i > n) {
                return
            }

            for(let j=i; j<n+1; j++) {
                combs.push(j);
                generateCombinations(j+1);
                combs.pop();
            }
        }

        generateCombinations(1);
        return res;
    }
}
