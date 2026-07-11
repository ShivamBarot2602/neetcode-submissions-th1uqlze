class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     const str1 = s.split("").sort().join("");
    //     const str2 = t.split("").sort().join("");
    
    //     if(str1 === str2) return true

    //     return false
    // }
    //  isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     let count = new Array(26).fill(0)

    //     for(let i=0; i<s.length; i++) {
    //         count[s.charCodeAt(i) - 97]++;
    //         count[t.charCodeAt(i) - 97]--;
    //     }

    //     for(let i=0; i<26; i++) {
    //         if(count[i] !== 0) return false
    //     }

    //     return true
    //  }

    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let count = new Array(26).fill(0);
        
        for(let i=0; i<s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        for(let i=0; i<26; i++) {
            if(count[i] !== 0) return false
        }

        return true
    }
}
