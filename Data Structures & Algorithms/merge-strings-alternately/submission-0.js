class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l=0, r=0;
        let str = "";

        while(l < word1.length && r < word2.length) {
            str += word1[l];
            str += word2[r];
            l++;
            r++;
        }
        if(l < word1.length) {
            str += word1.slice(l) 
        }
        if(r < word2.length) {
            str += word2.slice(r)
        }

        return str;
    }
}
