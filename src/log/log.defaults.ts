import {terminal_log_injector} from '../log/console_injector';

import {URNLogLevel, URNLogContext} from './log.t';

import {URNLogInjectable} from '../util/log_injectable.t';

interface LogDefaults {
	
	log_level: URNLogLevel;
	
	time_format:string;
	
	max_str_length:number;
	
	context:URNLogContext;
	
	injectors:URNLogInjectable[];
	
}

const log_defaults:LogDefaults = {
	
	log_level: URNLogLevel.ERROR,
	
	time_format: "yyyy-mm-dd'T'HH:MM:ss:l",
	
	max_str_length: 174,
	
	context: 'terminal',
	
	injectors: [
		terminal_log_injector
	]
	
};

export default log_defaults;
