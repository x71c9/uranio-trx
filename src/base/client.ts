/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_log} from 'uranio-utils';

import {schema} from '../sch/client';

import {Base} from './class_cln';

export type BaseInstance = InstanceType<typeof Base>;

export function create<A extends schema.AtomName>(atom_name:A, token?:string)
		:Base<A>{
	urn_log.trace(`Create Base [${atom_name}]`);
	return new Base(atom_name, token);
}

