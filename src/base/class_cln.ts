/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_util, urn_log, urn_exception} from 'uranio-utils';

const urn_exc = urn_exception.init(`BASE`, `Base module`);

import api_client from 'uranio-api/client';

import * as book from '../book/client';

import * as client_types from '../cln/types';

import * as conf from '../conf/client';

import {schema} from '../sch/client';

import {create as create_raw} from '../raw/client';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
export class Base<A extends schema.AtomName> {
	
	public raw:client_types.RAW<A>;
	
	constructor(public atom_name:A, public token?:string){
		this.raw = create_raw() as client_types.RAW<A>;
	}
	
	public hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name:R)
			:(args:client_types.Hook.Arguments<A,R,D>) => client_types.Hook.Response<A,R,D>{
		_check_atom_name(this.atom_name);
		const route = book.get_route_definition(this.atom_name, route_name as schema.RouteName<A>);
		const splitted_url = route.url.split('/');
		const param_names:string[] = [];
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
				param_names.push(param_name);
			}
		}
		return async (args:client_types.Hook.Arguments<A,R,D>, token?:string):client_types.Hook.Response<A,R,D> => {
			const dock_def = book.get_dock_definition(this.atom_name);
			const atom_api_url = dock_def.url || `/${book.get_plural(this.atom_name)}`;
			const atom_def = book.get_definition(this.atom_name);
			const connection_url = (atom_def.connection && atom_def.connection === 'log') ? conf.get('prefix_log') : '';
			let url = `${connection_url}${atom_api_url}${route.url}`;
			// let arg_params:{[k:string]: string | string[]} = {};
			let arg_params:client_types.Hook.Params<A,R> = {} as client_types.Hook.Params<A,R>;
			if(urn_util.object.has_key(args, 'params')){
				arg_params = args['params'] as client_types.Hook.Params<A,R>;
			}
			// for(const [param_name, param_value] of Object.entries(arg_params)){
			for(const param_name of param_names){
				const param_value = arg_params[param_name as keyof client_types.Hook.Params<A,R>];
				if(typeof param_value === 'string'){
					url = url.replace(`:${param_name}`, param_value);
				}else if(Array.isArray(param_value) && (param_value as Array<string>).length > 0 && typeof param_value[0] === 'string'){
					url = url.replace(`:${param_name}`, (param_value as Array<string>).join(','));
				}
			}
			const headers = {} as client_types.Hook.Headers;
			if(typeof this.token === 'string'){
				headers['urn-auth-token'] = this.token;
			}
			if(typeof token === 'string'){
				headers['urn-auth-token'] = token;
			}
			switch(route.method){
				case api_client.types.RouteMethod.GET:{
					return await this.raw.get(url, args.query, headers);
				}
				case api_client.types.RouteMethod.POST:{
					return await this.raw.post(url, args.body, args.query, headers);
				}
				case api_client.types.RouteMethod.DELETE:{
					return await this.raw.delete(url, args.query, headers);
				}
			}
		};
	}
	
}

function _check_atom_name(atom_name:schema.AtomName)
		:true{
	if(book.validate_name(atom_name)){
		return true;
	}
	throw urn_exc.create_not_found(
		`BASEATOM_UNDEFINED`,
		`Base Atom not found for atom \`${atom_name}\`.`
	);
}
