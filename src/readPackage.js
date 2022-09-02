import { readFileSync } from 'fs';



const readPackage = file => {
	let PKG;

	try {
		PKG = readFileSync(file, 'utf8');
		PKG = JSON.parse(PKG);
	}
	catch(error) {
		PKG = {};
	}

	return PKG;
};



export default readPackage;
