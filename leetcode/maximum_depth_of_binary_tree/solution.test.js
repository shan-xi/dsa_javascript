const TreeNode = require('../common/TreeNode');
const maxDepth = require('./solution');

describe('maxDepth', () => {
    test('test case1', () => {
        let n1 = new TreeNode(3);
        let n2 = new TreeNode(9);
        let n3 = new TreeNode(20);
        let n4 = new TreeNode(15);
        let n5 = new TreeNode(7);
        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n3.right = n5;
        let a = maxDepth(n1)
        expect(a).toEqual(3);
    });
})

describe('maxDepth', () => {
    test('test case2', () => {
        let n1 = new TreeNode(1);
        let n2 = new TreeNode(2);
        n1.right = n2;
        let a = maxDepth(n1)
        expect(a).toEqual(2);
    });
})