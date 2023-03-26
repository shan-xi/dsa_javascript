// 104. Maximum Depth of Binary Tree

var maxDepth = function (root) {
    return dfs(root)
};
var dfs = function (root) {
    if (root == null) {
        return 0
    }
    let left = dfs(root.left)
    let right = dfs(root.right)
    return 1 + Math.max(left, right)
}

module.exports = maxDepth