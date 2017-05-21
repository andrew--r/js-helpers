import listToObject from './list-to-object';

describe('list-to-object', () => {
  const testList = [
    { id: 1, letter: 'a' },
    { id: 2, letter: 'b' },
    { id: 3, letter: 'c' },
  ];
  const identity = (x) => x;
  const getId = (object) => object.id;
  const getLetter = (object) => object.letter;

  test('should be curried', () => {
    expect(typeof listToObject()).toEqual('function');
    expect(typeof listToObject()()).toEqual('function');
    expect(typeof listToObject(getId)(identity)(testList)).toEqual('object');
  });

  test('should transform list to object according to specified key and value selectors', () => {
    expect(listToObject(getId)(identity)(testList)).toEqual({
      1: testList[0],
      2: testList[1],
      3: testList[2],
    });

    expect(listToObject(getId)(getLetter)(testList)).toEqual({
      1: 'a',
      2: 'b',
      3: 'c',
    });

    expect(listToObject(getLetter)(getId)(testList)).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
});
