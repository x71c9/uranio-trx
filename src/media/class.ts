/**
 * Module for Media
 *
 * @packageDocumentation
 */

import {urn_log, urn_response} from 'urn-lib';

import {schema} from '../sch/client';

import * as client_types from '../client/types';

import {Base} from '../base/client';

type PresignedQuery = {
	filename: string
	size?: number
	type?: string
}

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class MediaBase extends Base<'media'>{
	
	constructor(public token?:string){
		super('media', token);
	}
	
	public async upload<D extends schema.Depth>(
		file:Buffer | ArrayBuffer | Blob,
		token?:string
	):Promise<urn_response.General<schema.Molecule<'media',D>>>{
		const headers = {} as client_types.Hook.Headers;
		if(typeof this.token === 'string'){
			headers['urn-auth-token'] = this.token;
		}
		if(typeof token === 'string'){
			headers['urn-auth-token'] = token;
		}
		const url = `/media/upload`;
		return await this.raw.post<any, D>(url, file, undefined, headers);
	}
	
	public async presigned(
		filename: string,
		size?: number,
		type?: string,
		token?:string
	):Promise<urn_response.General<string>>{
		const headers = {} as client_types.Hook.Headers;
		if(typeof this.token === 'string'){
			headers['urn-auth-token'] = this.token;
		}
		if(typeof token === 'string'){
			headers['urn-auth-token'] = token;
		}
		const query:PresignedQuery = {
			filename: filename,
		};
		if(typeof size === 'number'){
			query.size = size;
		}
		if(typeof type === 'string' && type !== ''){
			query.type = type;
		}
		const url = `/media/presigned`;
		return await this.raw.get<any,0>(url, query as any, headers);
	}
}

export type MediaBaseInstance = InstanceType<typeof MediaBase>;

export function create(token?:string)
		:MediaBase{
	urn_log.fn_debug(`Create MediaBase`);
	return new MediaBase(token);
}

