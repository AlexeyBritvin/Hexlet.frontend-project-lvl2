import lodash from 'lodash';

const { has } = lodash;

const findDiff = (data1, data2) => {
  const result = {};
  const [oldObj, newObj] = [JSON.parse(data1), JSON.parse(data2)];

  Object.keys(newObj).forEach((key) => {
    if (has(oldObj, key)) {
      if (newObj[key] === oldObj[key]) {
        result[`${key}`] = newObj[key];
      } else {
        result[`- ${key}`] = oldObj[key];
        result[`+ ${key}`] = newObj[key];
      }
    } else {
      result[`+ ${key}`] = newObj[key];
    }
  });

  Object.keys(oldObj).forEach((key) => {
    if (!has(newObj, key)) {
      result[`- ${key}`] = oldObj[key];
    }
  });

  return result;
};

export default findDiff;
