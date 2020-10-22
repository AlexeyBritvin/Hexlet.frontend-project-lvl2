import yaml from 'js-yaml';

export const parseYaml = (content) => {
  try {
    return yaml.safeLoad(content);
  } catch (err) {
    throw new Error(err);
  }
};

export const parseJson = (content) => JSON.parse(content);
