class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let stack = [];
        
        const dfs = (open, close) => {
          if(open === n && close === n) {
            res.push(stack.join(""));
            return
          }

          if(open < n) {
            stack.push("(");
            dfs(open+1, close)
            stack.pop()
          }

          if(close < open) {
            stack.push(")");
            dfs(open, close+1);
            stack.pop()
          }
        }

        dfs(0, 0);
        return res
    }
}
