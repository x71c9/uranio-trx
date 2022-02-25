/**
 * Register module for client
 *
 * @packageDocumentation
 */
import * as types from '../client/types';
import { schema } from '../sch/client';
export declare function atom<A extends schema.AtomName>(atom_definition: types.Book.Definition, atom_name?: A): string;
