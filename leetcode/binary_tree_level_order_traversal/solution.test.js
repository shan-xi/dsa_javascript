const TreeNode = require('../common/TreeNode');
const levelOrder = require('./solution');

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
        let a = levelOrder(n1)
        let e = [[3], [9, 20], [15, 7]]

        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                expect(a[i][j]).toEqual(e[i][j]);
            }
        }
    });
})