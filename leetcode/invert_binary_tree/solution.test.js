const TreeNode = require('../common/TreeNode');
const invertTree = require('./solution');

describe('invertTree', () => {
    test('test case1', () => {
        let n1 = new TreeNode(4);
        let n2 = new TreeNode(2);
        let n3 = new TreeNode(7);
        let n4 = new TreeNode(1);
        let n5 = new TreeNode(3);
        let n6 = new TreeNode(6);
        let n7 = new TreeNode(9);
        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n2.right = n5;
        n3.left = n6;
        n3.right = n7;
        let a = invertTree(n1)
        expect(a.left).toEqual(n3);
        expect(a.left.left).toEqual(n7);
        expect(a.left.right).toEqual(n6);
        expect(a.right).toEqual(n2);
        expect(a.right.left).toEqual(n5);
        expect(a.right.right).toEqual(n4);
    });
})

describe('invertTree', () => {
    test('test case2', () => {
        let n1 = new TreeNode(4);
        let n2 = new TreeNode(2);
        let n3 = new TreeNode(7);
        n1.left = n2;
        n1.right = n3;
        let a = invertTree(n1)
        expect(a.left).toEqual(n3);
        expect(a.right).toEqual(n2);
    });
})

describe('invertTree', () => {
    test('test case3', () => {
        let a = invertTree(null)
        expect(a).toEqual(null);
    });
})