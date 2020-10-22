/* eslint-disable no-underscore-dangle */

import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import findDiff from '../cli/diff';
import { parseYaml, parseJson } from '../cli/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('diff two different json files', () => {
  const file1 = readFile('file1.json');
  const file2 = readFile('file2.json');
  const result = readFile('result1.json');
  const diff = findDiff(parseJson(file1), parseJson(file2));

  expect(diff).toEqual(parseJson(result));
});

test('diff with empty json file', () => {
  const file1 = readFile('file1.json');
  const result = readFile('result2.json');
  const diff = findDiff(parseJson(file1), parseJson('{}'));

  expect(diff).toEqual(parseJson(result));
});

test('diff same json files', () => {
  const file1 = readFile('file1.json');
  const result = readFile('result3.json');
  const diff = findDiff(parseJson(file1), parseJson(file1));

  expect(diff).toEqual(parseJson(result));
});

test('diff two different yaml files', () => {
  const file1 = readFile('file1.yml');
  const file2 = readFile('file2.yml');
  const result = readFile('result1.json');
  const diff = findDiff(parseYaml(file1), parseYaml(file2));

  expect(diff).toEqual(parseJson(result));
});

test('diff with empty file', () => {
  const file1 = readFile('file1.yml');
  const result = readFile('result2.json');
  const diff = findDiff(parseYaml(file1), parseJson('{}'));

  expect(diff).toEqual(parseJson(result));
});

test('diff same yaml files', () => {
  const file1 = readFile('file1.yml');
  const result = readFile('result3.json');
  const diff = findDiff(parseYaml(file1), parseYaml(file1));

  expect(diff).toEqual(parseJson(result));
});
