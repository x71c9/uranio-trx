/**
 * TRX Env module
 *
 * @packageDocumentation
 */

import {urn_context} from 'urn-lib';

import api_client from 'uranio-api/client';

import {trx_client_env} from '../client/default_env';

import {ClientEnvironment} from '../typ/env_cln';

const urn_ctx = urn_context.create<Required<ClientEnvironment>>(
	trx_client_env,
	is_production(),
	'TRX:ENV:CLIENT'
);

export function is_production():boolean{
	return api_client.env.is_production();
}

export function get<k extends keyof ClientEnvironment>(
	param_name:k
):Required<ClientEnvironment>[k]{
	return urn_ctx.get(param_name);
}

export function get_all():Required<ClientEnvironment>{
	return urn_ctx.get_all();
}

export function set(env:Partial<ClientEnvironment>):void{
	urn_ctx.set(env);
}

export function set_client_env():ClientEnvironment{
	
	// Cannot set env as normal because on the browser it is not possible to
	// iterate on the object process.env. Also it is not possible to dynamically
	// assign values to process.env keys. Instead the only way to get value from
	// process.env in the browser is to manually type the key in string like
	// process.env['URN_LOG_LEVEL']
	//
	// Check core/env/client.ts for reference on how to implement this method.
	// urn_ctx.set_env();
	
	const api_env = api_client.env.set_client_env();
	set(api_env);
	
	return api_env;
	
}
