/**
 * Module for AxiosRaw
 *
 * @packageDocumentation
 */

import querystring from 'querystring';

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {urn_log, urn_return, urn_response} from 'urn-lib';

const urn_ret = urn_return.create();

import {trx_client_config} from '../cln/defaults';

import * as client_types from '../cln/types';

import {RAW} from './types';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class AxiosRaw<A extends client_types.AtomName> implements RAW<A>{
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get<R extends client_types.RouteName<A>>(url:string, query?:client_types.HookQuery<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.get(_url_with_query(url, query));
		});
	}
	
	public async post<R extends client_types.RouteName<A>>(url:string, body:any, query?:client_types.HookQuery<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.post(_url_with_query(url, query), body);
		});
	}
	
	public async delete<R extends client_types.RouteName<A>>(url:string, query?:client_types.HookQuery<A,R>)
			:Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.delete(_url_with_query(url, query));
		});
	}
	
}

function _url_with_query<A extends client_types.AtomName, R extends client_types.RouteName<A>>(
	url:string,
	query?:client_types.HookQuery<A,R>
):string{
	let full_url = url;
	if(query){
		// const query_string = new URLSearchParams(query);
		const query_string = querystring.encode(query);
		full_url += `?${query_string}`;
	}
	return full_url;
}

async function _handle_axios_call(handler:() => Promise<AxiosResponse>)
		:Promise<urn_response.General<any,any>>{
	try{
		const axios_response = await handler();
		switch(axios_response.status){
			case 200:{
				return urn_ret.return_success(
					axios_response.data.message,
					axios_response.data
				);
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
		return urn_ret.return_error(
			500,
			'Cannot make request.',
			'AXIOSRAW_FAILED',
			ex.message,
			null,
			ex
		);
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
	return new AxiosRaw(axios_instance);
}

