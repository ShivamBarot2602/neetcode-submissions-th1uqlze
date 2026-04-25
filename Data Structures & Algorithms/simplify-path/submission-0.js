class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = new Array();

        for(let i=0; i<path.length; i++) {
            if(path[i] === "/") {
                continue;
            }
            let j=i;
            let str = ''
            while(path[j] !== '/' && j < path.length) {
                str += path[j];
                j++;
            }
            if(str === ".." && stack.length !== 0) {
                stack.pop();
            } else {
                if(![".", ".."].includes(str)) {
                    stack.push(str);
                }
            }
            i=j;
        }

        return `/${stack.join("/")}`
    }
}
