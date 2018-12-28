const assert = require('assert');
const { diff } = require('../src/lib.js');

describe('diff', () => {
  it('should give non equal values between two lists for same length', () => {
    const list1 = [1, 2];
    const list2 = [1, 3];
    const expectedOutput = [2];
    const actualOutput = diff(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give non equal values between two lists for different lengths', () => {
    const list1 = [1, 2, 3];
    const list2 = [1, 3];
    const expectedOutput = [2, 3];
    const actualOutput = diff(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give non equal values when length of second array is > first array', () => {
    const list1 = [1, 2];
    const list2 = [1, 3, 4, 5];
    const expectedOutput = [2];
    const actualOutput = diff(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
