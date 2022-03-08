/**
 * Module for Base
 *
 * @packageDocumentation
 */
import * as client_types from '../client/types';
import { schema } from '../sch/client';
export declare class Base<A extends schema.AtomName> {
    atom_name: A;
    token?: string | undefined;
    private prefix_log?;
    protected raw: client_types.RAW<A>;
    constructor(atom_name: A, token?: string | undefined, prefix_log?: string | undefined);
    hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name: R): (args: client_types.Hook.Arguments<A, R, D>) => client_types.Hook.Response<A, R, D>;
}
