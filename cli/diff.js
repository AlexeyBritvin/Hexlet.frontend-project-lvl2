import lodash from 'lodash';

const { has } = lodash;

const findDiff = (data1, data2) => {
  const result = {};

  Object.keys(data2).forEach((key) => {
    if (has(data1, key)) {
      if (data2[key] === data1[key]) {
        result[`${key}`] = data2[key];
      } else {
        result[`- ${key}`] = data1[key];
        result[`+ ${key}`] = data2[key];
      }
    } else {
      result[`+ ${key}`] = data2[key];
    }
  });

  Object.keys(data1).forEach((key) => {
    if (!has(data2, key)) {
      result[`- ${key}`] = data1[key];
    }
  });

  return result;
};

export default findDiff;
