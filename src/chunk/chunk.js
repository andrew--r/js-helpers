// @flow

export default function chunk(chunkItemsCount: number) : Function {
	if (typeof chunkItemsCount !== 'number') {
		return (x: any) : any => x;
	}

	return (array: Array<any> = []) : Array<any> => array.reduce((result, item, index) => {
		if (index % chunkItemsCount === 0) {
			result.push([item]);
		} else {
			result[result.length - 1].push(item);
		}

		return result;
	}, []);
}
