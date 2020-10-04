/**
 * Module for logging
 *
 * Use like
 * import * as urn_console from './log/log';
 *
 * @packageDocumentation
 */

/*
 * Import dateformat module
 */
import dateFormat from 'dateformat';

/*
 * Import log configuration file
 */
import log_defaults from './log.defaults';

/*
 * Import URNLogType
 */
import {URNLogType} from './log.t';

/*
 * Export imported URNLogLevel as LogLevel
 */
export {URNLogLevel as LogLevel} from './log.t';

/*
 * Export log_defaults as config
 */
export {log_defaults as config};

/*
 * Import URNResponseInjectable
 */
import {URNResponseInjectable} from '../util/response_injectable.t';

/**
 * Debug functions log
 *
 * @param ...params - variables to log
 */
export function fndebug(...params:any[])
		:void{
	const style = (log_defaults.context == 'browser') ?
		console_styles.fg_fndebug : terminal_styles.fgCyan;
	if(log_defaults.log_level > 4){
		cecho('fndebug', style, 6, 1, ...params);
	}
}

/**
 * Debug log
 *
 * @param ...params - variables to log
 */
export function debug(...params:any[])
		:void{
	const style = (log_defaults.context == 'browser') ?
		console_styles.fg_debug : terminal_styles.fgBlue;
	if(log_defaults.log_level > 3){
		cecho('debug', style, 4, 1, ...params);
	}
}

/**
 * Normal log
 *
 * @param ...params - variables to log
 */
export function log(...params:any[])
		:void{
	const style = (log_defaults.context == 'browser') ?
		console_styles.fg_log : terminal_styles.fgLightBlue;
	if(log_defaults.log_level > 2){
		cecho('log', style, 4, 2, ...params);
	}
}

/**
 * Warning log
 *
 * @param ...params - variables to log
 */
export function warn(...params:any[])
		:void{
	const style = (log_defaults.context == 'browser') ?
		console_styles.fg_warn : terminal_styles.fgYellow;
	if(log_defaults.log_level > 1){
		cecho('warn', style, 4, 3, ...params);
	}
}

/**
 * Error log
 *
 * @param ...params - variables to log
 */
export function error(...params:any[])
		:void{
	const style = (log_defaults.context == 'browser') ?
		console_styles.fg_error : terminal_styles.fgRed;
	if(log_defaults.log_level > 0){
		cecho('error', style, 4, -1, ...params);
	}
}

/**
 * Log stack
 *
 * @param type - the type of log [error|warn|log|...]. See URNLogType.
 * @param stylelog - formatted string for styling.
 * @param depth - how many lines should be log from the stack.
 * @param start - at what line the stack should start.
 */
function log_stack(type:URNLogType, stylelog:string, start=4, depth=-1)
		:void{
	const stack = new Error().stack;
	if(stack == undefined){
		console.error('CANNOT LOG STACK');
		return;
	}
	const now = dateFormat(new Date(), log_defaults.time_format);
	const head_string = now + ' <' + type + '> ';
	const splitted_stack = stack.split('\n');
	const till = (depth == -1) ? splitted_stack.length - 4 : depth;
	for(let i = start; i < start + till && i < splitted_stack.length; i++){
		const psc = splitted_stack[i];
		const call_info = /\(([^)]+)\)/.exec(psc); // get info from inside []
		let string = '';
		string += head_string;
		string += (call_info != null) ? call_info[1] : psc.split('at ')[1];
		if(log_defaults.context == 'browser'){
			console.log('%c%s', stylelog, string);
		}else{
			console.log(stylelog, string);
		}
	}
}

/**
 * Log prameter
 *
 * @param p - anything to be logged.
 * @param stylelog - a formatted string for styling.
 */
