/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {schema} from '../sch/server';

import {Base} from './class';

export type BaseInstance = InstanceType<typeof Base>;

export function create<A extends schema.AtomName>(atom_name:A, token?:string)
		:Base<A>{
	urn_log.trace(`Create Base [${atom_name}]`);
	return new Base(atom_name, token);
}

