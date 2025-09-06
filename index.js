//使用第三方包 | 和内置模块一样
/**
 * 1. 先找是否存在内置模块 lodash
 * 2. 再从当前目录中的 node_modules 里面找 lodash
 * 3. 如果没有，会从上级目录的 node_modules里面找
 * 4. 最后会找全局的 node_modules s
 */
const _ = require('lodash');
const chalk = require('chalk');

const arr = [1,2,3,4,5,6,7];
console.log(_.chunk(arr,3));//平均分成三份
console.log(chalk.blue('Zayne'));
console.log(chalk.bgBlue('Lishen'));