const assert = require('assert');
const hello = require('../src/').hello;
const fib = require('../src/').fib;
describe('project', function() {
  it('has hello', function() {
    assert.equal('Hello World', hello);
  });
  it('test fib 1', function() {
    assert.equal(1, fib(0));
    assert.equal(1, fib(1));
    assert.equal(2, fib(2));
    assert.equal(3, fib(3));
    assert.equal(5, fib(4));
    assert.equal(8, fib(5));
    assert.equal(13, fib(6));
  });
});