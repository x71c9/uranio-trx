/**
 * TRX client_types module
 *
 * @packageDocumentation
 */
import * as client_types from '../client/types';
import { schema } from '../sch/client';
export declare namespace Hook {
    type Arguments<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = {
        params?: Params<A, R>;
        query?: Query<A, R, D>;
        body?: Body<A, R>;
    };
    type Headers = {
        [k: string]: string;
    };
    type Params<A extends schema.AtomName, R extends schema.RouteName<A>> = client_types.Api.Request.Params<A, R>;
    type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = client_types.Api.Request.Query<A, R, D>;
    type Body<A extends schema.AtomName, R extends schema.RouteName<A>> = R extends 'insert' ? schema.AtomShape<A> : R extends 'update' ? schema.AtomShape<A> : R extends 'insert_multiple' ? schema.AtomShape<A>[] : R extends 'update_multiple' ? schema.AtomShape<A> : any;
    type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = schema.Response<A, R, D>;
}
