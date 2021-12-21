/**
 * Init module
 *
 * @packageDocumentation
 */

import {trx_client_config} from '../cln/defaults';

import * as types from '../cln/types';

import * as conf from '../conf/client';

export function init(config?:types.ClientConfiguration)
		:void{
	
	if(config){
		conf.set(trx_client_config, config);
	}
	
	conf.set_initialize(true);
}
