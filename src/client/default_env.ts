/**
 * Module for default client configuration object
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import {ClientEnvironment} from './types';

/**
 * IMPORTANT: if new variable are added here they must be added on
 * uranio-trx/env/client.ts
 *
 * Unfortunately the browser doesn't allow to dynamically access process.env
 * variable, like process.env[var_name] where `var_name` is a variable.
 */
export const trx_client_env:Required<ClientEnvironment> = {
	
	...api_client.env.defaults,
	
};
