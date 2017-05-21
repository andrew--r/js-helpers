import chunk from './chunk';

describe('chunkArray', () => {
  test('should be curried', () => {
    expect(typeof chunk()).toEqual('function');
    expect(Array.isArray(chunk()([]))).toEqual(true);
  });

  test('should return the same array if chunk items count was not specified', () => {
    const identity = chunk();

    expect(identity([])).toEqual([]);
    expect(identity([1])).toEqual([1]);
    expect(identity([1, 2, 3, '4', '5'])).toEqual([1, 2, 3, '4', '5']);
  });

  test('should split given array into chunks with specified items count', () => {
    const testArray = [1, 2, 3, 4, 5];
    const chunkedByOne = [[1], [2], [3], [4], [5]];
    const chunkedByTwo = [[1, 2], [3, 4], [5]];
    const chunkedByThree = [[1, 2, 3], [4, 5]];
    const chunkedByFour = [[1, 2, 3, 4], [5]];
    const chunkedByFive = [[1, 2, 3, 4, 5]];
    const chunkedByLargeAmount = [[1, 2, 3, 4, 5]];

    expect(chunk(1)(testArray)).toEqual(chunkedByOne);
    expect(chunk(2)(testArray)).toEqual(chunkedByTwo);
    expect(chunk(3)(testArray)).toEqual(chunkedByThree);
    expect(chunk(4)(testArray)).toEqual(chunkedByFour);
    expect(chunk(5)(testArray)).toEqual(chunkedByFive);
    expect(chunk(testArray.length * 100)(testArray)).toEqual(chunkedByLargeAmount);
  });
});
