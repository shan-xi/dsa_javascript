const MyQueue = require('./myqueue');

var obj = new MyQueue();

describe('MyQueue', () => {
  test('test case1', () => {
    obj.push(1);
    obj.push(2);
    expect(obj.pop()).toEqual(1);
    expect(obj.pop()).toEqual(2);
    expect(obj.empty()).toEqual(true);
  });
})

obj = new MyQueue();
describe('MyQueue', () => {
  test('test case1', () => {
    obj.push(1);
    obj.push(2);
    obj.push(3);
    obj.push(4);
    expect(obj.pop()).toEqual(1);
    obj.push(5);
    expect(obj.pop()).toEqual(2);
    expect(obj.pop()).toEqual(3);
    expect(obj.pop()).toEqual(4);
    expect(obj.pop()).toEqual(5);
  });
})