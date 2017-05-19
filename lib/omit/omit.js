// 

export default function omit(keys = []) {
	return (object = {}) => Object.keys(object).reduce((result, key) => {
		if (keys.indexOf(key) === -1) {
			result[key] = object[key];
		}

		return result;
	}, {});
}
