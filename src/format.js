const chalk = require('chalk');
const Table = require('cli-table3');

const table = new Table({
  head: ['Accuracy', 'Speed (WPM)'],
  colWidths: [40, 40]
});

const format = function(accuracy, speed) {
  table.push([chalk.green(accuracy), chalk.green(speed)]);
  return table.toString();
};

module.exports = { format };
