/**
 * Register module for client
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import * as types from '../cln/types';

import {schema} from '../sch/index';

export function register<A extends schema.AtomName>(
	atom_definition:types.Book.Definition,
	atom_name?:A
):string{
	const final_atom_name = api_client.register(atom_definition, atom_name);
	return final_atom_name;
}