function log_param(p:any, stylelog:string)
		:void{
	let processed_param:string[] = [];
	if(p instanceof Error && p.stack != undefined){
		processed_param = p.stack.split('\n');
	}else if(typeof p == 'object'){
		processed_param = jsonOneLine(p).split('\n');
	}else if(typeof p == 'string'){
		processed_param = p.split('\n');
	}else if(p === false){
		processed_param = ['false'];
	}else if(p === 0){
		processed_param = ['0'];
	}else if(p === undefined){
		processed_param = ['undefined'];
	}else if(p === null){
		processed_param = ['null'];
	}
	for(const pp of processed_param){
		if(log_defaults.context == 'browser'){
			console.log('%c%s', stylelog, pp);
		}else{
			console.log(stylelog, pp);
		}
	}
}

/**
 * Common commands between all the types of logs
 *
 * @param type - type of log
 * @param style - terminal_style to use for the log
 * @param depth - how many lines of stack should be printed
 * @param start - at what line the stack should start
 * @param ...params - variables to log
 */
function cecho(type:URNLogType, style:string|string[], start:number, depth:number, ...params:any[])
		:void{
	let stylelog = style + '%s' + terminal_styles.reset;
	if(log_defaults.context == 'browser'){
		if(Array.isArray(style)){
			stylelog = style.join(' ');
		}else{
			stylelog = style;
		}
	}
	log_stack(type, stylelog, start, depth);
	for(const p of params){
		log_param(p, stylelog);
	}
	if(log_defaults.context == 'browser'){
		console.log('%c%s', stylelog, ' ');
	}else{
		console.log(stylelog, ' ');
	}
}

/**
 * Generate random id
 */
export function randId():string{
	const milliseconds = dateFormat(new Date(), 'l');
	return (Math.floor(Math.random()*100) + '' + milliseconds).padStart(5,'0');
}

/**
 * Stringify in oneline
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function jsonOneLine(obj:any, white_space=' '):string{
	return JSON.stringify(
		obj,
		(k,v) => { return v === undefined || k === undefined ? 'undefined' : v; },
		white_space
	);
}

/**
 * Debug constructor with arguments
 *
 * @param rand_id - A random ID that will be use to associate a constructor been called and its response.
 * @param constructor_name - The constructor name.
 * @param str_args - A string containing the arguments.
 */
export function fndebugCostructor(rand_id:string, constructor_name:string, str_args:string)
		:void{
	fndebug(`[${rand_id}] new ${constructor_name}(${str_args})`);
}

/**
 * Debug private constructor with arguments
 *
 * @param rand_id - A random ID that will be use to associate a constructor been called and its response.
 * @param constructor_name - The constructor name.
 * @param str_args - A string containing the arguments.
 */
export function fndebugPrivateCostructor(rand_id:string, constructor_name:string, str_args:string)
		:void{
	fndebug(`[${rand_id}] private ${constructor_name}(${str_args})`);
}

/**
 * Debug a method with arguments
 *
 * @param rand_id - A random ID that will be use to associate a constructor been called and its response.
 * @param target_name - The name of the class being called.
 * @param method - The name of the method being called.
 * @param str_args - A string containing the arguments.
 */
export function fndebugMethodWithArgs(rand_id:string, target_name:string, method:string, str_args:string)
		:void{
	fndebug(`[${rand_id}] ${target_name}.${method}(${str_args})`);
}

/**
 * Debug a response of a method
 *
 * @param rand_id - A random ID that will be use to associate a constructor been called and its response.
 * @param target_name - The name of the class being called.
 * @param method - The name of the method being called.
 * @param str_result - The result of the method as string.
 * @param is_promise - A boolean value, true if the method return a Promise.
 */
export function fndebugMethodResponse(rand_id:string, target_name:string, method:string, str_result:string, is_promise=false)
		:void{
	const promise_str = (is_promise) ? ' [Promise]' : '';
	fndebug(`[${rand_id}] [R]${promise_str} ${target_name}.${method}:`, `${str_result}`);
}

/**
 * Debug a response method error
 *
 * @param rand_id - A random ID that will be use to associate a constructor been called and its response.
 * @param target_name - The name of the class being called.
 * @param method - The name of the method being called.
 * @param error - The error to log.
 */
export function fndebugMethodResponseError(rand_id:string, target_name:string, method:string, error:Error)
		:void{
	fndebug(`[${rand_id}] [R] ${target_name}.${method}: ERROR`);
	fndebug(error);
}

