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
	// This is needed because when developing the client
	// ts linter for uranio is pointing on the server
	// so the server conf should have all the client conf as well
	base_url: string
}

export type Configuration =
	ApiConfiguration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;

export type FullConfiguration =
	ApiFullConfiguration &
	RequiredConfigParams &
	OptionalConfigParam;

