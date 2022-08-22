const toCSSLength = value => {
	const rawTrim = String(value).trim();


	if(/^[1-9]\d*(\.\d+)?$/.test(rawTrim)) {
		return `${rawTrim}px`;
	}

	return rawTrim;
};



export default toCSSLength;
