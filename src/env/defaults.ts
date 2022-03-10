/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */

import {Environment} from '../server/types';

import api from 'uranio-api';

export const trx_env:Required<Environment> = {
	
	...api.env.get_all(),
	
};
