/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    // isBalanced(root) {
    //     let res = this.dfs(root);
    //     return res[0] == 1 ? true : false
    // }

    // dfs(root) {
    //     if(!root) return [1, 0];

    //     let left = this.dfs(root.left);
    //     let right = this.dfs(root.right);

    //     let isBalance = left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;
    //     let height = 1 + Math.max(left[1], right[1])

    //     return [isBalance ? 1 : 0, height]
    // }

    isBalanced(root) {
        let res = [true];

        const dfs = (root, res) => {
            if(root === null) {
                return 0;
            }

            let left = dfs(root.left, res);
            let right = dfs(root.right, res);

            res[0] = Math.abs(left - right) <= 1 && res[0] ? true : false;

            return 1 + Math.max(left, right);
        }

        dfs(root, res)
        return res[0];
    }
}
