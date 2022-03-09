/**
 * Module for Base
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import {schema} from '../sch/client';

import {Base} from './class_cln';

import * as conf from '../conf/client';

export type BaseInstance = InstanceType<typeof Base>;

export function create<A extends schema.AtomName>(atom_name:A, token?:string)
		:Base<A>{
	urn_log.fn_debug(`Create Base [${atom_name}]`);
	return new Base(atom_name, token, conf.get(`prefix_log`));
}

