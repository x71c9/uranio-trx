/**
 * Conf type module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import {RawName} from '../raw/types';

type RequiredConfigParams = {
}

type OptionalConfigParam = {
	fetch: RawName,
	// These are needed because when developing the client
	// ts linter for uranio is pointing on the server
	// so the server conf must have all the client conf as well
	protocol: string
	domain: string,
	port: number,
	client_protocol: string,
	client_domain: string,
	client_port: number
	service_url: string
}

export type Configuration =
	api.types.Configuration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;
