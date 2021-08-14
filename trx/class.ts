/**
 * Module for TRX
 *
 * @packageDocumentation
 */

import {urn_util, urn_log, urn_return, urn_response, urn_exception} from 'urn-lib';

const urn_ret = urn_return.create(urn_log.util.return_injector);

const urn_exc = urn_exception.init(`TRX`, `TRX module.`);

import * as client_types from '../cln/types';

import {atom_book} from 'uranio-books-client/atom';

import {api_book} from 'uranio-books-client/api';

import {create as create_raw} from '../raw/';

import {default_routes} from '../api/routes/public';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class TRX {
	
	private raw:client_types.RAW;
	
	constructor(public atom_name:client_types.AtomName){
		this.raw = create_raw();
	}
	
	public async call_route(route_name:string)
			:Promise<urn_response.General<any, any>>{
		_check_atom(this.atom_name);
		_check_route(this.atom_name, route_name);
		// ----
		// TODO implement api default route and call it
		// ----
	}
	
}

function _check_atom(atom_name:client_types.AtomName)
		:true{
	if(urn_util.object.has_key(atom_book, atom_name)){
		return true;
	}
	throw urn_exc.create_not_found(
		`TRXATOM_UNDEFINED`,
		`TRX Atom not found for atom [${atom_name}].`
	);
}

function _check_route(atom_name:client_types.AtomName, route_name:string)
		:true{
	if(urn_util.object.has_key(default_routes, route_name)){
		return true;
	}
	if(urn_util.object.has_key(api_book[atom_name], route_name)){
		return true;
	}
	throw urn_exc.create_not_found(
		`TRXROUTE_UNDEFINED`,
		`TRX Route not found for atom [${atom_name}] route [${route_name}].`
	);
}

export type TRXInstance = InstanceType<typeof TRX>;

export function create(atom_name:client_types.AtomName)
		:TRXInstance{
	urn_log.fn_debug('Create TRX');
	return new TRX(atom_name);
}

