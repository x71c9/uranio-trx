/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */

import {FullConfiguration} from '../types';

import {api_config} from 'uranio-api/conf/defaults';

export const trx_config:FullConfiguration = {
	
	...api_config,
	
	// These are needed because when developing the client
	// ts linter for uranio is pointing on the server
	// so the server conf should have all the client conf as well
	protocol: 'http',
	
	domain: 'localhost',
	
	port: 4444,
	
	client_protocol: 'http',
	
	client_domain: 'localhost',
	
	client_port: 4444,
	
	service_url: 'http://localhost:7777/uranio/api'
	
};
