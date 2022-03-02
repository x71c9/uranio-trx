/**
 * Type module for raw
 *
 * @packageDocumentation
 */

// import {urn_response} from 'urn-lib';

export type RawName = 'axios'; // japi, fetch

import * as cln_types from '../client/types';

import {schema} from '../sch/client';

export interface RAW<A extends schema.AtomName> {
	
	get<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):cln_types.Hook.Response<A,R,D>
	
	post<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		body:any,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):cln_types.Hook.Response<A,R,D>
	
	delete<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):cln_types.Hook.Response<A,R,D>
	
}

