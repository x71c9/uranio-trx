/**
 * Init module
 *
 * @packageDocumentation
 */

// import {urn_exception} from 'urn-lib';

// const urn_exc = urn_exception.init('INIT_TRX_MODULE', `TRX init module`);

import urn_api from 'uranio-api';

import {trx_config} from '../conf/defaults';

import * as types from '../types';

import * as conf from '../conf/';

// import * as book from '../book/';

export function init(config?:types.Configuration)
		:void{
	
	urn_api.init(config);
	
	if(typeof config === 'undefined'){
		urn_api.conf.set_from_env(trx_config);
	}else{
		urn_api.conf.set(trx_config, config);
	}
	// _validate_trx_variables();
	// _validate_trx_book();
	
	conf.set_initialize(true);
}

/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
// function _validate_trx_book(){
// }

// function _validate_trx_variables(){
// }
