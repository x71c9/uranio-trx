/**
 * Auto generate hooks file
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

import {schema} from '../sch/server';
import * as types from '../srv/types';
import * as auth from '../auth/server';
import * as base from '../base/server';
import * as media from '../media/server';
import {Hooks} from './types';

let hook_token:string|undefined;

export const hooks:Hooks = {
	set_token: (token:string):void => {
		hook_token = token;
	},
	get_token: ():string|undefined => {
		return hook_token;
	},
	_superusers: {
		authenticate: async (
			email: string,
			password: string
		): Promise<urn_response.General<types.Api.AuthResponse>> => {
			return await auth.create('_superuser').authenticate(email, password);
		},
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_superuser', 'count', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'count', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_superuser', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_superuser', 'find', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'find', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_superuser', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_superuser', 'insert'>,
			parameters?:types.Hook.Arguments<'_superuser', 'insert', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'insert', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_superuser', 'update'>,
			parameters?:types.Hook.Arguments<'_superuser', 'update', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'update', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_superuser', 'delete', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'delete', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_superuser', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_superuser', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_superuser', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_superuser', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_superuser', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_superuser', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_superuser', 'search', D>,
			token?:string
		):types.Hook.Response<'_superuser', 'search', D>  => {
			const args:types.Hook.Arguments<'_superuser', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_superuser',current_token).hook<'search',D>('search')(args);
		},
	},
	_groups: {
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_group', 'count', D>,
			token?:string
		):types.Hook.Response<'_group', 'count', D>  => {
			const args:types.Hook.Arguments<'_group', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_group', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_group', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_group', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_group', 'find', D>,
			token?:string
		):types.Hook.Response<'_group', 'find', D>  => {
			const args:types.Hook.Arguments<'_group', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_group', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_group', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_group', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_group', 'insert'>,
			parameters?:types.Hook.Arguments<'_group', 'insert', D>,
			token?:string
		):types.Hook.Response<'_group', 'insert', D>  => {
			const args:types.Hook.Arguments<'_group', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_group', 'update'>,
			parameters?:types.Hook.Arguments<'_group', 'update', D>,
			token?:string
		):types.Hook.Response<'_group', 'update', D>  => {
			const args:types.Hook.Arguments<'_group', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_group', 'delete', D>,
			token?:string
		):types.Hook.Response<'_group', 'delete', D>  => {
			const args:types.Hook.Arguments<'_group', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_group', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_group', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_group', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_group', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_group', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_group', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_group', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_group', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_group', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_group', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_group', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_group', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_group', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_group', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_group', 'search', D>,
			token?:string
		):types.Hook.Response<'_group', 'search', D>  => {
			const args:types.Hook.Arguments<'_group', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_group',current_token).hook<'search',D>('search')(args);
		},
	},
	_users: {
		authenticate: async (
			email: string,
			password: string
		): Promise<urn_response.General<types.Api.AuthResponse>> => {
			return await auth.create('_user').authenticate(email, password);
		},
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_user', 'count', D>,
			token?:string
		):types.Hook.Response<'_user', 'count', D>  => {
			const args:types.Hook.Arguments<'_user', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_user', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_user', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_user', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_user', 'find', D>,
			token?:string
		):types.Hook.Response<'_user', 'find', D>  => {
			const args:types.Hook.Arguments<'_user', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_user', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_user', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_user', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_user', 'insert'>,
			parameters?:types.Hook.Arguments<'_user', 'insert', D>,
			token?:string
		):types.Hook.Response<'_user', 'insert', D>  => {
			const args:types.Hook.Arguments<'_user', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_user', 'update'>,
			parameters?:types.Hook.Arguments<'_user', 'update', D>,
			token?:string
		):types.Hook.Response<'_user', 'update', D>  => {
			const args:types.Hook.Arguments<'_user', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_user', 'delete', D>,
			token?:string
		):types.Hook.Response<'_user', 'delete', D>  => {
			const args:types.Hook.Arguments<'_user', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_user', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_user', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_user', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_user', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_user', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_user', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_user', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_user', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_user', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_user', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_user', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_user', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_user', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_user', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_user', 'search', D>,
			token?:string
		):types.Hook.Response<'_user', 'search', D>  => {
			const args:types.Hook.Arguments<'_user', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_user',current_token).hook<'search',D>('search')(args);
		},
	},
	_media: {
		upload: async<D extends schema.Depth>(
			file: Buffer | ArrayBuffer | Blob,
			token?: string
		): Promise<urn_response.General<schema.Atom<'_media'>>> => {
			let current_token: string | undefined;
			const hook_token = hooks.get_token();
			if (typeof hook_token === "string" && hook_token !== "") {
				current_token = hook_token;
			}
			if (typeof token === "string" && token !== "") {
				current_token = token;
			}
			return await media.create(current_token).upload<D>(file, current_token);
		},
		presigned: async(
			filename: string,
			size?: number,
			type?: string,
			token?: string
		): Promise<urn_response.General<string>> => {
			let current_token: string | undefined;
			const hook_token = hooks.get_token();
			if (typeof hook_token === "string" && hook_token !== "") {
				current_token = hook_token;
			}
			if (typeof token === "string" && token !== "") {
				current_token = token;
			}
			return await media.create(current_token).presigned(filename, size, type, current_token);
		},
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_media', 'count', D>,
			token?:string
		):types.Hook.Response<'_media', 'count', D>  => {
			const args:types.Hook.Arguments<'_media', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_media', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_media', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_media', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_media', 'find', D>,
			token?:string
		):types.Hook.Response<'_media', 'find', D>  => {
			const args:types.Hook.Arguments<'_media', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_media', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_media', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_media', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_media', 'insert'>,
			parameters?:types.Hook.Arguments<'_media', 'insert', D>,
			token?:string
		):types.Hook.Response<'_media', 'insert', D>  => {
			const args:types.Hook.Arguments<'_media', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_media', 'update'>,
			parameters?:types.Hook.Arguments<'_media', 'update', D>,
			token?:string
		):types.Hook.Response<'_media', 'update', D>  => {
			const args:types.Hook.Arguments<'_media', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_media', 'delete', D>,
			token?:string
		):types.Hook.Response<'_media', 'delete', D>  => {
			const args:types.Hook.Arguments<'_media', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_media', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_media', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_media', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_media', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_media', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_media', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_media', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_media', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_media', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_media', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_media', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_media', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_media', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_media', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_media', 'search', D>,
			token?:string
		):types.Hook.Response<'_media', 'search', D>  => {
			const args:types.Hook.Arguments<'_media', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_media',current_token).hook<'search',D>('search')(args);
		},
	},
	_errors: {
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_error', 'count', D>,
			token?:string
		):types.Hook.Response<'_error', 'count', D>  => {
			const args:types.Hook.Arguments<'_error', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_error', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_error', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_error', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_error', 'find', D>,
			token?:string
		):types.Hook.Response<'_error', 'find', D>  => {
			const args:types.Hook.Arguments<'_error', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_error', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_error', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_error', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_error', 'insert'>,
			parameters?:types.Hook.Arguments<'_error', 'insert', D>,
			token?:string
		):types.Hook.Response<'_error', 'insert', D>  => {
			const args:types.Hook.Arguments<'_error', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_error', 'update'>,
			parameters?:types.Hook.Arguments<'_error', 'update', D>,
			token?:string
		):types.Hook.Response<'_error', 'update', D>  => {
			const args:types.Hook.Arguments<'_error', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_error', 'delete', D>,
			token?:string
		):types.Hook.Response<'_error', 'delete', D>  => {
			const args:types.Hook.Arguments<'_error', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_error', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_error', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_error', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_error', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_error', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_error', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_error', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_error', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_error', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_error', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_error', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_error', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_error', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_error', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_error', 'search', D>,
			token?:string
		):types.Hook.Response<'_error', 'search', D>  => {
			const args:types.Hook.Arguments<'_error', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_error',current_token).hook<'search',D>('search')(args);
		},
	},
	_requests: {
		count: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_request', 'count', D>,
			token?:string
		):types.Hook.Response<'_request', 'count', D>  => {
			const args:types.Hook.Arguments<'_request', 'count', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'count',D>('count')(args);
		},
		find_one: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_request', 'find_one', D>,
			token?:string
		):types.Hook.Response<'_request', 'find_one', D>  => {
			const args:types.Hook.Arguments<'_request', 'find_one', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'find_one',D>('find_one')(args);
		},
		find: async <D extends schema.Depth>(
			parameters?:types.Hook.Arguments<'_request', 'find', D>,
			token?:string
		):types.Hook.Response<'_request', 'find', D>  => {
			const args:types.Hook.Arguments<'_request', 'find', D> = {
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'find',D>('find')(args);
		},
		find_id: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_request', 'find_id', D>,
			token?:string
		):types.Hook.Response<'_request', 'find_id', D>  => {
			const args:types.Hook.Arguments<'_request', 'find_id', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'find_id',D>('find_id')(args);
		},
		insert: async <D extends schema.Depth>(
			body:types.Hook.Body<'_request', 'insert'>,
			parameters?:types.Hook.Arguments<'_request', 'insert', D>,
			token?:string
		):types.Hook.Response<'_request', 'insert', D>  => {
			const args:types.Hook.Arguments<'_request', 'insert', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'insert',D>('insert')(args);
		},
		update: async <D extends schema.Depth>(
			id:string,
			body:types.Hook.Body<'_request', 'update'>,
			parameters?:types.Hook.Arguments<'_request', 'update', D>,
			token?:string
		):types.Hook.Response<'_request', 'update', D>  => {
			const args:types.Hook.Arguments<'_request', 'update', D> = {
				params: {
					id: id,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'update',D>('update')(args);
		},
		delete: async <D extends schema.Depth>(
			id:string,
			parameters?:types.Hook.Arguments<'_request', 'delete', D>,
			token?:string
		):types.Hook.Response<'_request', 'delete', D>  => {
			const args:types.Hook.Arguments<'_request', 'delete', D> = {
				params: {
					id: id,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'delete',D>('delete')(args);
		},
		insert_multiple: async <D extends schema.Depth>(
			body:types.Hook.Body<'_request', 'insert_multiple'>,
			parameters?:types.Hook.Arguments<'_request', 'insert_multiple', D>,
			token?:string
		):types.Hook.Response<'_request', 'insert_multiple', D>  => {
			const args:types.Hook.Arguments<'_request', 'insert_multiple', D> = {
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'insert_multiple',D>('insert_multiple')(args);
		},
		update_multiple: async <D extends schema.Depth>(
			ids:string,
			body:types.Hook.Body<'_request', 'update_multiple'>,
			parameters?:types.Hook.Arguments<'_request', 'update_multiple', D>,
			token?:string
		):types.Hook.Response<'_request', 'update_multiple', D>  => {
			const args:types.Hook.Arguments<'_request', 'update_multiple', D> = {
				params: {
					ids: ids,
				},
				body: body,
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'update_multiple',D>('update_multiple')(args);
		},
		delete_multiple: async <D extends schema.Depth>(
			ids:string,
			parameters?:types.Hook.Arguments<'_request', 'delete_multiple', D>,
			token?:string
		):types.Hook.Response<'_request', 'delete_multiple', D>  => {
			const args:types.Hook.Arguments<'_request', 'delete_multiple', D> = {
				params: {
					ids: ids,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'delete_multiple',D>('delete_multiple')(args);
		},
		search_count: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_request', 'search_count', D>,
			token?:string
		):types.Hook.Response<'_request', 'search_count', D>  => {
			const args:types.Hook.Arguments<'_request', 'search_count', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'search_count',D>('search_count')(args);
		},
		search: async <D extends schema.Depth>(
			q:string,
			parameters?:types.Hook.Arguments<'_request', 'search', D>,
			token?:string
		):types.Hook.Response<'_request', 'search', D>  => {
			const args:types.Hook.Arguments<'_request', 'search', D> = {
				params: {
					q: q,
				},
				...parameters
			};
			let current_token:string|undefined;
			const hook_token = hooks.get_token();
			if(typeof hook_token === 'string' && hook_token !== ''){
				current_token = hook_token;
			}
			if(typeof token === 'string' && token !== ''){
				current_token = token;
			}
			return await base.create('_request',current_token).hook<'search',D>('search')(args);
		},
	},
};

