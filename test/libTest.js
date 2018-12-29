const assert = require('assert');
const {
  getMatchingIndex,
  calResult,
  getMatchingWordCount,
  getWordsOfText
} = require('../src/lib.js');

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
  it('should give 100% accuracy when all words are correct', () => {
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

  it('should give 50% accuracy when 50% words are correct', () => {
    const originalText = 'A B\nC D';
    const typedText = 'A B\n F E';
    const time = 4;

    const expectedOutput = { accuracy: 50, speed: 60 };
    const actualOutput = calResult(originalText, typedText, time);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe('getMatchingWordCount', () => {
  it('should return number of matching words for all correct words', () => {
    const originalWords = ['A', 'B'];
    const typedWords = ['A', 'B'];

    const actualOutput = getMatchingWordCount(originalWords, typedWords);
    const expectedOutput = 2;

    assert.equal(actualOutput, expectedOutput);
  });

  it('should return number of matching words for half incorrect words', () => {
    const originalWords = ['A', 'B'];
    const typedWords = ['A', 'C'];

    const actualOutput = getMatchingWordCount(originalWords, typedWords);
    const expectedOutput = 1;

    assert.equal(actualOutput, expectedOutput);
  });
});

describe('getWordsOfText', () => {
  it('should return all the words included in text', () => {
    const text = 'A B C';
    const actualOutput = getWordsOfText(text);
    const expectedOutput = ['A', 'B', 'C'];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return all the words included in text containing new line', () => {
    const text = 'A B C\n';
    const actualOutput = getWordsOfText(text);
    const expectedOutput = ['A', 'B', 'C'];

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
