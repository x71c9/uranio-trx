/**
 * Module for logging
 *
 * @packageDocumentation
 */

/*
 * Import dateformat module
 */
import dateFormat from 'dateformat';

export enum LogLevel {None, Error, Warning, Log, Debug, FunctionDebug}

type LogType = 'error' | 'warn' | 'log' | 'debug' | 'fndebug';

class URNLog {
	
	public constructor(
		public log_level = LogLevel.Error,
		public time_format = "yyyy-mm-dd'T'HH:MM:ss:l",
		public max_str_length = 174
	){
	}
	
	/**
	 * List of all the style that can be used in terminal
	 */
	public static terminal_styles = {
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
		'fglightYellow' : "'\x1b[93m",
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
	}
	
	public debug_constructor(){
		
		const that = this;
		
		/**
		 * Class @decorator function for loggin constructor with arguments
		 *
		 * @param constr_func - the constructor (check Decorator documentation)
		 */
		function debug_constructor_decorator<T extends { new (...constr_args:any[]):any }>(constr_func: T){
			

			const ExtClass = class extends constr_func {
				constructor(...args: any[]){
					that.fndebugCostructor(URNLog.randId(), constr_func.name, URNLog.formatArgs(args, that.max_str_length));
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
		return debug_constructor_decorator;
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
	private replace_method_with_logs(
		target:any,
		descriptor:PropertyDescriptor,
		property_name:string,
		appendix=''
	){
		const original_method = descriptor.value;
		var that = this;
		descriptor.value = function(...args:any[]) {
			const rand_id = URNLog.randId();
			const target_name = (appendix!='') ? appendix + ' ' + target.name : target.name;
			that.fndebugMethodWithArgs(
				rand_id,
				target_name,
				property_name,
				URNLog.formatArgs(args, that.max_str_length)
			);
			const result = original_method.apply(this, args);
			that.fndebugMethodResponse(
				rand_id,
				target_name,
				property_name,
				URNLog.formatResult(result, that.max_str_length)
			);
			if(result instanceof Promise){
				result.then((data:any) => {
					that.fndebugMethodResponse(
						rand_id,
						target_name,
						property_name,
						URNLog.formatResult(data, that.max_str_length),
						true);
				}).catch((err:Error) => {
					that.fndebugMethodResponseError(rand_id, target_name, property_name, err);
				});
			}
			return result;
		};
	}
	
	public debug_methods(){
		
		var that = this;
		
		/**
		 * Class @decorator function for logging each method inside the class
		 *
		 * @param target - the class itself (check Decorator documentation)
		 */
		function debug_methods_decorator(target:Function){
			//constructor methods
			for(const property_name of Object.getOwnPropertyNames(target.prototype)) {
				const descriptor = Object.getOwnPropertyDescriptor(target.prototype, property_name)!;
				if(!(descriptor.value instanceof Function) || property_name == 'constructor')
					continue;
				that.replace_method_with_logs(target, descriptor, property_name);
				Object.defineProperty(target.prototype, property_name, descriptor);
			}
			//static methods
			for(const property_name of Object.getOwnPropertyNames(target)) {
				const descriptor = Object.getOwnPropertyDescriptor(target, property_name)!;
				if(!(descriptor.value instanceof Function) || property_name == 'constructor')
					continue;
				that.replace_method_with_logs(target, descriptor, property_name, '[static]');
				Object.defineProperty(target, property_name, descriptor);
			}
		}
		
		return debug_methods_decorator;
	}
	
	/**
	 * Debug functions log
	 *
	 * @param ...params - variables to log
	 */
	public fndebug(...params:any[]){
		if(this.log_level > 4)
			this.cecho('fndebug', URNLog.terminal_styles.fgCyan, 1, ...params);
	}
	
	/**
	 * Debug log
	 *
	 * @param ...params - variables to log
	 */
	public debug(...params:any[]){
		if(this.log_level > 3)
			this.cecho('debug', URNLog.terminal_styles.fgBlue, 1, ...params);
	}
	
	/**
	 * Normal log
	 *
	 * @param ...params - variables to log
	 */
	public log(...params:any[]){
		if(this.log_level > 2)
			this.cecho('log', URNLog.terminal_styles.fgDefault, 2, ...params);
	}
	
	/**
	 * Warning log
	 *
	 * @param ...params - variables to log
	 */
	public warn(...params:any[]){
		if(this.log_level > 1)
			this.cecho('warn', URNLog.terminal_styles.fgYellow, 3, ...params);
	}
	
	/**
	 * Error log
	 *
	 * @param ...params - variables to log
	 */
	public error(...params:any[]){
		if(this.log_level > 0)
			this.cecho('error', URNLog.terminal_styles.fgRed, -1, ...params);
	}
	
	private log_stack(type:LogType, stylelog:string, depth:number)
			:void{
		const stack = new Error().stack;
		if(stack == undefined){
			console.error('CANNOT LOG STACK');
			return;
		}
		const now = dateFormat(new Date(), this.time_format);
		const head_string = now + ' <' + type + '> ';
		const splitted_stack = stack.split('\n');
		let start = 0;
		let till = (depth == -1) ? splitted_stack.length - 3 : depth;
		if(type == 'fndebug'){
			start = 1;
			till++;
		}
		for(let i = start; i < till && 3 + i < splitted_stack.length; i++){
			const psc = splitted_stack[3 + i];
			const call_info = /\(([^)]+)\)/.exec(psc); // get info from inside []
			let string = '';
			string += head_string;
			string += (call_info != null) ? call_info[1] : psc.split('at ')[1];
			console.log(stylelog, string);
		}
	}
	
	private log_param(p:any, stylelog:string)
			:void{
		let processed_param:string[] = [];
		if(p instanceof Error && p.stack != undefined){
			processed_param = p.stack.split('\n');
		}else if(typeof p == 'object'){
			processed_param = URNLog.jsonOneLine(p).split('\n');
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
			console.log(stylelog, pp);
		}
	}
	
	/**
	 * Common commands between all the types of logs
	 *
	 * @param type - type of log
	 * @param style - terminal_style to use for the log
	 * @param ...params - variables to log
	 */
	private cecho(type:LogType, style='', depth=1, ...params:any[]){
		const stylelog = style + '%s' + URNLog.terminal_styles.reset;
		this.log_stack(type, stylelog, depth);
		for(const p of params){
			this.log_param(p, stylelog);
		}
		console.log(stylelog, ' ');
		
	}
	
	/**
	 * Generate random id
	 */
	public static randId():string{
		const milliseconds = dateFormat(new Date(), 'l');
		return (Math.floor(Math.random()*100) + '' + milliseconds).padStart(5,'0');
	}
	
	/**
	 * Stringify in oneline
	 */
	public static jsonOneLine(obj:any,white_space=' '):string{
		return JSON.stringify(
			obj,
			(k,v) => { return v === undefined || k === undefined ? 'undefined' : v; },
			white_space
		);
	}
	
	/**
	 * Debug constructor with arguments
	 */
	public fndebugCostructor(rand_id:string, constructor_name:string, str_args:string){
		this.fndebug(`[${rand_id}] new ${constructor_name}(${str_args})`);
	}
	
	/**
	 * Debug private constructor with arguments
	 */
	public fndebugPrivateCostructor(rand_id:string, constructor_name:string, str_args:string){
		this.fndebug(`[${rand_id}] private ${constructor_name}(${str_args})`);
	}
	
	/**
	 * Debug a method with arguments
	 */
	public fndebugMethodWithArgs(rand_id:string, target_name:string, method:string, str_args:string):void{
		this.fndebug(`[${rand_id}] ${target_name}.${method}(${str_args})`);
	}
	
	/**
	 * Debug a response of a method
	 */
	public fndebugMethodResponse(rand_id:string, target_name:string, method:string, str_result:string, is_promise=false):void{
		const promise_str = (is_promise) ? ' [Promise]' : '';
		this.fndebug(`[${rand_id}] [R]${promise_str} ${target_name}.${method}:`, `${str_result}`);
	}
	
	/**
	 * Debug a response method error 
	 */
	public fndebugMethodResponseError(rand_id:string, target_name:string, method:string, error:Error):void{
		this.fndebug(`[${rand_id}] [R] ${target_name}.${method}: ERROR`);
		this.fndebug(error);
	}
	
	/**
	 * Format arguments
	 */
	public static formatArgs(args:any[], max_str_length:number):string{
		let str_args = (args.length > 0) ? `${args}` : '';
		try{
			str_args = (args.length > 0) ? URNLog.jsonOneLine(args) : '';
			str_args = str_args.substr(1,str_args.length-2);
		}catch(e){}
		if(typeof str_args == 'string' && str_args.length > max_str_length)
			str_args = str_args.substr(0, max_str_length) + '...';
		return str_args;
	}
	
	/**
	 * Format response into string for debugging
	 */
	public static formatResult(result:any, max_str_length:number):string{
		let str_result = `${result}`;
		try{
			str_result = `${result}`;
			str_result = URNLog.jsonOneLine(result);
		}catch(e){}
		if(typeof str_result == 'string' && str_result.length > max_str_length)
			str_result = str_result.substr(0, max_str_length) + '...';
		return str_result;
	}
}

export default function(
	log_level = LogLevel.Error,
	time_format = "yyyy-mm-dd'T'HH:MM:ss:l",
	max_str_length = 174)
		:URNLog{
	return new URNLog(log_level, time_format, max_str_length);
}


