/**
 * Axios class module
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {urn_log, urn_return, urn_response} from 'urn-lib';

const urn_ret = urn_return.create();

import {trx_config} from '../../conf/defaults';

import * as api_types from '../../api/cln/types';

import {Configuration} from '../../types';

import {Trx} from '../types';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class AxiosTrx implements Trx {
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get(url:string):Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.get(url);
		});
	}
	
	public async post(url:string, body:any):Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.post(url, body);
		});
	}
	
	public async delete(url:string):Promise<urn_response.General<any,any>>{
		return await _handle_axios_call(async () => {
			return await this._axios_instance.delete(url);
		});
	}
	
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
			ex.message
		);
	}
}

export type AxiosRawInstance = InstanceType<typeof AxiosTrx>;

export function create(atom_name:api_types.AtomName)
		:AxiosTrx{
	urn_log.fn_debug(`Create AxiosTrx`);
	const axios_config:AxiosRequestConfig = {
		baseURL: trx_config.base_url
	};
	const axios_instance = axios.create(axios_config);
	return new AxiosTrx(axios_instance);
}

