import omit from './omit';

describe('omit', () => {
	const testObject = {
		a: 1,
		b: 2,
		c: 3,
	};
	const testKeysToOmit = ['a', 'c'];

	test('should be curried', () => {
		expect(typeof omit()).toEqual('function');
		expect(typeof omit()()).toEqual('object');
	});

	test('should return an empty object if received nothing / an empty array / an empty object', () => {
		expect(omit()()).toEqual({});
		expect(omit()({})).toEqual({});
		expect(omit([])()).toEqual({});
		expect(omit([])({})).toEqual({});
		expect(omit(testKeysToOmit)()).toEqual({});
		expect(omit(testKeysToOmit)({})).toEqual({});
	});

	test('should create a copy of a given object without specified keys', () => {
		expect(omit(Object.keys(testObject))(testObject)).toEqual({});
		expect(omit(['a', 'c'])(testObject)).toEqual({ b: 2 });
		expect(omit(['b'])(testObject)).toEqual({ a: 1, c: 3 });
		expect(omit(['unknown'])(testObject)).toEqual(testObject);
		expect(omit(['unknown', 'a'])(testObject)).toEqual({ b: 2, c: 3 });
	});
});
