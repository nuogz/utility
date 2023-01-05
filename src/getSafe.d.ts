export default getSafe;
/**
 * @param {any} object
 * @param {string} path split by `.`
 * @returns {({ value: any, parent: any, key: string } | undefined)}
 */
declare function getSafe(value: any, path?: string): {
    value: any;
    parent: any;
    key: string;
};
