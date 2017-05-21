// 

const identity = (x) => x;

export default function listToObject(getKey) {
  return (getValue = identity) => (array) =>
    array.reduce((result, item) => {
      result[getKey(item)] = getValue(item);
      return result;
    }, {});
}
