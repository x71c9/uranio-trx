/**
 * Module for Base
 *
 * @packageDocumentation
 */

// import {urn_util, urn_log, urn_exception} from 'urn-lib';
import {urn_log} from 'urn-lib';

// const urn_exc = urn_exception.init(`BASE`, `Base module`);

// import api from 'uranio-api';

// import * as book from '../book/server';

import * as types from '../srv/types';

// import * as conf from '../conf/server';

import {schema} from '../sch/server';

// import {create as create_raw} from '../raw/server';

import {Base as ClientBase} from './class_cln';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
export class Base<A extends schema.AtomName> {
	
	public base:ClientBase<A>;
	
	constructor(public atom_name:A, public token?:string){
		this.base = new ClientBase(atom_name, token);
	}
	
	public hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name:R)
			:(args:types.Hook.Arguments<A,R,D>) => types.Hook.Response<A,R,D>{
		return this.base.hook(route_name) as (args:types.Hook.Arguments<A,R,D>) => types.Hook.Response<A,R,D>;
	}
	
}