/**
 * Format arguments
 *
 * @param args - Array of paramter to format.
 * @param max_str_length - Max string length for formatted arguments.
 */
export function formatArgs(args:any[], max_str_length:number)
		:string{
	let str_args = (args.length > 0) ? `${args}` : '';
	try{
		str_args = (args.length > 0) ? jsonOneLine(args) : '';
		str_args = str_args.substr(1,str_args.length-2);
	}catch(e){
		str_args = `[CANNOT FORMAT ARGUMENTS][${e.message}]`;
	}
	if(typeof str_args == 'string' && str_args.length > max_str_length)
		str_args = str_args.substr(0, max_str_length) + '...';
	return str_args;
}

/**
 * Format response into string for debugging
 *
 * @param result - The result to log.
 * @param max_str_length - Max string length for formatted result.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function formatResult(result:any, max_str_length:number)
		:string{
	let str_result = `${result}`;
	try{
		str_result = `${result}`;
		str_result = jsonOneLine(result);
	}catch(e){
		str_result = `[CANNOT FORMAT RESULT][${e.message}]`;
	}
	if(typeof str_result == 'string' && str_result.length > max_str_length)
		str_result = str_result.substr(0, max_str_length) + '...';
	return str_result;
}

/**
 * List of all the style that can be used in terminal
 */
const terminal_styles = {
	'reset': "\x1b[0m",
	'bright' : "\x1b[1m",
	'dim' : "\x1b[2m",
	'underscore' : "\x1b[4m",
	'blink' : "\x1b[5m",
	'reverse' : "\x1b[7m",
	'hidden' : "\x1b[8m",
	'fgBlack' : "\x1b[30m",
	'fgRed' : "\x1b[31m",
	'fgGreen' : "\x1b[32m",
	'fgYellow' : "\x1b[33m",
	'fgBlue' : "\x1b[34m",
	'fgMagenta' : "\x1b[35m",
	'fgCyan' : "\x1b[36m",
	'fgWhite' : "\x1b[37m",
	'fgDefault' : "\x1b[39m",
	'fgLightGrey' : "\x1b[90m",
	'fgLightRed' : "\x1b[91m",
	'fgLightGreen' : "\x1b[92m",
	'fglightYellow' : "\x1b[93m",
	'fgLightBlue' : "\x1b[94m",
	'fgLoghtMagenta' : "\x1b[95m",
	'fgLightCyan' : "\x1b[96m",
	'fgLightWhite' : "\x1b[97m",
	'bgBlack' : "\x1b[40m",
	'bgRed' : "\x1b[41m",
	'bgGreen' : "\x1b[42m",
	'bgYellow' : "\x1b[43m",
	'bgBlue' : "\x1b[44m",
	'bgMagenta' : "\x1b[45m",
	'bgCyan' : "\x1b[46m",
	'bgWhite' : "\x1b[47m",
	'bgDefault' : "\x1b[49m",
	'Light Gray' : "\x1b[100m",
	'Light Red' : "\x1b[101m",
	'Light Green' : "\x1b[102m",
	'Light Yellow' : "\x1b[103m",
	'Light Blue' : "\x1b[104m",
	'Light Magenta' : "\x1b[105m",
	'Light Cyan' : "\x1b[106m",
	'Light White' : "\x1b[107m"
};

const console_styles = {
	underline: 'text-decoration: underline;',
	fg_black: 'color: black;',
	fg_red: 'color: red;',
	fg_green: 'color: green;',
	fg_yellow: 'color: yellow;',
	fg_orange: 'color: #e69500;',
	fg_blue: 'color: blue;',
	fg_magenta: 'color: magenta;',
	fg_cyan: 'color: cyan;',
	fg_white: 'color: white;',
	fg_grey: 'color: grey;',
	fg_fndebug: 'color: #848484;',
	fg_debug: 'color: #4880ae;',
	fg_log: 'color: #006ec8;',
	fg_warn: 'color: #cf8d00;',
	fg_error: 'color: #e20000;',
	bg_black: 'background-color: black;',
	bg_red: 'background-color: red;',
	bg_green: 'background-color: green;',
	bg_yellow: 'background-color: yellow;',
	bg_blue: 'background-color: blue;',
	bg_magenta: 'background-color: magenta;',
	bg_cyan: 'background-color: cyan;',
	bg_white: 'background-color: white;'
};

