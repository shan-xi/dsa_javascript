const TreeNode = require('../common/TreeNode');
const isSymmetric = require('./solution');

describe('isSymmetric', () => {
    test('test case1', () => {
        let n1 = new TreeNode(1);
        let n2 = new TreeNode(2);
        let n3 = new TreeNode(2);
        let n4 = new TreeNode(3);
        let n5 = new TreeNode(4);
        let n6 = new TreeNode(4);
        let n7 = new TreeNode(3);
        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n2.right = n5;
        n3.left = n6;
        n3.right = n7;
        let a = isSymmetric(n1)
        let e = true

        expect(a).toEqual(e);
    });
})

describe('isSymmetric', () => {
    test('test case2', () => {
        let n1 = new TreeNode(1);
        let n2 = new TreeNode(2);
        let n3 = new TreeNode(2);
        let n4 = new TreeNode(3);
        let n5 = new TreeNode(3);
        n1.left = n2;
        n1.right = n3;
        n2.right = n4;
        n3.right = n5;
        let a = isSymmetric(n1)
        let e = false

        expect(a).toEqual(e);
    });
})