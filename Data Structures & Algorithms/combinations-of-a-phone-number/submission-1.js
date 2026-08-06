class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
       let map = {
            1: [],
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
            0: []
        }
        let res = [];
        let comb = [];

        const generateCombinations = (i) => {
            if(i >= digits.length) {
                res.push(comb.join(''));
                return
            }

            for(let k=0; k<map[digits[i]].length; k++) {
                comb.push(map[digits[i]][k]);
                generateCombinations(i+1)
                comb.pop()
            }
        }

        if(digits.length) {
            generateCombinations(0);
        }
        
        return res
    }
}
