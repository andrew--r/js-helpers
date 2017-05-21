// @flow

export default function pluck(key: string) : Function {
	return (array: Array<{}>) : Array<any> => array.map((object) => object[key]);
}
