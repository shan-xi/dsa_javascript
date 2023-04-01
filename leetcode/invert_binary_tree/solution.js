// 226. Invert Binary Tree
var invertTree = function (root) {
    if (root == null) {
        return null;
    }
    invertTreeHelper(root);
    return root;
};

let invertTreeHelper = function (root) {
    if (root == null) {
        return;
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTreeHelper(root.left);
    invertTreeHelper(root.right);
}

module.exports = invertTree