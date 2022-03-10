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
	
	service_url: 'http://localhost:7777/uranio/api',
	
	dev_service_url: 'http://localhost:7777/uranio/api',
	
};
