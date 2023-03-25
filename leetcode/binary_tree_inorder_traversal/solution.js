// 94. Binary Tree Inorder Traversal
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = []
    let stack = []
    let current = root
    while(current || stack.length>0){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val)
        current = current.right
    }
    return result
};