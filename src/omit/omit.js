// @flow

export default function omit(keys: Array<string> = []) {
	return (object: {} = {}) => Object.keys(object).reduce((result, key) => {
		if (keys.indexOf(key) === -1) {
			result[key] = object[key];
		}

		return result;
	}, {});
}