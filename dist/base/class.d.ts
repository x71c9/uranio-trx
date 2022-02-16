/**
 * Module for Base
 *
 * @packageDocumentation
 */
import * as client_types from '../cln/types';
import { schema } from '../sch/index';
import { Hook } from './types';
export declare class Base<A extends schema.AtomName> {
    atom_name: A;
    token?: string | undefined;
    protected raw: client_types.RAW<A>;
    constructor(atom_name: A, token?: string | undefined);
    hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name: R): (args: Hook.Arguments<A, R, D>) => Promise<client_types.Hook.Response<A, R, D>>;
}
export declare type BaseInstance = InstanceType<typeof Base>;
export declare function create<A extends schema.AtomName>(atom_name: A, token?: string): Base<A>;
