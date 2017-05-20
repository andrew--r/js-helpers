// 

export default function chunk(chunkItemsCount) {
	if (typeof chunkItemsCount !== 'number') {
		return (x) => x;
	}

	return (array = []) => array.reduce((result, item, index) => {
		if (index % chunkItemsCount === 0) {
			result.push([item]);
		} else {
			result[result.length - 1].push(item);
		}

		return result;
	}, []);
}
