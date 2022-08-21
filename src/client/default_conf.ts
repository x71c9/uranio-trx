/**
 * Module for default client configuration object
 *
 * @packageDocumentation
 */

// import {urn_log} from 'urn-lib';

import api_client from 'uranio-api/client';

import {ClientConfiguration} from './types';

/**
 * IMPORTANT: if new variable are added here they must be added on
 * uranio-trx/conf/client.ts
 *
 * Unfortunately the browser doesn't allow to dynamically access process.env
 * variable, like process.env[var_name] where `var_name` is a variable.
 */
export const trx_client_config:Required<ClientConfiguration> = {
	
	...api_client.conf.get_all(),
	
	fetch: 'axios',
	
	service_domain: '0.0.0.0',
	
	dev_service_domain: '0.0.0.0',
	
	service_protocol: 'http',
	
	dev_service_protocol: 'http',
	
	service_port: 7777,
	
	dev_service_port: 7777,
	
	prefix_api: '/uranio/api',
	
	dev_prefix_api: '/uranio/api',
	
	// service_url: 'http://0.0.0.0:7777/uranio/api',
	
	// dev_service_url: 'http://0.0.0.0:7777/uranio/api',
	
	// fetch_url: 'http://localhost:7777/uranio/api',
	
	// dev_fetch_url: 'http://localhost:7777/uranio/api'
	
	ssl_secure: true,
	
	dev_ssl_secure: false,
	
	api_proxy: '',
	
	dev_api_proxy: ''
};
