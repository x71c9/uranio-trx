/**
 * Module for TRXRaw
 *
 * Class for masking Axios or the library that makes the actual HTTP calls
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {urn_response as urn_res, urn_return, urn_log} from 'urn-lib';

import {Config} from './types';

const urn_ret = urn_return.create(urn_log.return_injector);

class URNTRXRaw {
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get(url:string)
			:Promise<urn_res.General<any,any>>{
		try{
			const axios_response = await this._axios_instance.get(url);
			if(axios_response.status != 200){
				return urn_ret.return_error<AxiosResponse>(
					500,
					'URN ERROR [URNTRXRaw]',
					axios_response
				);
			}else{
				if(urn_res.is_response(axios_response.data)){
					return axios_response.data;
				}else{
					return urn_ret.return_error<AxiosResponse>(
						500,
						'URN ERROR [URNTRXRaw] -  Response is not an URANIO General Response',
						axios_response
					);
				}
			}
		}catch(e){
			return urn_ret.return_error(
				500,
				'URN ERROR [URNTRXRaw] - Axios Error',
				null,
				e
			);
		}
	}
	
}

/*
 * Export only the type of the class URNTRXRaw
 */
export type RawInstance = InstanceType<typeof URNTRXRaw>;

/**
 * A function the will create a Raw instance.
 * Its parameters are the same as the constructor of the class.
 */
export default function create_instance(config: Config)
		:RawInstance{
	const axios_config:AxiosRequestConfig = {
		baseURL: config.base_url
	};
	const axios_instance = axios.create(axios_config);
	return new URNTRXRaw(axios_instance);
}

