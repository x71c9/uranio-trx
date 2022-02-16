/**
 * Register module for URANIO Api
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import {atom_book} from './atoms';

for(const [atom_name, atom_def] of Object.entries(atom_book)){
	api.register(atom_def as any, atom_name);
}
