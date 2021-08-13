/**
 * TRX index module
 *
 * @packageDocumentation
 */

import {trx_config} from '../conf/defaults';

import {CallerName, Trx} from './types';

import * as axios from './axios/';

export * from './types';

export function create(caller?:CallerName)
		:Trx{
	const raw = caller || trx_config.caller;
	switch(raw){
		case 'axios':{
			return axios.create();
		}
	}
}
