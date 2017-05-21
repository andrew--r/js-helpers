// @flow

export default function pick(keys: Array<string> = []) : Function {
  return (object: {} = {}) : {} => Object.keys(object).reduce((result, key) => {
    if (keys.indexOf(key) !== -1) {
      result[key] = object[key];
    }

    return result;
  }, {});
}
