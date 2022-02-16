/**
 * Type module for raw
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

export type RawName = 'axios'; // japi, fetch

import * as cln_types from '../cln/types';

import {schema} from '../sch/index';

export interface RAW<A extends schema.AtomName> {
	
	get<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
	post<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		body:any,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
	delete<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string,
		query?:cln_types.Hook.Query<A,R,D>,
		headers?:cln_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
}

