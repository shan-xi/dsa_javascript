// 145. Binary Tree Postorder Traversal
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let result;
var postorderTraversal = function (root) {
    result = [];
    postOrder(root);
    return result;
};
var postOrder = function (root) {
    if (root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    result.push(root.val);
}

module.exports = postorderTraversal