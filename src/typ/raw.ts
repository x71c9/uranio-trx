/**
 * Type module for raw
 *
 * @packageDocumentation
 */

// import {urn_response} from 'urn-lib';

// export type RawName = 'axios'; // japi, fetch

import {RawName} from './raw_cln';

export {RawName};

import * as types from '../server/types';

import {schema} from '../sch/server';

export interface RAW<A extends schema.AtomName> {
	
	get<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:types.Hook.Query<A,R,D>,
		headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>
	
	post<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		body:any,
		query?:types.Hook.Query<A,R,D>,
		headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>
	
	delete<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:types.Hook.Query<A,R,D>,
		headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>
	
}

