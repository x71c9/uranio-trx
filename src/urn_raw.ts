/*
 * Class for URNTRXRAW
 *
 * Class for masking Axios or the library that makes the actual HTTP calls
 *
 * @packageDocumentation
 */

import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {URNTRXConfig} from './interfaces/config';

export interface URNTRXRAWInstance extends AxiosInstance{}

export interface URNTRXRAWFactory {
	create(config: URNTRXConfig):URNTRXRAWInstance;
}

const urn_trx_raw:URNTRXRAWFactory = {
	
	create(config: URNTRXConfig)
			:URNTRXRAWInstance{
		
		const axios_config:AxiosRequestConfig = {
			baseURL: config.base_url
		};
		
		return axios.create(axios_config);
	}
	
};

export default urn_trx_raw;
