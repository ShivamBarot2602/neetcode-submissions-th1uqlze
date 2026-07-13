class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs) {
            let arr = new Array(26).fill(0);

            for(let c of str) {
                arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            arr = arr.join(',');

            if(map.has(arr)) {
                map.get(arr).push(str)
            } else {
                map.set(arr, [str])
            }
        }

        let output = [];

        for(let [key, value] of map) {
            output.push(value);
        }

        return output;
    }
}
