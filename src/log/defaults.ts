
import {URNLogLevel} from '../types/log';

export interface LogConfig extends Object{
	
	[key:string]: any,
	
	log_level:URNLogLevel;
	
	time_format: string;
	
	max_str_length: number;
}

const defaults:LogConfig = {
	
	log_level: URNLogLevel.ERROR,
	
	time_format: "yyyy-mm-dd'T'HH:MM:ss:l",
	
	max_str_length: 174
};

export function merge_config(partial_config:Partial<LogConfig>|undefined, default_config:LogConfig)
		:LogConfig{
	const default_copy = Object.create(default_config);
	if(!partial_config)
		return default_copy;
	for(const k in partial_config){
		default_copy[k] = partial_config[k];
	}
	return default_copy;
}

export default defaults;
