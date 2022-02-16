/**
 * Re-export API types module
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
import { schema } from '../sch/index';
export declare namespace Api {
    type AuthResponse = api.types.Api.AuthResponse;
    type Request<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Api.Request<A, R, D>;
    namespace Request {
        type File = api.types.Api.Request.File;
        type Paths = api.types.Api.Request.Paths;
        type Headers = api.types.Api.Request.Headers;
        type Params<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.Api.Request.Params<A, R>;
        type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Api.Request.Query<A, R, D>;
        type Body<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.Api.Request.Body<A, R>;
    }
}
export declare type RouteParam<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.RouteParam<A, R>;
