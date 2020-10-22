/* eslint-disable no-underscore-dangle */

import path from 'path';
import fs from 'fs';
import Command from '../wrapper/wrapper.mjs';
import findDiff from './diff.js';

import buildParser from './parser-fabric.js';

const program = new Command();

const findAbsoluteFilePath = (filePath) => path.resolve(process.cwd(), filePath);
const getFileExtension = (filePath) => path.extname(filePath);
const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
const parseFileContent = (filePath) => {
  const parseMethod = buildParser(getFileExtension(filePath));
  const absolutePath = findAbsoluteFilePath(filePath);
  return parseMethod(readFile(absolutePath));
};

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    const result = findDiff(parseFileContent(filePath1), parseFileContent(filePath2));
    console.log(result);
  })
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

export default program;
