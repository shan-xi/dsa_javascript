// 94. Binary Tree Inorder Traversal
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let result = []
var inorderTraversal = function (root) {
    result = []
    inOrder(root)
    return result
};

var inOrder = function (root) {
    if (root == null) return
    inOrder(root.left)
    result.push(root.val)
    inOrder(root.right)
}

module.exports = inorderTraversal