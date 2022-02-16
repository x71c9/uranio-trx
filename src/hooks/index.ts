/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
// export * from './hooks';

import {urn_response} from 'urn-lib';

import * as types from '../cln/types';

import {schema} from '../sch/index';

import {create as auth_create} from '../auth/index';

import {create as base_create} from '../base/index';

import {create as media_create} from '../media/index';

let hook_token:string|undefined;

export const hooks = {
	set_token: (token:string):void => {
		hook_token = token;
	},
	get_token: ():string|undefined => {
		return hook_token;
	},
	superusers: {
		upload: async<D extends schema.Depth>(
			file: Buffer | ArrayBuffer | Blob,
			token?: string
		): Promise<urn_response.General<schema.Atom<'media'>>> => {
			let current_token: string | undefined;
			if (typeof hook_token === "string" && hook_token !== "") {
				current_token = hook_token;
			}
			if (typeof token === "string" && token !== "") {
				current_token = token;
			}
			return await media_create(current_token).upload<D>(file, current_token);
		},
		presigned: async(
			filename: string,
			size?: number,
			type?: string,
			token?: string
		): Promise<urn_response.General<string>> => {
			let current_token: string | undefined;
			if (typeof hook_token === "string" && hook_token !== "") {
				current_token = hook_token;
			}
			if (typeof token === "string" && token !== "") {
				current_token = token;
			}
			return await media_create(current_token).presigned(filename, size, type, current_token);
		},
		authenticate: async (
			email: string,
			password: string
		): Promise<urn_response.General<types.Api.AuthResponse>> => {
			return await auth_create('superuser').authenticate(email, password);
		},
		count: async <D extends schema.Depth>(
			options?:types.Hook.Arguments<'superuser', 'count', D>,
			token?:string
		):Promise<types.Hook.Response<'superuser', 'count', D>>  => {
			const args:types.Hook.Arguments<'superuser', 'count', D> = {
				...options
			};
			let current_token:string|undefined;
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base_create('superuser',current_token).hook<'count',D>('count')(args);
		},
		find: async <D extends schema.Depth>(
			options?:types.Hook.Arguments<'superuser', 'find', D>,
			token?:string
		):Promise<types.Hook.Response<'superuser', 'find', D>>  => {
			const args:types.Hook.Arguments<'superuser', 'find', D> = {
				...options
			};
			let current_token:string|undefined;
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base_create('superuser',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			options?:types.Hook.Arguments<'superuser', 'find_id', D>,
			token?:string
		):Promise<types.Hook.Response<'superuser', 'find_id', D>>  => {
			const args:types.Hook.Arguments<'superuser', 'find_id', D> = {
				params: {
					id: id,
				},
				...options
			};
			let current_token:string|undefined;
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base_create('superuser',current_token).hook<'find_id',D>('find_id')(args);
		},
	}
};
