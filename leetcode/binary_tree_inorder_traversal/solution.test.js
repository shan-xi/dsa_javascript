const TreeNode = require('../common/TreeNode');
const inorderTraversal = require('./solution');

describe('inorderTraversal', () => {
  test('test case2', () => {
    let n1 = new TreeNode(1);
    let n2 = new TreeNode(2);
    let n3 = new TreeNode(3);
    n1.right = n2;
    n2.left = n3;
    let a = inorderTraversal(n1)
    expect(a).toEqual([1, 3, 2]);
  });
})

describe('inorderTraversal', () => {
  test('test case1', () => {
    let a = inorderTraversal(null)
    expect(a).toEqual([]);
  });
})

describe('inorderTraversal', () => {
  test('test case3', () => {
    let n1 = new TreeNode(1);
    let a = inorderTraversal(n1)
    expect(a).toEqual([1]);
  });
})