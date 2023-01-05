/**
 * @callback SingleLogFunction
 * @param {string} level
 * @param {string} nameLog
 * @param {...any} data
 */

/**
 * @callback LogFunction
 * @param {string} nameLog
 * @param {...any} data
 */

/**
 * @typedef {Object} LogFunctions
 * @property {LogFunction} trace
 * @property {LogFunction} debug
 * @property {LogFunction} info
 * @property {LogFunction} warn
 * @property {LogFunction} error
 * @property {LogFunction} fatal
 * @property {LogFunction} mark
 */


/**
 * @typedef {Object} LogOption
 * @property {string} name
 * @property {(false|null)|SingleLogFunction|LogFunctions} logger
 */


const loggerClose = () => { };


/**
 * @param {Object} target
 * @param {LogOption} [option={}]
 */
export default function injectBaseLogger(target, option = {}) {
	target.nameLog = option.name ?? target.name ?? '';

	const { logger } = option;

	// close log
	if(logger === false) {
		target.logTrace = loggerClose;
		target.logDebug = loggerClose;
		target.logInfo = loggerClose;
		target.logError = loggerClose;
		target.logWarn = loggerClose;
		target.logFatal = loggerClose;
		target.logMark = loggerClose;
	}
	// log by single function
	else if(typeof logger == 'function') {
		target.logTrace = (...params) => logger('trace', target.nameLog, ...params);
		target.logDebug = (...params) => logger('debug', target.nameLog, ...params);
		target.logInfo = (...params) => logger('info', target.nameLog, ...params);
		target.logError = (...params) => logger('error', target.nameLog, ...params);
		target.logWarn = (...params) => logger('warn', target.nameLog, ...params);
		target.logFatal = (...params) => logger('fatal', target.nameLog, ...params);
		target.logMark = (...params) => logger('mark', target.nameLog, ...params);
	}
	// level-based log
	else {
		const csl = globalThis?.console ?? global.console ?? console;

		target.logTrace =
			typeof logger?.trace == 'function'
				? (...params) => logger.trace(target.nameLog, ...params)
				: (
					typeof csl.trace == 'function'
						? (...params) => csl.trace(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logDebug =
			typeof logger?.debug == 'function'
				? (...params) => logger.debug(target.nameLog, ...params)
				: (
					typeof csl.debug == 'function'
						? (...params) => csl.debug(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logInfo =
			typeof logger?.info == 'function'
				? (...params) => logger.info(target.nameLog, ...params)
				: (
					typeof csl.info == 'function'
						? (...params) => csl.info(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logError =
			typeof logger?.error == 'function'
				? (...params) => logger.error(target.nameLog, ...params)
				: (
					typeof csl.error == 'function'
						? (...params) => csl.error(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logWarn =
			typeof logger?.warn == 'function'
				? (...params) => logger.warn(target.nameLog, ...params)
				: (
					typeof csl.warn == 'function'
						? (...params) => csl.warn(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logFatal =
			typeof logger?.fatal == 'function'
				? (...params) => logger.fatal(target.nameLog, ...params)
				: (
					typeof csl.error == 'function'
						? (...params) => csl.error(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
		target.logMark =
			typeof logger?.mark == 'function'
				? (...params) => logger.mark(target.nameLog, ...params)
				: (
					typeof csl.info == 'function'
						? (...params) => csl.info(target.nameLog, ...params)
						: (...params) => csl.log(target.nameLog, ...params)
				);
	}
}
