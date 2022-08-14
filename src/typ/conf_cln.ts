/**
 * Client Conf type module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import {RawName} from '../typ/raw_cln';

type RequiredClientConfigParams = {
}

type OptionalClientConfigParam = {
	fetch: RawName
	service_url: string
	dev_service_url: string
	// service_domain: string
	// dev_service_domain: string
	// service_protocol: string
	// dev_service_protocol: string
	// service_port: number
	// dev_service_port: number
	// fetch_url: string
	// dev_fetch_url: string
}

export type ClientConfiguration =
	api_client.types.ClientConfiguration &
	RequiredClientConfigParams &
	Partial<OptionalClientConfigParam>;
