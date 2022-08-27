/**
 * Register module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import * as types from '../srv/types';

import {schema} from '../sch/server';

export function route<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth>(
	route: types.Book.Definition.Dock.Routes.Route<A,R,D>,
	atom_name?: A,
	route_name?: R
):string{
	return api.register.route(route, atom_name, route_name);
}
