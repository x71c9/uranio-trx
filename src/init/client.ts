/**
 * Init module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import api_client from 'uranio-api/client';

import {trx_client_config} from '../client/default_conf';

import {trx_client_env} from '../client/default_env';

import * as register from '../reg/client';

import * as required from '../req/client';

import * as types from '../client/types';

import * as conf from '../conf/client';

import * as env from '../env/client';

import * as log from '../log/client';

// import {raw_config} from '../raw/defaults';

export function init(
	config?: Partial<types.ClientConfiguration>,
	register_required=true
):void{
	
	api_client.init(config, false);
	
	env.set_from_env(trx_client_env);
	
	api_client.core.conf.set_from_file(trx_client_config);
	
	if(config){
		conf.set(trx_client_config, config);
	}
	
	if(register_required){
		_register_required_atoms();
	}
	
	// _set_raw();
	
	_validate_trx_client_variables();
	_validate_trx_client_book();
	
	conf.set_initialize(true);
	env.set_initialize(true);
	
	log.init(urn_log);
	
	urn_log.debug(`Uranio trx client initialization completed.`);
	
}

// function _add_default_routes(){
//   const core_atom_book = book.get_all_definitions();
//   for(const [atom_name, atom_def] of Object.entries(core_atom_book)){
//     if(atom_name === 'media'){
//       (atom_def.dock as any).routes = {
//         ...api_client.routes.default_routes,
//         ...api_client.routes.media_routes
//       };
//     }else{
//       (atom_def.dock as any).routes = api_client.routes.default_routes;
//     }
//     register.atom(atom_def as any, atom_name as any);
//   }
// }

function _register_required_atoms(){
	const required_atoms = required.get();
	for(const [atom_name, atom_def] of Object.entries(required_atoms)){
		register.atom(atom_def as types.Book.Definition, atom_name);
	}
}

// function _set_raw(){
//   raw_config.service_url = ``;
//   raw_config.service_url += `${trx_client_config.protocol}://`;
//   raw_config.service_url += `${trx_client_config.domain}:`;
//   raw_config.service_url += `${trx_client_config.port}/uranio/api`;
// }

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
