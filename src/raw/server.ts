/**
 * Raw server module
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {urn_util, urn_log, urn_return, urn_response} from 'urn-lib';

const urn_ret = urn_return.create();

import * as types from '../server/types';

import {schema} from '../sch/server';

import {RAW} from '../typ/raw';

import * as conf from '../conf/server';

const axios_config = {
	// headers: {'user-agent': 'Uranio TRX 0.0.1'}
	withCredentials: true
} as AxiosRequestConfig;

const axios_config_auth = {
	// headers: {'user-agent': 'Uranio TRX 0.0.1'}
	// withCredentials: true
} as AxiosRequestConfig;

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class AxiosRaw<A extends schema.AtomName> implements RAW<A>{
	
	private axios_config: AxiosRequestConfig;
	
	constructor(private _axios_instance:AxiosInstance, private is_auth=false){
		this.axios_config = (this.is_auth) ? axios_config_auth : axios_config;
	}
	
	public async get<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string, query?:types.Hook.Query<A,R,D>, headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>{
		if(headers){
			axios_config.headers = headers;
		}
		return await _handle_axios_call(async () => {
			return await this._axios_instance.get(_url_with_query(url, query), this.axios_config);
		});
	}
	
	public async post<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string, body:any, query?:types.Hook.Query<A,R,D>, headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>{
		if(headers){
			axios_config.headers = headers;
		}
		return await _handle_axios_call(async () => {
			return await this._axios_instance.post(_url_with_query(url, query), body, this.axios_config);
		});
	}
	
	public async delete<R extends schema.RouteName<A>, D extends schema.Depth>(
		url:string, query?:types.Hook.Query<A,R,D>, headers?:types.Hook.Headers
	):types.Hook.Response<A,R,D>{
		if(headers){
			axios_config.headers = headers;
		}
		return await _handle_axios_call(async () => {
			return await this._axios_instance.delete(_url_with_query(url, query), this.axios_config);
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

function _url_with_query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth>(
	url:string,
	query?:types.Hook.Query<A,R,D>
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
	}catch(e){
		const ex = e as any;
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
export function create(is_auth=false)
		:AxiosRawInstance{
	
	urn_log.trace('Create URNTRXRaw');
	
	const fetch_url = conf.get(`fetch_url`);
	
	const axios_config:AxiosRequestConfig = {
		baseURL: fetch_url
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
	return new AxiosRaw(axios_instance, is_auth);
}

