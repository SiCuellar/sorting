//testing for sorting
var assert = require('chai').assert;
var Sort = require('../lib/sorting');

describe('Sort', function() {

  it('should be a function', function() {
    assert.isFunction(Sort);
  });

  it('should instantiate Sort', function() {
    var sort = new Sort();
    assert.isObject(sort);
  });

  it('should sort an array of numbers', function() {
    var sort = new Sort();
    var a = [33, 103, 2, 726, 205, 984, 198, 764, 10];
    var actual = sort.bubble(a)
    var expected = [2, 10, 33, 103, 198, 205, 726, 764, 984]
    assert.deepEqual(actual, expected);
  });
});
