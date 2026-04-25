class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        let stack = new Array();
        let str = "";

        for(let i=0; i<s.length; i++) {
            if(stack.length && stack[stack.length-1][0] === s[i]) {
                stack[stack.length-1][1] += 1
            } else {
                stack.push([s[i], 1]);
            }

            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        }

        for(let [char, count] of stack) {
            str += char.repeat(count);
        }

     return str
    }
}
