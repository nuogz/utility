export type SingleLogFunction = (level: string, nameLog: string, ...data: any[]) => any;
export type LogFunction = (nameLog: string, ...data: any[]) => any;
export type LogFunctions = {
	trace: LogFunction;
	debug: LogFunction;
	info: LogFunction;
	warn: LogFunction;
	error: LogFunction;
	fatal: LogFunction;
	mark: LogFunction;
};
export type LogOption = {
	name: string;
	logger: (false | null) | SingleLogFunction | LogFunctions;
};

export default function injectBaseLogger(target: any, option?: LogOption): void;
