/* eslint-disable no-underscore-dangle */

import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import findDiff from '../cli/diff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('diff two different files', () => {
  const file1 = readFile('file1.json');
  const file2 = readFile('file2.json');
  const result = readFile('result1.json');
  const diff = findDiff(file1, file2);

  expect(diff).toEqual(JSON.parse(result));
});

test('diff with empty file', () => {
  const file1 = readFile('file1.json');
  const result = readFile('result2.json');
  const diff = findDiff(file1, '{}');

  expect(diff).toEqual(JSON.parse(result));
});

test('diff same files', () => {
  const file1 = readFile('file1.json');
  const result = readFile('result3.json');
  const diff = findDiff(file1, file1);

  expect(diff).toEqual(JSON.parse(result));
});
