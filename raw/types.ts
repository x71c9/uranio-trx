/**
 * Type module for raw
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

export type RawName = 'axios'; // japi, fetch

import * as client_types from '../cln/types';

// export type QueryObject = {
//   [k:string]: string
// }

export interface RAW<A extends client_types.AtomName> {
	
	get<R extends client_types.RouteName<A>>(url:string, query?:client_types.HookQuery<A,R>)
		:Promise<urn_response.General<any,any>>
	
	post<R extends client_types.RouteName<A>>(url:string, body:any, query?:client_types.HookQuery<A,R>)
		:Promise<urn_response.General<any,any>>
	
	delete<R extends client_types.RouteName<A>>(url:string, query?:client_types.HookQuery<A,R>)
		:Promise<urn_response.General<any,any>>
	
}

/**
 *
 * Interface for config object
 *
 */
// export interface Config {
	
//   /*
//    * The base URL for URANIO core API
//    */
//   base_url:string
	
// }