/**
 * Class @decorator function for loggin constructor with arguments
 * The function will actually return a decorator function.
 *
 * @param log_instance - the log instance that will be used for logging
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debug_constructor<T extends { new (...constr_args:any[]):any }>(constr_func: T)
		:{new (...a:any[]):any}{
	const ExtClass = class extends constr_func {
		constructor(...args: any[]){
			fndebugCostructor(randId(), constr_func.name, formatArgs(args, log_defaults.max_str_length));
			super(...args);
		}
	};
	for(const property_name of Object.getOwnPropertyNames(constr_func)) {
		const descriptor = Object.getOwnPropertyDescriptor(constr_func, property_name)!;
		if(property_name != 'prototype')
			Object.defineProperty(ExtClass, property_name, descriptor);
	}
	return ExtClass;
}


/**
 * Helper function that replace method with a new function that logs before and after
 * Used in the decorator function debug_method
 *
 * @param target - the class
 * @param descriptor - the method descriptor
 * @param property_name - the method name
 * @param appendix - a string to add before the name of the property logged
 */
function replace_method_with_logs(
	target:any,
	descriptor:PropertyDescriptor,
	property_name:string,
	appendix=''
){
	const original_method = descriptor.value;
	descriptor.value = function(...args:any[]) {
		const rand_id = randId();
		const target_name = (appendix!='') ? appendix + ' ' + target.name : target.name;
		fndebugMethodWithArgs(
			rand_id,
			target_name,
			property_name,
			formatArgs(args, log_defaults.max_str_length)
		);
		const result = original_method.apply(this, args);
		fndebugMethodResponse(
			rand_id,
			target_name,
			property_name,
			formatResult(result, log_defaults.max_str_length)
		);
		if(result instanceof Promise){
			result.then((data:any) => {
				fndebugMethodResponse(
					rand_id,
					target_name,
					property_name,
					formatResult(data, log_defaults.max_str_length),
					true);
			}).catch((err:Error) => {
				fndebugMethodResponseError(rand_id, target_name, property_name, err);
			});
		}
		return result;
	};
}

/**
 * Class @decorator function for logging each method inside the class
 *
 * The function return a decorator function.
 *
 * @param target - the class itself (check Decorator documentation)
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debug_methods(target:Function):void{
	//constructor methods
	for(const property_name of Object.getOwnPropertyNames(target.prototype)) {
		const descriptor = Object.getOwnPropertyDescriptor(target.prototype, property_name)!;
		if(!(descriptor.value instanceof Function) || property_name == 'constructor')
			continue;
		replace_method_with_logs(target, descriptor, property_name);
		Object.defineProperty(target.prototype, property_name, descriptor);
	}
	//static methods
	for(const property_name of Object.getOwnPropertyNames(target)) {
		const descriptor = Object.getOwnPropertyDescriptor(target, property_name)!;
		if(!(descriptor.value instanceof Function) || property_name == 'constructor')
			continue;
		replace_method_with_logs(target, descriptor, property_name, '[static]');
		Object.defineProperty(target, property_name, descriptor);
	}
}

/**
 * Method for creating an injectable object
 *
 * This object can be used in "return" module.
 */
export function create_injectable_logger()
		:URNResponseInjectable{
	return {
		success_handler: (p) => {
			const style = (log_defaults.context == 'browser') ?
				console_styles.fg_log : terminal_styles.fgLightBlue;
			if(log_defaults.log_level > 2)
				cecho('log', style, 2, 8, p);
			return p;
		},
		fail_handler: (p) => {
			const style = (log_defaults.context == 'browser') ?
				console_styles.fg_error : terminal_styles.fgRed;
			if(log_defaults.log_level > 0)
				cecho('error', style, -1, 8, p);
			return p;
		}
	};
}



