// 144. Binary Tree Preorder Traversal
function preorderTraversal(root) {
    if (!root) {
        return [];
    }
    const stack = [root];
    const result = [];
    while (stack.length > 0) {
        const curr = stack.pop();
        result.push(curr.val);
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    }
    return result;
}
