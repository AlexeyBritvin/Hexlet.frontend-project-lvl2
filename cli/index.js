/* eslint-disable no-underscore-dangle */

import fs from 'fs';
import path from 'path';
import { Command } from '../wrapper/wrapper.mjs';
import findDiff from './diff.js';

const program = new Command();

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filePath1);
    const absolutePath2 = path.resolve(process.cwd(), filePath2);
    const content1 = fs.readFileSync(absolutePath1, 'utf-8');
    const content2 = fs.readFileSync(absolutePath2, 'utf-8');
    const result = findDiff(content1, content2);
    console.log(result);
  })
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

export default program;
