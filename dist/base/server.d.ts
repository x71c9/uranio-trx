/**
 * Module for Base
 *
 * @packageDocumentation
 */
import { schema } from '../sch/server';
import { Base } from './class';
export declare type BaseInstance = InstanceType<typeof Base>;
export declare function create<A extends schema.AtomName>(atom_name: A, token?: string): Base<A>;
