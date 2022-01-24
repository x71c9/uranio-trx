/**
 * Init module
 *
 * @packageDocumentation
 */

import {trx_client_config} from '../cln/defaults';

import * as types from '../cln/types';

import * as conf from '../conf/client';

import {raw_config} from '../raw/defaults';

export function init(config?:types.ClientConfiguration)
		:void{
	
	if(!config){
		conf.set_from_env(trx_client_config);
	}else{
		conf.set(trx_client_config, config);
	}
	
	_set_raw();
	
	_validate_trx_client_variables();
	_validate_trx_client_book();
	
	conf.set_initialize(true);
}

function _set_raw(){
	raw_config.service_url = ``;
	raw_config.service_url += `${trx_client_config.protocol}://`;
	raw_config.service_url += `${trx_client_config.domain}:`;
	raw_config.service_url += `${trx_client_config.port}/uranio/api`;
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
