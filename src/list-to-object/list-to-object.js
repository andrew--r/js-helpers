// @flow

const identity = (x: any) : any => x;

export default function listToObject(getKey: Function) : Function {
  return (getValue: Function = identity) : Function => (array : Array<{}>) : {} =>
    array.reduce((result: {}, item: any) : {} => {
      result[getKey(item)] = getValue(item);
      return result;
    }, {});
}
