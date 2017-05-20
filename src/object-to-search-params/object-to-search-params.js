// @flow

const castArray = (value: any) : Array<any> => [].concat(value);

export default function objectToSearchParams(params: {} = {}) : string {
	const keys = Object.keys(params);
	const entries = keys.map((key: string) : string => {
		const values: Array<string> = castArray(params[key]);

		return values
			.map((value) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&');
	});
	const result = entries.join('&');

	return result && `?${result}`;
}
