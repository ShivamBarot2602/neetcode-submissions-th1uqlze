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
     * @return {number}
     */
    // diameterOfBinaryTree(root) {
    //     let res = [0];
    //     this.checkDiameter(root, res);
    //     return res[0];
    // }

    // checkDiameter(root, res) {
    //     if(root === null) {
    //         return 0;
    //     }
    //     let left = this.checkDiameter(root.left, res);
    //     let right = this.checkDiameter(root.right, res);

    //     res[0] = Math.max(res[0], left + right);

    //     return 1 + Math.max(left, right);
    // }

    diameterOfBinaryTree(root) {
        let res = [0];

        const dfs = (root) => {
            if(root === null) {
                return 0;
            }

            let left = dfs(root.left);
            let right = dfs(root.right);

            res[0] = Math.max(res[0], (left + right));
            return 1 + Math.max(left, right);
        }

        dfs(root);
        return res[0];
    }
}
