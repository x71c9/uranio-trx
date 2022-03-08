/**
 * Init module
 *
 * @packageDocumentation
 */

// import {urn_log, urn_exception} from 'urn-lib';
import {urn_log} from 'urn-lib';

// const urn_exc = urn_exception.init('INIT_TRX_MODULE', `TRX init module`);

import api from 'uranio-api';

import {trx_config} from '../conf/defaults';

import {trx_env} from '../env/defaults';

import * as register from '../reg/server';

import * as required from '../req/server';

import * as types from '../server/types';

import * as client_types from '../client/types';

import * as conf from '../conf/server';

import * as env from '../env/server';

import * as log from '../log/server';

// import {raw_config} from '../raw/defaults';

export function init(
	config?: Partial<types.Configuration>,
	register_required=true
):void{
	
	api.init(config, false);
	
	env.set_from_env(trx_env);
	
	api.core.conf.set_from_file();
	
	if(config){
		conf.set(trx_config, config);
	}
	
	if(register_required){
		_register_required_atoms();
	}
	
	// _set_raw();
	
	_validate_trx_variables();
	_validate_trx_book();
	
	conf.set_initialize(true);
	env.set_initialize(true);
	
	log.init(urn_log);
	
	urn_log.debug(`Uranio trx initialization completed.`);
	
}

// function _add_default_routes(){
//   const core_atom_book = book.get_all_definitions();
//   for(const [atom_name, atom_def] of Object.entries(core_atom_book)){
//     (atom_def.dock as any).routes = api.routes.return_default_routes(atom_name as schema.AtomName);
//   }
// }

function _register_required_atoms(){
	const required_atoms = required.get();
	for(const [atom_name, atom_def] of Object.entries(required_atoms)){
		register.atom(atom_def as client_types.Book.Definition, atom_name);
	}
}

// function _set_raw(){
//   raw_config.service_url = ``;
//   raw_config.service_url += `${trx_config.service_protocol}://`;
//   raw_config.service_url += `${trx_config.service_domain}:`;
//   raw_config.service_url += `${trx_config.service_port}/uranio/api`;
// }

/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
function _validate_trx_book(){
	// NOTHING TO DO YET
}

function _validate_trx_variables(){
	// const service_domain = trx_config.service_domain;
	// const service_port = trx_config.service_port;
	// const client_domain = trx_config.client_domain;
	// const client_port = trx_config.client_port;
	// if(service_domain === client_domain && service_port === client_port){
	//   throw urn_exc.create_not_initialized(
	//     `INVALID_DOMAINS_AND_PORTS`,
	//     `Cannot use same domain and port for server and client.`
	//   );
	// }
}

