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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    // isSubtree(root, subRoot) {
    //     if(!subRoot) {
    //         return true
    //     }

    //     if(!root) {
    //         return false
    //     }

    //     if(this.isSame(root, subRoot)) {
    //         return true
    //     } else {
    //         return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    //     }
    // }

    // isSame(root, subRoot) {
    //     if(!root && !subRoot) return true

    //     if(root && subRoot && root.val === subRoot.val) {
    //         return this.isSame(root.left, subRoot.left) && this.isSame(root.right, subRoot.right)
    //     }

    //     return false
    // }

    isSubtree(root, subRoot) {
        if(root === null) {
            return false;
        }

        if(this.isSame(root, subRoot)) {
            return true;
        } else {
            return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
        }

    }

    isSame(root, subRoot) {
        if(!root && !subRoot) {
            return true;
        }
        if((root && !subRoot) || (!root && subRoot)) {
            return false;
        }
        if(root.val !== subRoot.val) {
            return false
        }
        if(root.val === subRoot.val) {
            return this.isSame(root.left, subRoot.left) && this.isSame(root.right, subRoot.right)
        }
    }
}
