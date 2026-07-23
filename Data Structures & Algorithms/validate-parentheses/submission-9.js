class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isValid(s) {
    //     let stack = [];
    //     const obj = {
    //         ")": "(",
    //         "}": "{",
    //         "]": "["
    //     }

    //     for(let i=0;i<s.length; i++) {
    //         if(obj[s[i]]) {
    //             if(stack.length > 0 && stack[stack.length-1] === obj[s[i]]) {
    //                 stack.pop();
    //             } else {
    //                 return false
    //             }
    //         } else {
    //             stack.push(s[i])
    //         }
    //     }

    //     return stack.length === 0
    // }

    isValid(s) {
        let stack = new Array();
        let obj = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for(let i=0; i<s.length; i++) {
            if(stack.length && stack[stack.length-1] === obj[s[i]]) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0
    }
}
