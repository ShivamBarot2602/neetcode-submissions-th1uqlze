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
    // DFS Solution
    // maxDepth(root) {
    //     if(root === null) return 0;

    //     return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    // }

    // BFS Solution
    maxDepth(root) {
        let queue = new Array();
        let level = 0;

        if(root !== null) {
            queue.push(root);
        }

        while(queue.length > 0) {
            let queueLength = queue.length;
            for(let i=0; i<queueLength; i++) {
                let root = queue.shift();

                if(root.left) {
                    queue.push(root.left);
                }
                if(root.right) {
                    queue.push(root.right);
                }
            }
            level += 1;
        }

        return level
    }
}
