/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */

import {Configuration} from '../srv/types';

import api from 'uranio-api';

export const trx_config:Required<Configuration> = {
	
	...api.conf.get_all(),
	
	fetch: 'axios',
	
	// service_domain: '0.0.0.0',
	
	// dev_service_domain: '0.0.0.0',
	
	// service_url: 'http://0.0.0.0:7777/uranio/api',
	
	// dev_service_url: 'http://0.0.0.0:7777/uranio/api',
	
	// service_protocol: 'http',
	
	// dev_service_protocol: 'http',
	
	// service_port: '7777',
	
	// dev_service_port: '7777'
	
	// fetch_url: 'http://localhost:7777/uranio/api',
	
	// dev_fetch_url: 'http://localhost:7777/uranio/api',
	
	ssl_secure: true,
	
	dev_ssl_secure: false,
	
	service_proxy: '',
	
	dev_service_proxy: ''
	
};
