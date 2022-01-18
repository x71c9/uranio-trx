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
	
	if(!config){
		conf.set_from_env(trx_client_config);
	}else{
		conf.set(trx_client_config, config);
	}
	
	_validate_trx_client_variables();
	_validate_trx_client_book();
	
	conf.set_initialize(true);
}

/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
function _validate_trx_client_book(){
	// example function
	// _validate_dock_url_uniqueness();
	// _validate_dock_route_url_uniqueness();
	// _validate_route_name();
}

/**
 * NOTE:
 * Maybe there is no need for this, it is already valid?
 * It depends if the client books have different properties of the server one.
 */
function _validate_trx_client_variables(){
	// example function
}
