const { getTypedContent, formatText, getResult } = require('./src/lib.js');
const { format } = require('./src/format.js');

const main = function() {
  const typingContent = formatText();
  console.log(typingContent);
  const typedData = getTypedContent();
  const result = getResult(typedData.typedText, typedData.time);
  console.log(format(result.accuracy, result.speed));
};

main();
