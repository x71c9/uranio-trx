/**
 * Register module for URANIO TRX
 *
 * @packageDocumentation
 */

import * as register from '../reg/server';

import {atom_book} from '../atoms';

import {schema} from '../sch/server';

import * as types from '../client/types';

for(const [atom_name, atom_def] of Object.entries(atom_book)){
	register.atom(atom_def as types.Book.Definition, atom_name as schema.AtomName);
}
