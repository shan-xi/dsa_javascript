const TreeNode = require('../common/TreeNode');
const preorderTraversal = require('./solution');

describe('preorderTraversal', () => {
  test('test case2', () => {
    let n1 = new TreeNode(1);
    let n2 = new TreeNode(2);
    let n3 = new TreeNode(3);
    n1.right = n2;
    n2.left = n3;
    let a = preorderTraversal(n1)
    expect(a).toEqual([1, 2, 3]);
  });
})

describe('preorderTraversal', () => {
  test('test case1', () => {
    let a = preorderTraversal(null)
    expect(a).toEqual([]);
  });
})

describe('preorderTraversal', () => {
  test('test case3', () => {
    let n1 = new TreeNode(1);
    let a = preorderTraversal(n1)
    expect(a).toEqual([1]);
  });
})