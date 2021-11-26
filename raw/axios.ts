/**
 * Module for AxiosRaw
 *
 * @packageDocumentation
 */

// import querystring from 'querystring';

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {urn_util, urn_log, urn_return, urn_response} from 'urn-lib';

const urn_ret = urn_return.create();

import {trx_client_config} from '../cln/defaults';

import * as client_types from '../cln/types';

import {RAW} from './types';

const axios_config = {
	// headers: {'user-agent': 'Uranio TRX 0.0.1'}
};

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class AxiosRaw<A extends client_types.AtomName> implements RAW<A>{
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get<R extends client_types.RouteName<A>>(url:string, query?:client_types.Hook.Query<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.get(_url_with_query(url, query), axios_config);
		});
	}
	
	public async post<R extends client_types.RouteName<A>>(url:string, body:any, query?:client_types.Hook.Query<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.post(_url_with_query(url, query), body, axios_config);
		});
	}
	
	public async delete<R extends client_types.RouteName<A>>(url:string, query?:client_types.Hook.Query<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.delete(_url_with_query(url, query), axios_config);
		});
	}
	
}

// function _serialize(obj:any, prefix=''):string{
//   const str = [];
//   for (const p in obj) {
//     if (urn_util.object.has_key(obj, p)) {
//       const k = prefix ?
//         prefix + "[" + p + "]" :
//         p;
//       const v = obj[p];
//       str.push((v !== null && typeof v === "object") ?
//         _serialize(v, k) :
//         encodeURIComponent(k) + "=" + encodeURIComponent(v));
//     }
//   }
//   return str.join("&");
// }

function _url_with_query<A extends client_types.AtomName, R extends client_types.RouteName<A>>(
	url:string,
	query?:client_types.Hook.Query<A,R>
):string{
	let full_url = url;
	if(query){
		const query_string = urn_util.object.serialize(query);
		full_url += `?${query_string}`;
	}
	return full_url;
}

type ExPayload = {
	path?: string,
	request?: any,
	response?: any
}

async function _handle_axios_call(handler:() => Promise<AxiosResponse>)
		:Promise<urn_response.General<any,any>>{
	try{
		const axios_response = await handler();
		switch(axios_response.status){
			case 200:{
				return axios_response.data;
				// return urn_ret.return_success(
				//   axios_response.data.message,
				//   axios_response.data
				// );
			}
			default:{
				return urn_ret.return_error(
					axios_response.status,
					axios_response.data.message,
					axios_response.data.err_code,
					axios_response.data.err_msg
				);
			}
		}
	}catch(ex){
		if(!ex.response) {
			return urn_ret.return_error(
				400,
				'Unable to make request.',
				'UNABLE_TO_MAKE_REQUEST',
				ex.message,
				undefined,
				ex
			);
		}else if(typeof ex.response?.data === 'string'){
			let payload:ExPayload = {};
			if(ex.response?.request?.path){
				payload = {
					path: ex.response.request.path
				};
			}else if(ex.response?.request){
				payload = {
					request: ex.response.request
				};
			}else if(ex.response){
				payload = {
					response: ex.response
				};
			}
			return urn_ret.return_error(
				ex.response.status,
				ex.response.statusText,
				'RAW_ERROR',
				'Cannot make request.',
				payload,
				ex
			);
		}else{
			return urn_ret.return_error(
				ex.response.data.status,
				ex.response.data.message,
				ex.response.data.err_code,
				ex.response.data.err_msg,
				ex.response.data.payload,
				ex
			);
		}
	}
}

/*
 * Export only the type of the class URNTRXRaw
 */
export type AxiosRawInstance = InstanceType<typeof AxiosRaw>;

/**
 * A function the will create an AxiosRawInstance.
 */
export function create(config?: client_types.ClientConfiguration)
		:AxiosRawInstance{
	
	urn_log.fn_debug('Create URNTRXRaw');
	
	const base_url = config?.base_url || trx_client_config.base_url;
	
	const axios_config:AxiosRequestConfig = {
		baseURL: base_url
	};
	const axios_instance = axios.create(axios_config);
	// axios_instance.interceptors.request.use(request => {
	//   console.log('Starting Request', JSON.stringify(request, null, 2));
	//   return request;
	// });
	// axios_instance.interceptors.response.use(response => {
	//   console.log('Response:', JSON.stringify(response, null, 2));
	//   return response;
	// });
	return new AxiosRaw(axios_instance);
}

