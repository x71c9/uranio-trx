/**
 * Client Conf type module
 *
 * @packageDocumentation
 */

import {RawName} from '../raw/types';

type RequiredClientConfigParams = {
	fetch: RawName
	protocol: string
	domain: string
	port: number
	service_url: string
}

type OptionalClientConfigParam = {
}

export type ClientConfiguration =
	RequiredClientConfigParams &
	Partial<OptionalClientConfigParam>;

export type FullClientConfiguration =
	RequiredClientConfigParams &
	OptionalClientConfigParam;

