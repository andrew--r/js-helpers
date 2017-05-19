import pick from './pick';

describe('pick', () => {
	const testObject = {
		a: 1,
		b: 2,
		c: 3,
	};
	const testKeysToPick = ['a', 'c'];

	test('should be curried', () => {
		expect(typeof pick()).toEqual('function');
		expect(typeof pick()()).toEqual('object');
	});

	test('should return an empty object if received nothing / an empty array / an empty object', () => {
		expect(pick()()).toEqual({});
		expect(pick()({})).toEqual({});
		expect(pick()(testObject)).toEqual({});
		expect(pick([])()).toEqual({});
		expect(pick([])({})).toEqual({});
		expect(pick([])(testObject)).toEqual({});
		expect(pick(testKeysToPick)()).toEqual({});
		expect(pick(testKeysToPick)({})).toEqual({});
	});

	test('should create a copy of a given object only with specified keys', () => {
		expect(pick(Object.keys(testObject))(testObject)).toEqual(testObject);
		expect(pick(['a', 'c'])(testObject)).toEqual({ a: 1, c: 3 });
		expect(pick(['b'])(testObject)).toEqual({ b: 2 });
		expect(pick(['unknown'])(testObject)).toEqual({});
		expect(pick(['unknown', 'a'])(testObject)).toEqual({ a: 1 });
	});
});
