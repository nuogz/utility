/**
 * @callback SingleLoggerNamed
 * @param {string} level
 * @param {string} nameLog
 * @param {...any} data
 * @returns {void}
 */
/**
 * @callback SingleLogger
 * @param {string} level
 * @param {...any} data
 * @returns {void}
 */

/**
 * @callback LevelLoggerNamed
 * @param {string} nameLog
 * @param {...any} data
 * @returns {void}
 */
/**
 * @callback LevelLogger
 * @param {...any} data
 * @returns {void}
 */

/**
 * @typedef {SingleLoggerNamed|SingleLogger|LevelLoggerNamed|LevelLogger} LoggerLike
 */


/**
 * @typedef {Object} LoggerMap
 * @property {LevelLoggerNamed|LevelLogger} [trace]
 * @property {LevelLoggerNamed|LevelLogger} [debug]
 * @property {LevelLoggerNamed|LevelLogger} [info]
 * @property {LevelLoggerNamed|LevelLogger} [warn]
 * @property {LevelLoggerNamed|LevelLogger} [error]
 * @property {LevelLoggerNamed|LevelLogger} [fatal]
 * @property {LevelLoggerNamed|LevelLogger} [mark]
 */


/**
 * @typedef {Object} LoggerOption
 * @property {string} [name]
 * @property {boolean} [useNameLog=true]
 * @property {SingleLoggerNamed|SingleLogger|LoggerMap} [logger]
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
