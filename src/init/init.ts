/**
 * Init module
 *
 * @packageDocumentation
 */

import {urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init('INIT_TRX_MODULE', `TRX init module`);

import urn_api from 'uranio-api';

import {trx_config} from '../conf/defaults';

import * as types from '../types';

import * as conf from '../conf/index';

import {raw_config} from '../raw/defaults';

export function init(config?:types.Configuration)
		:void{
	
	urn_api.init(config);
	
	if(typeof config === 'undefined'){
		urn_api.conf.set_from_env(trx_config);
	}else{
		urn_api.conf.set(trx_config, config);
	}
	
	_set_raw();
	
	_validate_trx_variables();
	// _validate_trx_book();
	
	conf.set_initialize(true);
}

function _set_raw(){
	raw_config.service_url = ``;
	raw_config.service_url += `${trx_config.service_protocol}://`;
	raw_config.service_url += `${trx_config.service_domain}:`;
	raw_config.service_url += `${trx_config.service_port}/uranio/api`;
}

/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
// function _validate_trx_book(){
// }

function _validate_trx_variables(){
	const service_domain = trx_config.service_domain;
	const service_port = trx_config.service_port;
	const client_domain = trx_config.client_domain;
	const client_port = trx_config.client_port;
	if(service_domain === client_domain && service_port === client_port){
		throw urn_exc.create_not_initialized(
			`INVALID DOMAINS AND PORTS`,
			`Cannot use same domain and port for server and client.`
		);
	}
}

