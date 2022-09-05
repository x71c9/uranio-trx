/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
/** --uranio-generate-types-start */

import {urn_response} from 'uranio-utils';
import {Api} from '../typ/api_cln';
import {schema} from '../sch/client';
import {Hook} from '../typ/base_cln';
export type Hooks = {
	set_token: (token: string) => void;
	get_token: () => string | undefined;
	_superusers: {
		authenticate(email: string, password: string):Promise<urn_response.General<Api.AuthResponse>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_superuser', 'count', D>,token?:string):Hook.Response<'_superuser', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_superuser', 'find_one', D>,token?:string):Hook.Response<'_superuser', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_superuser', 'find', D>,token?:string):Hook.Response<'_superuser', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_superuser', 'find_id', D>,token?:string):Hook.Response<'_superuser', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_superuser', 'insert'>,parameters?:Hook.Arguments<'_superuser', 'insert', D>,token?:string):Hook.Response<'_superuser', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_superuser', 'update'>,parameters?:Hook.Arguments<'_superuser', 'update', D>,token?:string):Hook.Response<'_superuser', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_superuser', 'delete', D>,token?:string):Hook.Response<'_superuser', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_superuser', 'insert_multiple'>,parameters?:Hook.Arguments<'_superuser', 'insert_multiple', D>,token?:string):Hook.Response<'_superuser', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_superuser', 'update_multiple'>,parameters?:Hook.Arguments<'_superuser', 'update_multiple', D>,token?:string):Hook.Response<'_superuser', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_superuser', 'delete_multiple', D>,token?:string):Hook.Response<'_superuser', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_superuser', 'search_count', D>,token?:string):Hook.Response<'_superuser', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_superuser', 'search', D>,token?:string):Hook.Response<'_superuser', 'search', D>;
	};
	_groups: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_group', 'count', D>,token?:string):Hook.Response<'_group', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_group', 'find_one', D>,token?:string):Hook.Response<'_group', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_group', 'find', D>,token?:string):Hook.Response<'_group', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_group', 'find_id', D>,token?:string):Hook.Response<'_group', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_group', 'insert'>,parameters?:Hook.Arguments<'_group', 'insert', D>,token?:string):Hook.Response<'_group', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_group', 'update'>,parameters?:Hook.Arguments<'_group', 'update', D>,token?:string):Hook.Response<'_group', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_group', 'delete', D>,token?:string):Hook.Response<'_group', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_group', 'insert_multiple'>,parameters?:Hook.Arguments<'_group', 'insert_multiple', D>,token?:string):Hook.Response<'_group', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_group', 'update_multiple'>,parameters?:Hook.Arguments<'_group', 'update_multiple', D>,token?:string):Hook.Response<'_group', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_group', 'delete_multiple', D>,token?:string):Hook.Response<'_group', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_group', 'search_count', D>,token?:string):Hook.Response<'_group', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_group', 'search', D>,token?:string):Hook.Response<'_group', 'search', D>;
	};
	_users: {
		authenticate(email: string, password: string):Promise<urn_response.General<Api.AuthResponse>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_user', 'count', D>,token?:string):Hook.Response<'_user', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_user', 'find_one', D>,token?:string):Hook.Response<'_user', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_user', 'find', D>,token?:string):Hook.Response<'_user', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_user', 'find_id', D>,token?:string):Hook.Response<'_user', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_user', 'insert'>,parameters?:Hook.Arguments<'_user', 'insert', D>,token?:string):Hook.Response<'_user', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_user', 'update'>,parameters?:Hook.Arguments<'_user', 'update', D>,token?:string):Hook.Response<'_user', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_user', 'delete', D>,token?:string):Hook.Response<'_user', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_user', 'insert_multiple'>,parameters?:Hook.Arguments<'_user', 'insert_multiple', D>,token?:string):Hook.Response<'_user', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_user', 'update_multiple'>,parameters?:Hook.Arguments<'_user', 'update_multiple', D>,token?:string):Hook.Response<'_user', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_user', 'delete_multiple', D>,token?:string):Hook.Response<'_user', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_user', 'search_count', D>,token?:string):Hook.Response<'_user', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_user', 'search', D>,token?:string):Hook.Response<'_user', 'search', D>;
	};
	_media: {
		upload(file: Buffer | ArrayBuffer | Blob, token?: string):Promise<urn_response.General<schema.Atom<'_media'>>>;
		presigned(filename: string, size?: number, type?: string, token?: string): Promise<urn_response.General<string>>;
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_media', 'count', D>,token?:string):Hook.Response<'_media', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_media', 'find_one', D>,token?:string):Hook.Response<'_media', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_media', 'find', D>,token?:string):Hook.Response<'_media', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_media', 'find_id', D>,token?:string):Hook.Response<'_media', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_media', 'insert'>,parameters?:Hook.Arguments<'_media', 'insert', D>,token?:string):Hook.Response<'_media', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_media', 'update'>,parameters?:Hook.Arguments<'_media', 'update', D>,token?:string):Hook.Response<'_media', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_media', 'delete', D>,token?:string):Hook.Response<'_media', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_media', 'insert_multiple'>,parameters?:Hook.Arguments<'_media', 'insert_multiple', D>,token?:string):Hook.Response<'_media', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_media', 'update_multiple'>,parameters?:Hook.Arguments<'_media', 'update_multiple', D>,token?:string):Hook.Response<'_media', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_media', 'delete_multiple', D>,token?:string):Hook.Response<'_media', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_media', 'search_count', D>,token?:string):Hook.Response<'_media', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_media', 'search', D>,token?:string):Hook.Response<'_media', 'search', D>;
	};
	_errors: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_error', 'count', D>,token?:string):Hook.Response<'_error', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_error', 'find_one', D>,token?:string):Hook.Response<'_error', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_error', 'find', D>,token?:string):Hook.Response<'_error', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_error', 'find_id', D>,token?:string):Hook.Response<'_error', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_error', 'insert'>,parameters?:Hook.Arguments<'_error', 'insert', D>,token?:string):Hook.Response<'_error', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_error', 'update'>,parameters?:Hook.Arguments<'_error', 'update', D>,token?:string):Hook.Response<'_error', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_error', 'delete', D>,token?:string):Hook.Response<'_error', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_error', 'insert_multiple'>,parameters?:Hook.Arguments<'_error', 'insert_multiple', D>,token?:string):Hook.Response<'_error', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_error', 'update_multiple'>,parameters?:Hook.Arguments<'_error', 'update_multiple', D>,token?:string):Hook.Response<'_error', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_error', 'delete_multiple', D>,token?:string):Hook.Response<'_error', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_error', 'search_count', D>,token?:string):Hook.Response<'_error', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_error', 'search', D>,token?:string):Hook.Response<'_error', 'search', D>;
	};
	_requests: {
		count<D extends schema.Depth>(parameters?:Hook.Arguments<'_request', 'count', D>,token?:string):Hook.Response<'_request', 'count', D>;
		find_one<D extends schema.Depth>(parameters?:Hook.Arguments<'_request', 'find_one', D>,token?:string):Hook.Response<'_request', 'find_one', D>;
		find<D extends schema.Depth>(parameters?:Hook.Arguments<'_request', 'find', D>,token?:string):Hook.Response<'_request', 'find', D>;
		find_id<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_request', 'find_id', D>,token?:string):Hook.Response<'_request', 'find_id', D>;
		insert<D extends schema.Depth>(body:Hook.Body<'_request', 'insert'>,parameters?:Hook.Arguments<'_request', 'insert', D>,token?:string):Hook.Response<'_request', 'insert', D>;
		update<D extends schema.Depth>(id:string,body:Hook.Body<'_request', 'update'>,parameters?:Hook.Arguments<'_request', 'update', D>,token?:string):Hook.Response<'_request', 'update', D>;
		delete<D extends schema.Depth>(id:string,parameters?:Hook.Arguments<'_request', 'delete', D>,token?:string):Hook.Response<'_request', 'delete', D>;
		insert_multiple<D extends schema.Depth>(body:Hook.Body<'_request', 'insert_multiple'>,parameters?:Hook.Arguments<'_request', 'insert_multiple', D>,token?:string):Hook.Response<'_request', 'insert_multiple', D>;
		update_multiple<D extends schema.Depth>(ids:string,body:Hook.Body<'_request', 'update_multiple'>,parameters?:Hook.Arguments<'_request', 'update_multiple', D>,token?:string):Hook.Response<'_request', 'update_multiple', D>;
		delete_multiple<D extends schema.Depth>(ids:string,parameters?:Hook.Arguments<'_request', 'delete_multiple', D>,token?:string):Hook.Response<'_request', 'delete_multiple', D>;
		search_count<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_request', 'search_count', D>,token?:string):Hook.Response<'_request', 'search_count', D>;
		search<D extends schema.Depth>(q:string,parameters?:Hook.Arguments<'_request', 'search', D>,token?:string):Hook.Response<'_request', 'search', D>;
	};
};
/** --uranio-generate-types-end */
