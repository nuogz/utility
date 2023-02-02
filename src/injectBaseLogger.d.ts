/**
 * @param {Object} target
 * @param {LoggerOption} [option={}]
 */
export default function injectBaseLogger(target: any, option?: LoggerOption): void;
export type SingleLoggerNamed = (level: string, nameLog: string, ...data: any[]) => void;
export type SingleLogger = (level: string, ...data: any[]) => void;
export type LevelLoggerNamed = (nameLog: string, ...data: any[]) => void;
export type LevelLogger = (...data: any[]) => void;
export type LoggerLike = SingleLoggerNamed | SingleLogger | LevelLoggerNamed | LevelLogger;
export type LoggerMap = {
    trace?: LevelLoggerNamed | LevelLogger;
    debug?: LevelLoggerNamed | LevelLogger;
    info?: LevelLoggerNamed | LevelLogger;
    warn?: LevelLoggerNamed | LevelLogger;
    error?: LevelLoggerNamed | LevelLogger;
    fatal?: LevelLoggerNamed | LevelLogger;
    mark?: LevelLoggerNamed | LevelLogger;
};
export type LoggerOption = {
    name?: string;
    useNameLog?: boolean;
    logger?: SingleLoggerNamed | SingleLogger | LoggerMap;
    keysFallback?: string[];
};
