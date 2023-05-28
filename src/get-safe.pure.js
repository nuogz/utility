/**
 * @typedef {Object} GetInfo
 * @property {any} value
 * @property {any} parent
 * @property {string} key
 */


/**
 * @param {any} object
 * @param {string} path split by `.`
 * @returns {GetInfo | undefined}
 */
const getSafe = (value, path = '') => {
	let key;
	let parent;

	try {
		path.split('.').forEach(keyPath => {
			const nowTemp = value[keyPath];

			parent = value;
			value = nowTemp;
			key = keyPath;
		});
	}
	catch(error) {
		return undefined;
	}

	return { value, parent, key };
};



export default getSafe;
