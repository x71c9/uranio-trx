/**
 * Module for Base
 *
 * @packageDocumentation
 */
import { schema } from '../sch/client';
import { Base } from './class_cln';
export declare type BaseInstance = InstanceType<typeof Base>;
export declare function create<A extends schema.AtomName>(atom_name: A, token?: string): Base<A>;
