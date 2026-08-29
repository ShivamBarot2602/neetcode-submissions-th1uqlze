/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map();
        if(!node) return null;

        const dfs = (node) => {
            if(oldToNew.has(node)) {
                return oldToNew.get(node);
            }

            let copyNode = new Node(node.val);
            oldToNew.set(node, copyNode);

            for(let neighbor of node.neighbors) {
                copyNode.neighbors.push(dfs(neighbor));
            }

            return copyNode;
        }

        return dfs(node);
    }
}
