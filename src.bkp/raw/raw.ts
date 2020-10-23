/**
 * Class for URNTRXRAW
 *
 * Class for masking Axios or the library that makes the actual HTTP calls
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {URNResponse} from '../return/return.t';

import urn_return from '../return/return';

import * as urn_log from '../log/log';

const urn_ret = urn_return(urn_log.response_injector);

import {URNTRXConfig} from '../urn_trx.t';

export class URNTRXRAW {
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get(url:string)
			:Promise<URNResponse.Response<any,any>>{
		try{
			const axios_response = await this._axios_instance.get(url);
			if(axios_response.status != 200){
				return urn_ret.return_error<AxiosResponse>(
					500,
					'URN ERROR [URNTRXRAW]',
					axios_response
				);
			}else{
				if(URNResponse.isResponse(axios_response.data)){
					return axios_response.data;
				}else{
					return urn_ret.return_error<AxiosResponse>(
						500,
						'URN ERROR [URNTRXRAW] -  Response is not a URNResponse',
						axios_response
					);
				}
			}
		}catch(e){
			return urn_ret.return_error(500, 'URN ERROR [URNTRXRAW] - Axios Error', null, e);
		}
	}
	
}

export function create(config: URNTRXConfig)
		:URNTRXRAW{
	const axios_config:AxiosRequestConfig = {
		baseURL: config.base_url
	};
	const axios_instance = axios.create(axios_config);
	return new URNTRXRAW(axios_instance);
}

