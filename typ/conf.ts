/**
 * Conf type module
 *
 * @packageDocumentation
 */

import {FullConfiguration as ApiFullConfiguration} from 'uranio-api/types';

import {CallerName} from '../trx/';

type RequiredConfigParams = {
	caller: CallerName
	base_url: string
}

type OptionalConfigParam = {
}

export type Configuration =
	ApiFullConfiguration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;

export type FullConfiguration =
	ApiFullConfiguration &
	RequiredConfigParams &
	OptionalConfigParam;

