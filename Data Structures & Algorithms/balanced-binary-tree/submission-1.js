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
    isBalanced(root) {
        function dfs(curr) {
            if (curr === null) {
                return [true, 0];
            }

            let left = dfs(curr.left);
            let right = dfs(curr.right);

            let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
            let height = 1 + Math.max(left[1], right[1]);

            return [balanced, height];
        }

        return dfs(root)[0];
    }
}
