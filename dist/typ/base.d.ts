/**
 * TRX types module
 *
 * @packageDocumentation
 */
import * as types from '../srv/types';
import { schema } from '../sch/server';
export declare namespace Hook {
    type Arguments<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = {
        params?: Params<A, R>;
        query?: Query<A, R, D>;
        body?: Body<A, R>;
    };
    type Headers = {
        [k: string]: string;
    };
    type Params<A extends schema.AtomName, R extends schema.RouteName<A>> = types.Api.Request.Params<A, R>;
    type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = types.Api.Request.Query<A, R, D>;
    type Body<A extends schema.AtomName, R extends schema.RouteName<A>> = R extends 'insert' ? schema.AtomShape<A> : R extends 'update' ? schema.AtomShape<A> : R extends 'insert_multiple' ? schema.AtomShape<A>[] : R extends 'update_multiple' ? schema.AtomShape<A> : any;
    type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = Promise<schema.ApiResponse<A, R, D>>;
}
