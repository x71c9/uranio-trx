/**
 * Module for Base
 *
 * @packageDocumentation
 */
import * as types from '../server/types';
import { schema } from '../sch/server';
export declare class Base<A extends schema.AtomName> {
    atom_name: A;
    token?: string | undefined;
    protected raw: types.RAW<A>;
    constructor(atom_name: A, token?: string | undefined);
    hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name: R): (args: types.Hook.Arguments<A, R, D>) => types.Hook.Response<A, R, D>;
}
