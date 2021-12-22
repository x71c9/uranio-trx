/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_util, urn_log, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init(`Base`, `Base module.`);

import urn_api_client from 'uranio-api/client';

import * as book from '../book/client';

import * as client_types from '../cln/types';

import {create as create_raw} from '../raw/';

import {Hook} from './types';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class Base<A extends client_types.AtomName> {
	
	private raw:client_types.RAW<A>;
	
	constructor(public atom_name:A, public token?:string){
		this.raw = create_raw();
	}
	
	public hook<R extends client_types.RouteName<A>, D extends client_types.Depth = 0>(route_name:R)
			:(args:Hook.Arguments<A,R,D>) => Promise<client_types.Hook.Response<A,R,D>>{
		_check_atom_name(this.atom_name);
		const route = _get_route(this.atom_name, route_name as client_types.RouteName<A>);
		const splitted_url = route.url.split('/');
		const params:string[] = [];
		for(const split of splitted_url){
			if(split.includes(':')){
				const splitted_split = split.split(':');
				if(splitted_split.length !== 2){
					throw urn_exc.create(
						`INVALID_ROUTE_URL`,
						`Invalid Route URL format \`${route.url}\``
					);
				}
				const param_name = splitted_split[1];
				params.push(param_name);
			}
		}
		return async (args:Hook.Arguments<A,R,D>, token?:string) => {
			const dock_def = book.dock.get_definition(this.atom_name);
			const atom_api_url = dock_def.url || `/${this.atom_name}s`;
			const atom_def = book.atom.get_definition(this.atom_name);
			const connection_url = (atom_def.connection && atom_def.connection === 'log') ? `/logs` : '';
			let url = `${connection_url}${atom_api_url}${route.url}`;
			for(const param of params){
				if(
					urn_util.object.has_key(args, 'params') &&
					typeof args.params?.[param as client_types.RouteParam<A,R>] === 'string'
				){
					url = url.replace(`:${param}`, args.params[param as client_types.RouteParam<A,R>] as string);
				}
			}
			const headers = {} as client_types.Hook.Headers;
			if(typeof this.token === 'string'){
				headers['x-auth-token'] = this.token;
			}
			if(typeof token === 'string'){
				headers['x-auth-token'] = token;
			}
			switch(route.method){
				case client_types.RouteMethod.GET:{
					return await this.raw.get(url, args.query, headers) as client_types.Hook.Response<A, R, D>;
				}
				case client_types.RouteMethod.POST:{
					return await this.raw.post(url, args.body, args.query, headers) as client_types.Hook.Response<A, R, D>;
				}
				case client_types.RouteMethod.DELETE:{
					return await this.raw.delete(url, args.query, headers) as client_types.Hook.Response<A, R, D>;
				}
			}
		};
	}
	
}

function _check_atom_name(atom_name:client_types.AtomName)
		:true{
	if(book.atom.validate_name(atom_name)){
		return true;
	}
	throw urn_exc.create_not_found(
		`BASEATOM_UNDEFINED`,
		`Base Atom not found for atom \`${atom_name}\`.`
	);
}

function _get_route<A extends client_types.AtomName>(
	atom_name:client_types.AtomName,
	route_name:client_types.RouteName<A>
):client_types.Book.Definition.Dock.Routes.Route{
	
	return urn_api_client.routes.route_def(atom_name, route_name as any);
	
	// if(urn_util.object.has_key(urn_api_client.routes.default_routes, route_name)){
	//   return urn_api_client.routes.default_routes[route_name];
	// }
	// if(urn_util.object.has_key(dock_book[atom_name], route_name)){
	//   return true;
	// }
	// throw urn_exc.create_not_found(
	//   `BASEROUTE_UNDEFINED`,
	//   `BASE Route not found for atom \`${atom_name}\` route \`${route_name}\`.`
	// );
}

export type BaseInstance = InstanceType<typeof Base>;

export function create<A extends client_types.AtomName>(atom_name:A, token?:string)
		:Base<A>{
	urn_log.fn_debug(`Create Base [${atom_name}]`);
	return new Base(atom_name, token);
}

