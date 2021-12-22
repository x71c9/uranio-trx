/**
 * Type module for raw
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

export type RawName = 'axios'; // japi, fetch

import * as client_types from '../cln/types';

export interface RAW<A extends client_types.AtomName> {
	
	get<R extends client_types.RouteName<A>, D extends client_types.Depth>(
		url:string,
		query?:client_types.Hook.Query<A,R,D>,
		headers?:client_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
	post<R extends client_types.RouteName<A>, D extends client_types.Depth>(
		url:string,
		body:any,
		query?:client_types.Hook.Query<A,R,D>,
		headers?:client_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
	delete<R extends client_types.RouteName<A>, D extends client_types.Depth>(
		url:string,
		query?:client_types.Hook.Query<A,R,D>,
		headers?:client_types.Hook.Headers
	):Promise<urn_response.General<any,any>>
	
}

