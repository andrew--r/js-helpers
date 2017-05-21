// 

export default function pluck(key) {
	return (array) => array.map((object) => object[key]);
}
