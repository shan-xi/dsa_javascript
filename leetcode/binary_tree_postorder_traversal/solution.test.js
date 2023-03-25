const TreeNode = require('../common/TreeNode');
const postorderTraversal = require('./solution');

describe('postorderTraversal', () => {
  test('test case2', () => {
    let n1 = new TreeNode(1);
    let n2 = new TreeNode(2);
    let n3 = new TreeNode(3);
    n1.right = n2;
    n2.left = n3;
    let a = postorderTraversal(n1)
    expect(a).toEqual([3, 2, 1]);
  });
})

describe('postorderTraversal', () => {
  test('test case1', () => {
    let a = postorderTraversal(null)
    expect(a).toEqual([]);
  });
})

describe('postorderTraversal', () => {
  test('test case3', () => {
    let n1 = new TreeNode(1);
    let a = postorderTraversal(n1)
    expect(a).toEqual([1]);
  });
})