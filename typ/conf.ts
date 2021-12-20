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
}

export type Configuration =
	ApiConfiguration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;

export type FullConfiguration =
	ApiFullConfiguration &
	RequiredConfigParams &
	OptionalConfigParam;

