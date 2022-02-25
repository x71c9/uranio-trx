/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
/** --uranio-generate-types-start */

import {urn_response} from 'urn-lib';
import {Api} from '../typ/api_cln';
import {schema} from '../sch/client';
import {Hook} from '../base/types';
export declare type Hooks = {
	set_token: (token: string) => void;
	get_token: () => string | undefined;
	superusers: {
		authenticate(email: string, password: string):Promise<urn_response.General<Api.AuthResponse>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'superuser', 'count', D>,token?:string):Promise<Hook.Response<'superuser', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'superuser', 'find_one', D>,token?:string):Promise<Hook.Response<'superuser', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'superuser', 'find', D>,token?:string):Promise<Hook.Response<'superuser', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'superuser', 'find_id', D>,token?:string):Promise<Hook.Response<'superuser', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'superuser', 'insert'>,parameters?:Hook.Arguments<'superuser', 'insert', D>,token?:string):Promise<Hook.Response<'superuser', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'superuser', 'update'>,parameters?:Hook.Arguments<'superuser', 'update', D>,token?:string):Promise<Hook.Response<'superuser', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'superuser', 'delete', D>,token?:string):Promise<Hook.Response<'superuser', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'superuser', 'insert_multiple'>,parameters?:Hook.Arguments<'superuser', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'superuser', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'superuser', 'update_multiple'>,parameters?:Hook.Arguments<'superuser', 'update_multiple', D>,token?:string):Promise<Hook.Response<'superuser', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'superuser', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'superuser', 'delete_multiple', D>>;
	};
	users: {
		authenticate(email: string, password: string):Promise<urn_response.General<Api.AuthResponse>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'user', 'count', D>,token?:string):Promise<Hook.Response<'user', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'user', 'find_one', D>,token?:string):Promise<Hook.Response<'user', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'user', 'find', D>,token?:string):Promise<Hook.Response<'user', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'user', 'find_id', D>,token?:string):Promise<Hook.Response<'user', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'user', 'insert'>,parameters?:Hook.Arguments<'user', 'insert', D>,token?:string):Promise<Hook.Response<'user', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'user', 'update'>,parameters?:Hook.Arguments<'user', 'update', D>,token?:string):Promise<Hook.Response<'user', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'user', 'delete', D>,token?:string):Promise<Hook.Response<'user', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'user', 'insert_multiple'>,parameters?:Hook.Arguments<'user', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'user', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'user', 'update_multiple'>,parameters?:Hook.Arguments<'user', 'update_multiple', D>,token?:string):Promise<Hook.Response<'user', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'user', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'user', 'delete_multiple', D>>;
	};
	groups: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'group', 'count', D>,token?:string):Promise<Hook.Response<'group', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'group', 'find_one', D>,token?:string):Promise<Hook.Response<'group', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'group', 'find', D>,token?:string):Promise<Hook.Response<'group', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'group', 'find_id', D>,token?:string):Promise<Hook.Response<'group', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'group', 'insert'>,parameters?:Hook.Arguments<'group', 'insert', D>,token?:string):Promise<Hook.Response<'group', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'group', 'update'>,parameters?:Hook.Arguments<'group', 'update', D>,token?:string):Promise<Hook.Response<'group', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'group', 'delete', D>,token?:string):Promise<Hook.Response<'group', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'group', 'insert_multiple'>,parameters?:Hook.Arguments<'group', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'group', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'group', 'update_multiple'>,parameters?:Hook.Arguments<'group', 'update_multiple', D>,token?:string):Promise<Hook.Response<'group', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'group', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'group', 'delete_multiple', D>>;
	};
	media: {
		upload(file: Buffer | ArrayBuffer | Blob, token?: string):Promise<urn_response.General<schema.Atom<'media'>>>;
		presigned(filename: string, size?: number, type?: string, token?: string): Promise<urn_response.General<string>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'media', 'count', D>,token?:string):Promise<Hook.Response<'media', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'media', 'find_one', D>,token?:string):Promise<Hook.Response<'media', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'media', 'find', D>,token?:string):Promise<Hook.Response<'media', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'media', 'find_id', D>,token?:string):Promise<Hook.Response<'media', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'media', 'insert'>,parameters?:Hook.Arguments<'media', 'insert', D>,token?:string):Promise<Hook.Response<'media', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'media', 'update'>,parameters?:Hook.Arguments<'media', 'update', D>,token?:string):Promise<Hook.Response<'media', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'media', 'delete', D>,token?:string):Promise<Hook.Response<'media', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'media', 'insert_multiple'>,parameters?:Hook.Arguments<'media', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'media', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'media', 'update_multiple'>,parameters?:Hook.Arguments<'media', 'update_multiple', D>,token?:string):Promise<Hook.Response<'media', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'media', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'media', 'delete_multiple', D>>;
	};
	errors: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'error', 'count', D>,token?:string):Promise<Hook.Response<'error', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'error', 'find_one', D>,token?:string):Promise<Hook.Response<'error', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'error', 'find', D>,token?:string):Promise<Hook.Response<'error', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'error', 'find_id', D>,token?:string):Promise<Hook.Response<'error', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'error', 'insert'>,parameters?:Hook.Arguments<'error', 'insert', D>,token?:string):Promise<Hook.Response<'error', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'error', 'update'>,parameters?:Hook.Arguments<'error', 'update', D>,token?:string):Promise<Hook.Response<'error', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'error', 'delete', D>,token?:string):Promise<Hook.Response<'error', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'error', 'insert_multiple'>,parameters?:Hook.Arguments<'error', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'error', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'error', 'update_multiple'>,parameters?:Hook.Arguments<'error', 'update_multiple', D>,token?:string):Promise<Hook.Response<'error', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'error', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'error', 'delete_multiple', D>>;
	};
	requests: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'request', 'count', D>,token?:string):Promise<Hook.Response<'request', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'request', 'find_one', D>,token?:string):Promise<Hook.Response<'request', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'request', 'find', D>,token?:string):Promise<Hook.Response<'request', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'request', 'find_id', D>,token?:string):Promise<Hook.Response<'request', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'request', 'insert'>,parameters?:Hook.Arguments<'request', 'insert', D>,token?:string):Promise<Hook.Response<'request', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'request', 'update'>,parameters?:Hook.Arguments<'request', 'update', D>,token?:string):Promise<Hook.Response<'request', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'request', 'delete', D>,token?:string):Promise<Hook.Response<'request', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'request', 'insert_multiple'>,parameters?:Hook.Arguments<'request', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'request', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'request', 'update_multiple'>,parameters?:Hook.Arguments<'request', 'update_multiple', D>,token?:string):Promise<Hook.Response<'request', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'request', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'request', 'delete_multiple', D>>;
	};
	settings: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'setting', 'count', D>,token?:string):Promise<Hook.Response<'setting', 'count', D>>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'setting', 'find_one', D>,token?:string):Promise<Hook.Response<'setting', 'find_one', D>>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'setting', 'find', D>,token?:string):Promise<Hook.Response<'setting', 'find', D>>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'setting', 'find_id', D>,token?:string):Promise<Hook.Response<'setting', 'find_id', D>>;
		insert<D extends schema.Depth>(body:Hook.Body<'setting', 'insert'>,parameters?:Hook.Arguments<'setting', 'insert', D>,token?:string):Promise<Hook.Response<'setting', 'insert', D>>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'setting', 'update'>,parameters?:Hook.Arguments<'setting', 'update', D>,token?:string):Promise<Hook.Response<'setting', 'update', D>>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'setting', 'delete', D>,token?:string):Promise<Hook.Response<'setting', 'delete', D>>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'setting', 'insert_multiple'>,parameters?:Hook.Arguments<'setting', 'insert_multiple', D>,token?:string):Promise<Hook.Response<'setting', 'insert_multiple', D>>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'setting', 'update_multiple'>,parameters?:Hook.Arguments<'setting', 'update_multiple', D>,token?:string):Promise<Hook.Response<'setting', 'update_multiple', D>>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'setting', 'delete_multiple', D>,token?:string):Promise<Hook.Response<'setting', 'delete_multiple', D>>;
	};
};
/** --uranio-generate-types-end */
