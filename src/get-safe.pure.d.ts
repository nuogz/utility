export default getSafe;
export type GetInfo = {
    value: any;
    parent: any;
    key: string;
};
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
declare function getSafe(value: any, path?: string): GetInfo | undefined;
