import JSONBigint from 'json-bigint';



const JSONBigintNative = JSONBigint({ useNativeBigInt: true });

const copyJSON = object => {
	try {
		return JSON.parse(JSON.stringify(object));
	}
	catch(error) {
		return JSONBigintNative.parse(JSONBigintNative.stringify(object));
	}
};



export default copyJSON;
