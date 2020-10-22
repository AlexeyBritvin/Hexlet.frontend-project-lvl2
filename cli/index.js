/* eslint-disable no-underscore-dangle */

import path from 'path';
import Command from '../wrapper/wrapper.mjs';
import findDiff from './diff.js';

import buildParser from './parser-fabric.js';

const program = new Command();

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    const extension1 = path.extname(filePath1);
    const extension2 = path.extname(filePath2);

    const absolutePath1 = path.resolve(process.cwd(), filePath1);
    const absolutePath2 = path.resolve(process.cwd(), filePath2);

    const parseMethod1 = buildParser(extension1);
    const parseMethod2 = buildParser(extension2);
    const content1 = parseMethod1(absolutePath1);
    const content2 = parseMethod2(absolutePath2);
    const result = findDiff(content1, content2);
    console.log(result);
  })
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

export default program;
