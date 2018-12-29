const readline = require('readline-sync');
const Table = require('cli-table3');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');

const files = ['smallFile', 'largeFile', 'testData1', 'testData2', 'testData3'];
const fileIndex = Math.floor(Math.random(1) * 4);
const contentBox = new Table({
  head: ['Best Of Luck'],
  colWidths: [80],
  wordWrap: true
});

const getContent = function() {
  return fs.readFileSync('./src/typingContents/' + files[fileIndex], 'utf8');
};

const formatText = function() {
  const text = getContent();
  contentBox.push([chalk.blue(text)]);
  return contentBox.toString();
};

const getTypedContent = function() {
  const lengthOfContent = getContent().split('\n').length;
  readline.question(chalk.blue('Press enter and start typing . . . . '));
  const startTime = new Date();
  let typedText = '';
  for (let count = 0; count < lengthOfContent; count++) {
    typedText = typedText + readline.question() + '\n';
  }
  const endTime = new Date();
  return { typedText, time: moment(endTime).diff(startTime, 'second') };
};

const getWordsOfText = function(text) {
  return text.trimRight().split(/[ \n]+/);
};

const getMatchingWordCount = function(originalWords, typedWords) {
  const matchingWordCount = getMatchingIndex(originalWords, typedWords);
  return matchingWordCount.length;
};

const getMatchingIndex = function(list1, list2) {
  return list1.filter((element, index) => list1[index] == list2[index]);
};

const calResult = function(originalText, typedText, time) {
  const originalWords = getWordsOfText(originalText);
  const typedWords = getWordsOfText(typedText);
  let totalWords = originalWords.length;
  let correctWordCount = getMatchingWordCount(originalWords, typedWords);
  return getTypingResult(typedWords, correctWordCount, totalWords, time);
};

const getTypingResult = function(
  typedWords,
  correctWordCount,
  totalWords,
  time
) {
  return {
    accuracy: (correctWordCount / totalWords) * 100,
    speed: typedWords.length / (time / 60)
  };
};

const getResult = calResult.bind(null, getContent());

module.exports = {
  getContent,
  formatText,
  getTypedContent,
  getResult,
  getMatchingIndex,
  calResult,
  getMatchingWordCount,
  getWordsOfText
};
