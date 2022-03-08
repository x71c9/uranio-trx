"use strict";
/**
 * TRX types module
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
// export type HookParams<A extends schema.AtomName, R extends schema.RouteName<A>> = {
//   [k in types.RouteParam<A,R>]: string
// }
// export type HookQuery<A extends schema.AtomName, R extends schema.RouteName<A>> = {
//   [k in uranio_api_client.types.RouteQuery<A,R>]: uranio_api_client.types.RouteQueryValue<A,R,k>
// }
// type DefaultRouteURL<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   R extends keyof typeof uranio_api_client.routes.default_routes ?
//   'url' extends keyof typeof uranio_api_client.routes.default_routes[R] ?
//   typeof uranio_api_client.routes.default_routes[R]['url'] :
//   never :
//   never;
// type CustomRouteURL<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   'routes' extends keyof typeof api_book[A]['api'] ?
//   R extends keyof typeof api_book[A]['api']['routes'] ?
//   'url' extends keyof typeof api_book[A]['api']['routes'][R] ?
//   typeof api_book[A]['api']['routes'][R]['url'] :
//   never :
//   never :
//   never;
// type RouteURL<A extends schema.AtomName, R extends schema.RouteName<A>> =
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
// export type RouteParam<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   RouteURL<A,R> extends string ?
//   ExtractParamFrom<RouteURL<A,R>> :
//   never;
// // export const a:RouteParam<'user', 'mycustom'> = '/s';
// type ArrayElement<ArrayType extends readonly unknown[]> =
//   ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
// type DefaultRouteQueryArray<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   R extends keyof typeof uranio_api_client.routes.default_routes ?
//   'query' extends keyof typeof uranio_api_client.routes.default_routes[R] ?
//   typeof uranio_api_client.routes.default_routes[R]['query'] :
//   never :
//   never;
// type DefaultRouteQuery<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   DefaultRouteQueryArray<A,R> extends readonly unknown[] ?
//   ArrayElement<DefaultRouteQueryArray<A,R>> :
//   never;
// // export const b:DefaultRouteQuery<'user', 'find'> = 's';
// type CustomRouteQueryArray<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   'routes' extends keyof typeof api_book[A]['api'] ?
//   R extends keyof typeof api_book[A]['api']['routes'] ?
//   'query' extends keyof typeof api_book[A]['api']['routes'][R] ?
//   typeof api_book[A]['api']['routes'][R]['query'] :
//   never :
//   never :
//   never;
// type CustomRouteQuery<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   CustomRouteQueryArray<A,R> extends readonly unknown[] ?
//   ArrayElement<CustomRouteQueryArray<A,R>> :
//   never;
// /**
//  * NOTE:
//  * The extends string check is needed so that when the type is wrong tsc error
//  * will show which string are valid.
//  */
// export type RouteQuery<A extends schema.AtomName, R extends schema.RouteName<A>> =
//   DefaultRouteQuery<A,R> | CustomRouteQuery<A,R> extends string ?
//   DefaultRouteQuery<A,R> | CustomRouteQuery<A,R> :
//   never;
// export const c:RouteQuery<'user', 'find'> = 'option';
//# sourceMappingURL=base.js.map