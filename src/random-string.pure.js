const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const sizeDict = dict.length;


const randomString = (len = 32) => {
	let result = '';


	for(let i = 0; i < len; i++) {
		result += dict.charAt(Math.floor(Math.random() * sizeDict));
	}


	return result;
};



export default randomString;
