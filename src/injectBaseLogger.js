/**
 * @callback SingleLoggerNamed
 * @param {string} level
 * @param {string} nameLog
 * @param {...any} data
 */
/**
 * @callback SingleLogger
 * @param {string} level
 * @param {...any} data
 */

/**
 * @callback LoggerNamed
 * @param {string} nameLog
 * @param {...any} data
 */
/**
 * @callback Logger
 * @param {...any} data
 */

/**
 * @typedef {Object} Logger
 * @property {LogFunction} trace
 * @property {LogFunction} debug
 * @property {LogFunction} info
 * @property {LogFunction} warn
 * @property {LogFunction} error
 * @property {LogFunction} fatal
 * @property {LogFunction} mark
 */


/**
 * @typedef {Object} LoggerOption
 * @property {string} [name]
 * @property {boolean} [useNameLog=true]
 * @property {SingleLoggerNamed|SingleLogger|LoggerNamed|Logger} [logger]
 * @property {string[]} [keysFallback=['info', 'log']]
 */



const levels = [
	'trace',
	'debug',
	'info',
	'error',
	'warn',
	'fatal',
	'mark',
];


const symbolSelf = Symbol('self');
const loggerClose = () => { };

const getLogger = (target, useNameLog, logger, level, symbol) =>
	!level
		? loggerClose
		: symbol === symbolSelf
			? useNameLog
				? (...params) => logger(level, target.nameLog, ...params)
				: (...params) => logger(level, ...params)
			: useNameLog
				? (...params) => logger[level](target.nameLog, ...params)
				: (...params) => logger[level](...params);



/**
 * @param {Object} target
 * @param {LoggerOption} [option={}]
 */
export default function injectBaseLogger(target, option = {}) {
	const { name, useNameLog = true, logger, keysFallback = ['info', 'log'] } = option;


	if(useNameLog) { target.nameLog = name ?? target.name ?? ''; }


	const keyFallback = logger ? keysFallback?.find(key => typeof logger?.[key] == 'function') : null;


	for(const level of levels) {
		const keyLog = `log${level.replace(/^\w/, c => c.toUpperCase())}`;

		target[keyLog] = !logger
			? loggerClose
			: getLogger(target, useNameLog, logger,
				...typeof logger == 'function' ? [level, symbolSelf]
					: typeof logger[level] == 'function' ? [level]
						: [keyFallback]
			);
	}
}
