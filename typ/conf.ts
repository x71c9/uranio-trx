/**
 * Conf type module
 *
 * @packageDocumentation
 */

import {
	Configuration as ApiConfiguration,
	FullConfiguration as ApiFullConfiguration,
} from 'uranio-api/types';

type RequiredConfigParams = {
}

type OptionalConfigParam = {
	// These are needed because when developing the client
	// ts linter for uranio is pointing on the server
	// so the server conf should have all the client conf as well
	protocol: string
	domain: string,
	port: number,
	client_protocol: string,
	client_domain: string,
	client_port: number
}

export type Configuration =
	ApiConfiguration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;

export type FullConfiguration =
	ApiFullConfiguration &
	RequiredConfigParams &
	OptionalConfigParam;

