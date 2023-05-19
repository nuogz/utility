const copyJSON = (object, optionParse) => JSON.parse(JSON.stringify(object), undefined, optionParse);



export default copyJSON;
