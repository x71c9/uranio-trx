/**
 * TRX types module
 *
 * @packageDocumentation
 */

import * as client_types from '../cln/types';

import uranio_api_client from 'uranio-api/client';

import {api_book} from 'uranio-books-client/api';

export type HookArguments<A extends client_types.AtomName, R extends client_types.RouteName<A>> = {
	params?: HookParams<A,R>
	query?: HookQuery<A,R>
	body?: any
}

export type HookParams<A extends client_types.AtomName, R extends client_types.RouteName<A>> = {
	[k in RouteParam<A,R>]: string
}

export type HookQuery<A extends client_types.AtomName, R extends client_types.RouteName<A>> = {
	[k in RouteQuery<A,R>]: any
}

type RouteURL<A extends client_types.AtomName, R extends client_types.RouteName<A>> =
	R extends keyof typeof uranio_api_client.routes.default_routes ?
	typeof uranio_api_client.routes.default_routes[R]['url'] :
	'routes' extends keyof typeof api_book[A]['api'] ?
	R extends keyof typeof api_book[A]['api']['routes'] ?
	'url' extends keyof typeof api_book[A]['api']['routes'][R] ?
	typeof api_book[A]['api']['routes'][R]['url'] :
	'' :
	'' :
	'';

type RouteParam<A extends client_types.AtomName, R extends client_types.RouteName<A>, S extends string> =
	RouteURL<A,R> extends `/:${S}` ? S :
	RouteURL<A,R> extends `/${S}` ? S :
	'';



export const a:RouteParam<'user', 'mycustom'> = '/s';
