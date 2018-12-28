const assert = require('assert');
const { getMatchingIndex, calResult } = require('../src/lib.js');

describe('getMatchingIndex', () => {
  it('should give non equal values between two lists for same length', () => {
    const list1 = [1, 2];
    const list2 = [1, 3];
    const expectedOutput = [1];
    const actualOutput = getMatchingIndex(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give non equal values between two lists for different lengths', () => {
    const list1 = [1, 2, 3];
    const list2 = [1, 3];
    const expectedOutput = [1];
    const actualOutput = getMatchingIndex(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should give non equal values when length of second array is > first array', () => {
    const list1 = [1, 2];
    const list2 = [1, 3, 4, 5];
    const expectedOutput = [1];
    const actualOutput = getMatchingIndex(list1, list2);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe('calResult', () => {
  it('should give calculated result when passed required data', () => {
    const originalText = 'A B\nC D';
    const typedText = 'A B\n C D';
    const time = 4;

    const expectedOutput = {
      accuracy: 100,
      speed: 60
    };
    const actualOutput = calResult(originalText, typedText, time);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
