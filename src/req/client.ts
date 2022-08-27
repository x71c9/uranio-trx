/**
 * Required module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import {required_atoms} from './atoms';

import * as types from '../srv/types';

export function get():types.Book{
	return {
		...api_client.required.get(),
		...required_atoms
	};
}
