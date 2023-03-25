let result;
// 144. Binary Tree Preorder Traversal
function preorderTraversal(root) {
    result = [];
    preOrder(root);
    return result;
}

var preOrder = function (root) {
    if (root == null) return;
    result.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

module.exports = preorderTraversal