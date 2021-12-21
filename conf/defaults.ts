/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */

import {FullConfiguration} from '../types';

import {api_config} from 'uranio-api/conf/defaults';

export const trx_config:FullConfiguration = {
	
	...api_config,
	
	// This is needed because when developing the client
	// ts linter for uranio is pointing on the server
	// so the server conf should have all the client conf as well
	base_url: ''
	
};
