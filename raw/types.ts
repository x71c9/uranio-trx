/**
 * Type module for raw
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

export type RawName = 'axios'; // japi, fetch

export type QueryObject = {
	[k:string]: string
}

export interface RAW {
	
	get(url:string, query?:QueryObject):Promise<urn_response.General<any,any>>
	
	post(url:string, body:any, query?:QueryObject):Promise<urn_response.General<any,any>>
	
	delete(url:string, query?:QueryObject):Promise<urn_response.General<any,any>>
	
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
