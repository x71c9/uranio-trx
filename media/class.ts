/**
 * Module for Media
 *
 * @packageDocumentation
 */

import {urn_log, urn_response} from 'urn-lib';

// import {urn_util, urn_log, urn_exception} from 'urn-lib';

// const urn_exc = urn_exception.init(`TRX_MEDIA`, `TRX Media module.`);

import urn_api_client from 'uranio-api/client';

// import * as book from '../book/client';

import * as client_types from '../cln/types';

// import {create as create_raw} from '../raw/';

import {Base} from '../base/';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class MediaBase extends Base<'media'>{
	
	constructor(public token?:string){
		super('media', token);
	}
	
	public async upload<D extends urn_api_client.types.Depth>(
		file:Buffer | ArrayBuffer | Blob,
		token?:string
	):Promise<urn_response.General<urn_api_client.types.Molecule<'media',D>>>{
		const headers = {} as client_types.Hook.Headers;
		if(typeof this.token === 'string'){
			headers['x-auth-token'] = this.token;
		}
		if(typeof token === 'string'){
			headers['x-auth-token'] = token;
		}
		const url = `/media/upload`;
		return await this.raw.post<any, D>(url, file, undefined, headers);
	}
	
}

export type MediaBaseInstance = InstanceType<typeof MediaBase>;

export function create(token?:string)
		:MediaBase{
	urn_log.fn_debug(`Create MediaBase`);
	return new MediaBase(token);
}

