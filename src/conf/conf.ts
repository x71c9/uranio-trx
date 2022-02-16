/**
 * Conf module
 *
 * @packageDocumentation
 */

import {urn_util, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init('CONF_TRX_MODULE', `TRX configuration module`);

import urn_api from 'uranio-api';

import {trx_config} from './defaults';

import * as types from '../types';

let _is_trx_initialized = false;

export function get<k extends keyof Required<types.Configuration>>(param_name:k)
		:typeof trx_config[k]{
	_check_if_uranio_was_initialized();
	_check_if_param_exists(param_name);
	return trx_config[param_name];
}

export function is_initialized():boolean{
	return urn_api.conf.is_initialized() && _is_trx_initialized;
}

export function set_initialize(is_initialized:boolean):void{
	_is_trx_initialized = is_initialized;
}

export function set_from_env(repo_config:Required<types.Configuration>)
		:void{
	return urn_api.conf.set_from_env(repo_config);
}

export function set(repo_config:Required<types.Configuration>, config:types.Configuration)
		:void{
	return urn_api.conf.set(repo_config, config);
}

function _check_if_param_exists(param_name:string){
	return urn_util.object.has_key(trx_config, param_name);
}

function _check_if_uranio_was_initialized(){
	if(is_initialized() === false){
		throw urn_exc.create_not_initialized(
			`NOT_INITIALIZED`,
			`Uranio was not initialized. Please run \`uranio.init()\` in your main file.`
		);
	}
}
