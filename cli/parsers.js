import fs from 'fs';
import yaml from 'js-yaml';

const encodingFormat = 'utf8';

export const parseYaml = (filePath) => {
  try {
    return yaml.safeLoad(fs.readFileSync(filePath, encodingFormat));
  } catch (err) {
    throw new Error(err);
  }
};

export const parseJson = (filePath) => {
  const content = fs.readFileSync(filePath, encodingFormat);
  return JSON.parse(content);
};
