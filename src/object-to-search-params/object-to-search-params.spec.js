import objectToSearchParams from './object-to-search-params';

describe('objectToSearchParams', () => {
  test('should return an empty string if no params were given', () => {
    expect(objectToSearchParams()).toEqual('');
    expect(objectToSearchParams({})).toEqual('');
  });

  test('should return search params string starting with `?` if valid params were given', () => {
    const params = {
      a: 'a&b/sideli/na/trube',
      b: 2,
      c: ['3', '4', '5', '6&7'],
    };
    const expectedResult = `?a=${encodeURIComponent(params.a)}&b=2&c=3&c=4&c=5&c=${encodeURIComponent(params.c[params.c.length - 1])}`;

    expect(objectToSearchParams(params)).toEqual(expectedResult);
  });
});
