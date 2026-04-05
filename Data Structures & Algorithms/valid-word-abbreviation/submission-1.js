class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    // validWordAbbreviation(word, abbr) {
    // let n=word.length;
    // let m=abbr.length;
    // let i=0;
    // let j=0;

    // while(i < n && j < m) {
    //     if(abbr[j] === "0") return false;

    //     if(isNaN(abbr[j])) {
    //         if(word[i] === abbr[j]) {
    //             i++;
    //             j++;
    //         } else {
    //             return false
    //         }
    //     } else {
    //         let subLen = 0;
    //         while(j < m && !isNaN(abbr[j]) && abbr[j] !== " ") {
    //             subLen = subLen * 10 + parseInt(abbr[j]);
    //             j++;
    //         }
    //         i+= subLen
    //     }
    // }

    // return i === n && j === m
    // }


    validWordAbbreviation(word, abbr) {
        let n=word.length;
        let m=abbr.length;

        let i=0;
        let j=0;

        while(i<n && j<m) {
            if(abbr[j] === "0") return false;

            if(isNaN(abbr[j])) {
                if(abbr[j] === word[i]) {
                    i += 1;
                    j += 1;
                } else {
                    return false
                }
            } else {
                let subLen = 0;
                while(j < m && !isNaN(abbr[j]) && abbr[j] !== " ") {
                    subLen = subLen * 10 + parseInt(abbr[j]);
                    j++;
                }
                i += subLen;
            }
        }

        return i === n && j === m
    }
}
