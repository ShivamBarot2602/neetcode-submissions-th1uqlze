class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = new Array();

        for(let i=0; i<s.length; i++) {
            if(s[i] !== "]") {
                stack.push(s[i])
            } else {
                let substr = "";
                while(stack[stack.length-1] !== "[") {
                    substr = stack.pop() + substr;
                }
                stack.pop();

                let k = '';
                while(stack.length > 0 && !isNaN(stack[stack.length-1])) {
                    k = stack.pop() + k;
                }
                stack.push(substr.repeat(parseInt(k, 10)));
            }
        }

        return stack.join("")
    }
}
