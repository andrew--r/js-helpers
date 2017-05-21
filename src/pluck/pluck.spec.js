import pluck from './pluck';

describe('pluck', () => {
	const testArray = [
		{ id: 1, letter: 'a' },
		{ id: 2, letter: 'b' },
		{ id: 3, letter: 'c' },
	];
	const pluckedIds = [1, 2, 3];
	const pluckedLetters = ['a', 'b', 'c'];

	test('should be curried', () => {
		expect(typeof pluck()).toEqual('function');
		expect(Array.isArray(pluck('id')(testArray))).toEqual(true);
	});

	test('should map an array of objects into an array of values from those objects by a given key', () => {
		expect(pluck('id')(testArray)).toEqual(pluckedIds);
		expect(pluck('letter')(testArray)).toEqual(pluckedLetters);
	});
});
