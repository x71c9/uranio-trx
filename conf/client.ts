/**
 * Conf module
 *
 * @packageDocumentation
 */

import {urn_util, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init('CONF_TRX_CLIENT_MODULE', `TRX client configuration module`);

import {trx_client_config} from '../cln/defaults';

import * as types from '../cln/types';

import {RawName} from '../raw/types';

let _is_client_trx_initialized = false;

export function get<k extends keyof types.FullClientConfiguration>(param_name:k)
		:typeof trx_client_config[k]{
	_check_if_uranio_was_initialized();
	_check_if_param_exists(param_name);
	return trx_client_config[param_name];
}

export function is_initialized():boolean{
	return _is_client_trx_initialized;
}

export function set_initialize(is_initialized:boolean):void{
	_is_client_trx_initialized = is_initialized;
}

export function set_from_env(repo_config:types.FullClientConfiguration):void{
	const config = _get_env_vars(repo_config);
	set(repo_config, config);
}

export function set(repo_config:types.FullClientConfiguration, config:types.ClientConfiguration)
		:void{
	_validate_config_types(repo_config, config);
	Object.assign(repo_config, config);
}

function _check_if_param_exists(param_name:string){
	return urn_util.object.has_key(trx_client_config, param_name);
}

function _check_if_uranio_was_initialized(){
	if(is_initialized() === false){
		throw urn_exc.create_not_initialized(
			`NOT_INITIALIZED`,
			`Uranio was not initialized. Please run \`uranio.init()\` in your main file.`
		);
	}
}

function _validate_config_types(
	repo_config:types.FullClientConfiguration,
	config:types.ClientConfiguration
){
	for(const [config_key, config_value] of Object.entries(config)){
		const key = config_key as keyof typeof repo_config;
		if(typeof config_value !== typeof repo_config[key]){
			throw urn_exc.create_not_initialized(
				`INVALID_CLIENT_CONFIG_VALUE`,
				`Invalid client config value for \`${config_key}\`. \`${config_key}\` value ` +
				` must be of type \`${typeof repo_config[key]}\`,` +
				`\`${typeof config_value}\` given.`
			);
		}
	}
}

function _get_env_vars(repo_config:types.ClientConfiguration):types.ClientConfiguration{
	if(typeof process.env.URN_CLIENT_FETCH === 'string' && process.env.URN_CLIENT_FETCH !== ''){
		repo_config.fetch = process.env.URN_CLIENT_FETCH as RawName;
	}
	if(typeof process.env.URN_CLIENT_PROTOCOL === 'string' && process.env.URN_CLIENT_PROTOCOL !== ''){
		repo_config.protocol = process.env.URN_CLIENT_PROTOCOL;
	}
	if(typeof process.env.URN_CLIENT_DOMAIN === 'string' && process.env.URN_CLIENT_DOMAIN !== ''){
		repo_config.domain = process.env.URN_CLIENT_DOMAIN;
	}
	if(typeof process.env.URN_CLIENT_PORT === 'number' || typeof process.env.URN_CLIENT_PORT === 'string' && process.env.URN_CLIENT_PORT !== ''){
		repo_config.port = Number(process.env.URN_CLIENT_PORT);
	}
	if(typeof process.env.URN_CLIENT_SERVICE_URL === 'string' && process.env.URN_CLIENT_SERVICE_URL !== ''){
		repo_config.service_url = process.env.URN_CLIENT_SERVICE_URL;
	}
	return repo_config;
}

// function _get_env_vars(repo_config:types.ClientConfiguration):types.ClientConfiguration{
//   const config:types.ClientConfiguration = {} as types.ClientConfiguration;
//   for(const [conf_key, conf_value] of Object.entries(repo_config)){
//     const env_var_name = `URN_CLIENT_${conf_key.toUpperCase()}`;
//     switch(typeof conf_value){
//       case 'number':{
//         if(
//           typeof process.env[env_var_name] === 'number'
//           || typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] = Number(process.env[env_var_name]);
//         }
//         break;
//       }
//       case 'boolean':{
//         if(
//           typeof process.env[env_var_name] === 'boolean'
//           || typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] =
//             (process.env[env_var_name] === 'true') || (process.env[env_var_name] as any === true);
//         }
//         break;
//       }
//       case 'string':{
//         console.log('typeof', typeof process.env[env_var_name]);
//         console.log('value', process.env[env_var_name]);
//         if(
//           typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] = process.env[env_var_name];
//         }
//         break;
//       }
//     }
//   }
//   return config;
// }
