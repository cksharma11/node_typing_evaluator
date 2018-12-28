const { getTypedContent, formatText, getResult } = require('./src/lib.js');
const chalk = require('chalk');
const { format } = require('./src/format.js');

const main = function() {
  const origialData = formatText();
  console.log(origialData);
  const typedData = getTypedContent();
  console.log(typedData);
  const result = getResult(typedData.typedText, typedData.time);
  console.log(format(result.accuracy, result.speed));
};

main();
