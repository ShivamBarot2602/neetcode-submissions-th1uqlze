class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // decodeString(s) {
    //     let stack = new Array();

    //     for(let i=0; i<s.length; i++) {
    //         if(s[i] !== "]") {
    //             stack.push(s[i])
    //         } else {
    //             let substr = "";
    //             while(stack[stack.length-1] !== "[") {
    //                 substr = stack.pop() + substr;
    //             }
    //             stack.pop();

    //             let k = '';
    //             while(stack.length > 0 && !isNaN(stack[stack.length-1])) {
    //                 k = stack.pop() + k;
    //             }
    //             stack.push(substr.repeat(parseInt(k, 10)));
    //         }
    //     }

    //     return stack.join("")
    // }

    decodeString(s) {
        let i=0;

        const helper = () => {
            let res = "";
            let k = 0;
            
            while(i < s.length) {
                let c = s[i];

                if(!isNaN(c)) {
                    k = k * 10 + parseInt(c, 10)
                } else if(c === "[") {
                    i++;
                    res += helper().repeat(k);
                    k=0;
                } else if(c === "]") {
                    return res;
                } else {
                    res += c;
                }
                i+=1;
            }

            return res
        }

        return helper()
    }
}
