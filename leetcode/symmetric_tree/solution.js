// 101. Symmetric Tree
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) return true;
    return isSymmetricHelper(root.left, root.right);
};
var isSymmetricHelper = function (leftNode, rightNode) {
    if (leftNode == null && rightNode == null) return true;
    if (leftNode == null || rightNode == null) return false;
    if (leftNode.val != rightNode.val) return false;
    return isSymmetricHelper(leftNode.left, rightNode.right) && isSymmetricHelper(leftNode.right, rightNode.left);
}

module.exports = isSymmetric