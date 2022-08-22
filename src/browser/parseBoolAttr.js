/**
 * - `undefined`, `null`, `"false"`, `false` would return `false`
 * - others would return `true`
 */
const parseBoolAttr = value =>
	(
		value === undefined ||
		value === null ||
		value === false ||
		(typeof value == 'string' && value.toLowerCase() == 'false')
	)
		? false
		: true;



export default parseBoolAttr;
