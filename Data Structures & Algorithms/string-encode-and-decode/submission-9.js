class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // encode(strs) {
    //     let str = ""
    //     for(let i=0;i<strs.length;i++){
    //         str = str+strs[i].length+"#"+strs[i]
    //     }
    //     console.log("Str ",str)
    //     return str
    // }

    // /**
    //  * @param {string} str
    //  * @returns {string[]}
    //  */
    // decode(str) {
    //     let res = [];
        
    //     let i=0;
    //     let j=0;

    //     while(i<str.length){
    //         // console.log("Entered ", i)
    //         let temp=""
    //         if(str[i]==="#"){
    //             j=str[i-1];
    //             for(let k=1; k<=j;k++){
    //             temp+=str[i+k];
    //         }
    //         }

    //         if(temp.length){
    //             i+=temp.length+1
    //         res.push(temp)
    //         } else {
    //             i+=1
    //         }
    //     }
    //     return res
    // }

    // encode(strs) {
    //     let str = ''
    //     for(let i=0; i<strs.length; i++) {
    //        str = str+strs[i].length+"#"+strs[i]
    //     }
    //     console.log("Str ",str)
    //     return str
    // }

    // decode(str) {
    //     let res = [];
    //     let i=0;
    //     while(i<str.length) {
    //         let j = i
    //         while(str[j] !== "#") {
    //            j++;
    //         }
    //         let length = parseInt(str.substring(i, j));
    //         console.log("Length ",length)
    //         i=j+1;
    //         j=i+length;
    //         console.log("I ",i, " j ",j)
    //         res.push(str.substring(i, j));
    //         i = j;
    //     }
    //     return res
    // }


    encode(strs) {
        let string = "";

        for(let str of strs) {
            let s = `${str.length}#`;
            for(let c of str) {
                s += c;
            }
            string+=s;
        }

        console.log("String ",string);

        return string
    }

    decode(str) {
        let arr = [];
        let i=0;
        
        while(i<str.length) {
            let j = i
            while(str[j] !== "#") {
                j++;
            }
            let length = +str.substring(i, j);
            i=j+1;
            j=i+length;
            arr.push(str.substring(i, j));
            i=j
        }

        return arr;
    }
}