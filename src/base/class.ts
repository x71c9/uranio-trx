/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_util, urn_log, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init(`BASE`, `Base module`);

import api from 'uranio-api';

import * as book from '../book/server';

import * as types from '../server/types';

import * as conf from '../conf/server';

import {schema} from '../sch/server';

import {create as create_raw} from '../raw/server';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
export class Base<A extends schema.AtomName> {
	
	protected raw:types.RAW<A>;
	
	constructor(public atom_name:A, public token?:string){
		this.raw = create_raw() as types.RAW<A>;
	}
	
	public hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name:R)
			:(args:types.Hook.Arguments<A,R,D>) => types.Hook.Response<A,R,D>{
		_check_atom_name(this.atom_name);
		const route = book.get_route_definition(this.atom_name, route_name as schema.RouteName<A>);
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
		return async (args:types.Hook.Arguments<A,R,D>, token?:string):types.Hook.Response<A,R,D> => {
			const dock_def = book.get_dock_definition(this.atom_name);
			const atom_api_url = dock_def.url || `/${book.get_plural(this.atom_name)}`;
			const atom_def = book.get_definition(this.atom_name);
			const connection_url = (atom_def.connection && atom_def.connection === 'log') ? conf.get('prefix_log') : '';
			let url = `${connection_url}${atom_api_url}${route.url}`;
			for(const param of params){
				if(
					urn_util.object.has_key(args, 'params') &&
					typeof args.params?.[param as types.RouteParam<A,R>] === 'string'
				){
					url = url.replace(`:${param}`, args.params[param as types.RouteParam<A,R>] as string);
				}
			}
			const headers = {} as types.Hook.Headers;
			if(typeof this.token === 'string'){
				headers['urn-auth-token'] = this.token;
			}
			if(typeof token === 'string'){
				headers['urn-auth-token'] = token;
			}
			switch(route.method){
				case api.types.RouteMethod.GET:{
					return await this.raw.get(url, args.query, headers);
				}
				case api.types.RouteMethod.POST:{
					return await this.raw.post(url, args.body, args.query, headers);
				}
				case api.types.RouteMethod.DELETE:{
					return await this.raw.delete(url, args.query, headers);
				}
				default: {
					return await this.raw.get(url, args.query, headers);
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
