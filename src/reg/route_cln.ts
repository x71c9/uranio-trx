/**
 * Register module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import * as types from '../client/types';

import {schema} from '../sch/client';

export function route<A extends schema.AtomName, R extends schema.RouteName<A>>(
	route: types.Book.Definition.Dock.Routes.Route,
	atom_name?: A,
	route_name?: R
):string{
	return api_client.register.route(route, atom_name, route_name);
}
