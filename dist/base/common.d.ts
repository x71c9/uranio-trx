/**
 * Module for common methods client/server class
 *
 * @packageDocumentation
 */
import * as client_types from '../client/types';
import { schema } from '../sch/client';
export declare function hook<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth>(route_name: R, atom_name: A, raw: client_types.RAW<A>, parent_token?: string): (args: client_types.Hook.Arguments<A, R, D>) => client_types.Hook.Response<A, R, D>;
