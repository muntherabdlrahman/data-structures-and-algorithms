"use strict";

var repeatedWord = require('../repatedWord');

describe('first repeated word ', function () {
  it('return first repeated word', function () {
    var str = "Success is walking from failure to failure with no loss of enthusiasm";
    var expected = "failure";
    expect(repeatedWord(str)).toEqual(expected);
  });
  it('return first repeated word regardless of cast (captel/small)', function () {
    var str = "Success is walking from failure to Failure with no loss of enthusiasm";
    var expected = "failure";
    expect(repeatedWord(str)).toEqual(expected);
  });
  it('return null if there not repeated word ', function () {
    var str = "When it comes to success, there are no shortcuts";
    expect(repeatedWord(str)).toBeNull();
  });
});