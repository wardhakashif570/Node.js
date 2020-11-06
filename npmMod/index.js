
// CHALK MODULE NPM
const chalk = require('chalk');
console.log(chalk.green('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

//VALIDATOR
const validator=require('validator');
const res=validator.isEmail('foo@bar.com');
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));