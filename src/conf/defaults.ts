/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */

import {Configuration} from '../server/types';

import api from 'uranio-api';

export const trx_config:Required<Configuration> = {
	
	...api.conf.get_all(),
	
	fetch: 'axios',
	
	service_url: 'http://0.0.0.0:7777/uranio/api',
	
	dev_service_url: 'http://0.0.0.0:7777/uranio/api',
	
	// service_domain: 'localhost',
	
	// dev_service_domain: 'localhost'
	
	// service_protocol: 'http',
	
	// dev_service_protocol: 'http',
	
	// service_port: '7777',
	
	// dev_service_port: '7777'
	
	// fetch_url: 'http://localhost:7777/uranio/api',
	
	// dev_fetch_url: 'http://localhost:7777/uranio/api',
	
};
