/**
 * TRX client_types module
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

import * as client_types from '../cln/types';

import {dock_book} from 'uranio-books/dock';

export namespace Hook {

	export type Arguments<A extends client_types.AtomName, R extends client_types.RouteName<A>, D extends client_types.Depth> = {
		params?: Params<A,R>
		query?: Query<A,R,D>
		body?: any
	}

	export type Params<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
		client_types.Api.Request.Params<A,R>;

	export type Query<A extends client_types.AtomName, R extends client_types.RouteName<A>, D extends client_types.Depth> =
		client_types.Api.Request.Query<A,R,D>;
		
	export type DefaultResponse<A extends client_types.AtomName, R extends client_types.RouteDefaultName, D extends client_types.Depth> =
		R extends 'count' ? urn_response.General<number, any> :
		R extends 'find_id' ? urn_response.General<client_types.Molecule<A,D>, any> :
		R extends 'find' ? urn_response.General<client_types.Molecule<A,D>[], any> :
		R extends 'find_one' ? urn_response.General<client_types.Molecule<A,D>, any> :
		R extends 'insert' ? urn_response.General<client_types.Molecule<A,D>, any> :
		R extends 'update' ? urn_response.General<client_types.Molecule<A,D>,any> :
		R extends 'delete' ? urn_response.General<client_types.Molecule<A,D>,any> :
		never;

	export type CustomResponse<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
		'dock' extends keyof typeof dock_book[A] ?
		'routes' extends keyof typeof dock_book[A]['dock'] ?
		R extends keyof typeof dock_book[A]['dock']['routes'] ?
		'return' extends keyof typeof dock_book[A]['dock']['routes'][R] ?
		typeof dock_book[A]['dock']['routes'][R]['return'] :
		any :
		any :
		any :
		any;

	export type Response<A extends client_types.AtomName, R extends client_types.RouteName<A>, D extends client_types.Depth> =
		R extends client_types.RouteDefaultName ? DefaultResponse<A, R, D> :
		'dock' extends keyof typeof dock_book[A] ?
		'routes' extends keyof typeof dock_book[A]['dock'] ?
		R extends keyof typeof dock_book[A]['dock']['routes'] ? CustomResponse<A, R> :
		never :
		never :
		never;

}

// export type HookParams<A extends client_types.AtomName, R extends client_types.RouteName<A>> = {
//   [k in client_types.RouteParam<A,R>]: string
// }

// export type HookQuery<A extends client_types.AtomName, R extends client_types.RouteName<A>> = {
//   [k in uranio_api_client.client_types.RouteQuery<A,R>]: uranio_api_client.client_types.RouteQueryValue<A,R,k>
// }

// type DefaultRouteURL<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   R extends keyof typeof uranio_api_client.routes.default_routes ?
//   'url' extends keyof typeof uranio_api_client.routes.default_routes[R] ?
//   typeof uranio_api_client.routes.default_routes[R]['url'] :
//   never :
//   never;

// type CustomRouteURL<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   'routes' extends keyof typeof api_book[A]['api'] ?
//   R extends keyof typeof api_book[A]['api']['routes'] ?
//   'url' extends keyof typeof api_book[A]['api']['routes'][R] ?
//   typeof api_book[A]['api']['routes'][R]['url'] :
//   never :
//   never :
//   never;

// type RouteURL<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   DefaultRouteURL<A,R> | CustomRouteURL<A,R>;

// type ExtractParamFrom<URI extends string> =
//   URI extends
//     `/:${infer Param1}/:${infer Param2}/:${infer Param3}/:${infer Param4}` |
//     `/${infer _Prefix}/:${infer Param1}/:${infer Param2}/:${infer Param3}/:${infer Param4}` ?
//     Param1 | Param2 | Param3 | Param4 :
//   URI extends
//     `/:${infer Param1}/:${infer Param2}/:${infer Param3}` |
//     `/${infer _Prefix}/:${infer Param1}/:${infer Param2}/:${infer Param3}` ?
//     Param1 | Param2 | Param3 :
//   URI extends
//     `/:${infer Param1}/:${infer Param2}` |
//     `/${infer _Prefix}/:${infer Param1}/:${infer Param2}` ?
//     Param1 | Param2 :
//   URI extends
//     `/:${infer Param}` |
//     `/${infer _Prefix}/:${infer Param}` ?
//   Param :
//   never;

// export type RouteParam<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   RouteURL<A,R> extends string ?
//   ExtractParamFrom<RouteURL<A,R>> :
//   never;

// // export const a:RouteParam<'user', 'mycustom'> = '/s';

// type ArrayElement<ArrayType extends readonly unknown[]> =
//   ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

// type DefaultRouteQueryArray<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   R extends keyof typeof uranio_api_client.routes.default_routes ?
//   'query' extends keyof typeof uranio_api_client.routes.default_routes[R] ?
//   typeof uranio_api_client.routes.default_routes[R]['query'] :
//   never :
//   never;

// type DefaultRouteQuery<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   DefaultRouteQueryArray<A,R> extends readonly unknown[] ?
//   ArrayElement<DefaultRouteQueryArray<A,R>> :
//   never;

// // export const b:DefaultRouteQuery<'user', 'find'> = 's';

// type CustomRouteQueryArray<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   'routes' extends keyof typeof api_book[A]['api'] ?
//   R extends keyof typeof api_book[A]['api']['routes'] ?
//   'query' extends keyof typeof api_book[A]['api']['routes'][R] ?
//   typeof api_book[A]['api']['routes'][R]['query'] :
//   never :
//   never :
//   never;

// type CustomRouteQuery<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   CustomRouteQueryArray<A,R> extends readonly unknown[] ?
//   ArrayElement<CustomRouteQueryArray<A,R>> :
//   never;

// /**
//  * NOTE:
//  * The extends string check is needed so that when the type is wrong tsc error
//  * will show which string are valid.
//  */
// export type RouteQuery<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
//   DefaultRouteQuery<A,R> | CustomRouteQuery<A,R> extends string ?
//   DefaultRouteQuery<A,R> | CustomRouteQuery<A,R> :
//   never;

// export const c:RouteQuery<'user', 'find'> = 'option';


