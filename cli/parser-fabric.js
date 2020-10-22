import { parseYaml, parseJson } from './parsers.js';

const extensionMap = {
  '.json': parseJson,
  '.yml': parseYaml,
};

const buildParser = (extension) => extensionMap[extension];

export default buildParser;
