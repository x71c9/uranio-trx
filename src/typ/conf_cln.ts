/**
 * Client Conf type module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import {urn_log} from 'urn-lib';

import {RawName} from '../raw/types';

type RequiredClientConfigParams = {
	fetch: RawName
	protocol: string
	domain: string
	port: number
	service_url: string
}

type OptionalClientConfigParam = {
	log_level: urn_log.LogLevel
}

export type ClientConfiguration =
	api_client.types.ClientConfiguration &
	RequiredClientConfigParams &
	Partial<OptionalClientConfigParam>;
