/**
 * Required module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import {required_atoms} from './atoms';

import * as types from '../client/types';

export function get():types.Book{
	return {
		...api.required.get(),
		...required_atoms
	};
}
