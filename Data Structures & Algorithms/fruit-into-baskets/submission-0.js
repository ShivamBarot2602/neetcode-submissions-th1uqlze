class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let l=0;
        let map = new Map();
        let res = 0;

        for(let r=0; r<fruits.length; r++) {
            map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);
            while(map.size > 2) {
                let val = map.get(fruits[l]);
                map.set(fruits[l], val - 1);
                if(map.get(fruits[l]) === 0) {
                    map.delete(fruits[l])
                }
                l++;
            }
            res = Math.max(res, r-l+1);
        }

        return res;
    }
}
