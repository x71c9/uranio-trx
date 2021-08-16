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

import {HookArguments} from './types';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class TRX<A extends client_types.AtomName> {
	
	private raw:client_types.RAW;
	
	constructor(public atom_name:A){
		this.raw = create_raw();
	}
	
	public hook(route_name:client_types.RouteName<A>)
			:(args:HookArguments) => Promise<urn_response.General<any, any>>{
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
		return async (args:HookArguments) => {
			const url = route.url;
			for(const param of params){
				if(urn_util.object.has_key(args, 'params') && typeof args.params?.[param] === 'string'){
					url.replace(`/:${param}`, args.params[param]);
				}
			}
			switch(route.method){
				case client_types.RouteMethod.GET:{
					return await this.raw.get(url, args.query);
				}
				case client_types.RouteMethod.POST:{
					return await this.raw.post(url, args.body, args.query);
				}
				case client_types.RouteMethod.DELETE:{
					return await this.raw.delete(url, args.query);
				}
			}
		};
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

function _get_route<A extends client_types.AtomName>(
	atom_name:client_types.AtomName,
	route_name:client_types.RouteName<A>
):client_types.Book.Definition.Api.Routes.Route{
	
	return urn_api_client.routes.route_def(atom_name, route_name as any);
	
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

export function create<A extends client_types.AtomName>(atom_name:A)
		:TRX<A>{
	urn_log.fn_debug(`Create TRX [${atom_name}]`);
	return new TRX(atom_name);
}

