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

export function atom(
	atom_definition: types.Book.Definition,
	atom_name?: string
):string{
	const final_atom_name = api.register.atom(atom_definition, atom_name);
	return final_atom_name;
}
