/**
 * @param {Object} target
 * @param {LoggerOption} [option={}]
 */
export default function injectBaseLogger(target: any, option?: LoggerOption): void;
export type SingleLoggerNamed = (level: string, nameLog: string, ...data: any[]) => any;
export type SingleLogger = (level: string, ...data: any[]) => any;
export type LoggerNamed = (nameLog: string, ...data: any[]) => any;
export type Logger = (...data: any[]) => any;
export type LoggerOption = {
    name?: string;
    useNameLog?: boolean;
    logger?: SingleLoggerNamed | SingleLogger | LoggerNamed | Logger;
    keysFallback?: string[];
};
