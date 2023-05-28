import { parse, stringify } from '@nuogz/json-bigint';



const copyJSON = (object, optionParse) => parse(stringify(object), undefined, optionParse);



export default copyJSON;
