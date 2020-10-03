/**
 * Class for URNTRXRAW
 *
 * Class for masking Axios or the library that makes the actual HTTP calls
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {URNTRXConfig} from './types/config';

import {URNResponse} from './return/response';
import urn_return from './return/return';
import urn_log from './log/log';
const urn_console = urn_log();
const urn_ret = urn_return(urn_console);

// export interface URNTRXRAWInstance extends AxiosInstance{}

// export interface URNTRXRAWFactory {
	
//   create(config: URNTRXConfig):URNTRXRAW;
	
// }

export class URNTRXRAW {
	
	constructor(private _axios_instance:AxiosInstance){}
	
	public async get(url:string)
			:Promise<URNResponse.Response<any,any>>{
		try{
			const axios_response = await this._axios_instance.get(url);
			if(axios_response.status != 200){
				return urn_ret.return_error<AxiosResponse>(500, 'URN ERROR [URNTRXRAW]', axios_response);
			}else{
				return urn_ret.return_success<AxiosResponse>(`.get[${url}]`, axios_response.data);
			}
		}catch(e){
			return urn_ret.return_error(500, 'URN ERROR [URNTRXRAW] - Axios Error', null, e);
		}
	}
	
}

const urn_trx_raw = {
	
	create(config: URNTRXConfig)
			:URNTRXRAW{
		
		const axios_config:AxiosRequestConfig = {
			baseURL: config.base_url
		};
		const axios_instance = axios.create(axios_config);
		return new URNTRXRAW(axios_instance);
		
	}
	
};

export default urn_trx_raw;
