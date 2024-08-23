/**
 * @param {Object} target
 * @param {LoggerOption} [option={}]
 */
export default function injectBaseLogger(target: Object, option?: LoggerOption | undefined): void;
export type SingleLoggerNamed = (level: string, nameLog: string, ...data: any[]) => void;
export type SingleLogger = (level: string, ...data: any[]) => void;
export type LevelLoggerNamed = (nameLog: string, ...data: any[]) => void;
export type LevelLogger = (...data: any[]) => void;
export type LoggerLike = SingleLoggerNamed | SingleLogger | LevelLoggerNamed | LevelLogger;
export type LoggerMap = {
    trace?: LevelLoggerNamed | LevelLogger | undefined;
    debug?: LevelLoggerNamed | LevelLogger | undefined;
    info?: LevelLoggerNamed | LevelLogger | undefined;
    warn?: LevelLoggerNamed | LevelLogger | undefined;
    error?: LevelLoggerNamed | LevelLogger | undefined;
    fatal?: LevelLoggerNamed | LevelLogger | undefined;
    mark?: LevelLoggerNamed | LevelLogger | undefined;
};
export type LoggerOption = {
    name?: string | undefined;
    useNameLog?: boolean | undefined;
    logger?: SingleLoggerNamed | SingleLogger | LoggerMap | undefined;
    keysFallback?: string[] | undefined;
};
