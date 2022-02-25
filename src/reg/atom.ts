/**
 * Register module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

/**
 * See core server register atom
 */
import * as types from '../client/types';

import {schema} from '../sch/server';

export function atom<A extends schema.AtomName>(
	atom_definition:types.Book.Definition,
	atom_name?:A
):string{
	const final_atom_name = api.register.atom(atom_definition, atom_name);
	return final_atom_name;
}
