/**
 * Module for TRX
 *
 * @packageDocumentation
 */

// import {urn_util, urn_log, urn_return, urn_response, urn_exception} from 'urn-lib';
import {urn_util, urn_log, urn_response, urn_exception} from 'urn-lib';

// const urn_ret = urn_return.create(urn_log.util.return_injector);

const urn_exc = urn_exception.init(`TRX`, `TRX module.`);

import {atom_book} from 'uranio-books-client/atom';

// import {api_book} from 'uranio-books-client/api';

import urn_api_client from 'uranio-api/client';

import * as client_types from '../cln/types';

import {create as create_raw} from '../raw/';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class TRX {
	
	private raw:client_types.RAW;
	
	constructor(public atom_name:client_types.AtomName){
		this.raw = create_raw();
	}
	
	public route(route_name:string)
			:(...args:any) => Promise<urn_response.General<any, any>>{
		_check_atom(this.atom_name);
		const route = _get_route(this.atom_name, route_name);
		const splitted_url = route.url.split('/');
		const params:string[] = [];
		for(const split of splitted_url){
			if(split.includes(':')){
				const splitted_split = split.split(':');
				if(splitted_split.length !== 2){
					throw urn_exc.create(
						`INVALID_ROUTE_URL`,
						`Invalid Route URL format [${route.url}]`
					);
				}
				const param_name = splitted_split[1];
				params.push(param_name);
			}
		}
		switch(params.length){
			case 0:{
				return async () => {
					return await this.raw.get('/');
				};
			}
			case 1:{
				return async (p:string) => {
					const url = route.url.replace(`/:${params[0]}`, p);
					return await this.raw.get(url);
				};
			}
			default:
			case 2:{
				return async (p:string, q:string) => {
					const url = route.url.replace(`/:${params[0]}`, p).replace(`/:${params[1]}`, q);
					return await this.raw.get(url);
				};
			}
		}
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

function _get_route(atom_name:client_types.AtomName, route_name:string)
		:client_types.Book.Definition.Api.Routes.Route{
	return urn_api_client.routes.route_def(atom_name, route_name);
	// if(urn_util.object.has_key(urn_api_client.routes.default_routes, route_name)){
	//   return urn_api_client.routes.default_routes[route_name];
	// }
	// if(urn_util.object.has_key(api_book[atom_name], route_name)){
	//   return true;
	// }
	// throw urn_exc.create_not_found(
	//   `TRXROUTE_UNDEFINED`,
	//   `TRX Route not found for atom [${atom_name}] route [${route_name}].`
	// );
}

export type TRXInstance = InstanceType<typeof TRX>;

export function create(atom_name:client_types.AtomName)
		:TRXInstance{
	urn_log.fn_debug('Create TRX');
	return new TRX(atom_name);
}

