/**
 * Re-export API types module
 *
 * @packageDocumentation
 */

export {
	Api,
	RouteParam,
	PropertyType,
	SecurityType,
	PermissionType,
	AuthAction,
	Passport,
} from 'uranio-api/types';

// import api from 'uranio-api';

// import {schema} from '../sch/index';

// export namespace Api {
	
//   export type AuthResponse = api.types.Api.AuthResponse;
	
//   export type Request<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =
//     api.types.Api.Request<A,R,D>
	
//   export namespace Request {
		
//     export type File = api.types.Api.Request.File;
		
//     export type Paths = api.types.Api.Request.Paths;
		
//     export type Headers = api.types.Api.Request.Headers;
		
//     export type Params<A extends schema.AtomName, R extends schema.RouteName<A>> =
//       api.types.Api.Request.Params<A,R>
		
//     export type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =
//       api.types.Api.Request.Query<A,R,D>
		
//     export type Body<A extends schema.AtomName, R extends schema.RouteName<A>> =
//       api.types.Api.Request.Body<A,R>
		
//   }
// }

// export type RouteParam<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   api.types.RouteParam<A,R>;
