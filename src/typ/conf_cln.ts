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
	service_domain: string
	dev_service_domain: string
	// service_url: string
	// dev_service_url: string
	// service_domain: string
	// dev_service_domain: string
	service_protocol: string
	dev_service_protocol: string
	service_port: number
	dev_service_port: number
	// fetch_url: string
	// dev_fetch_url: string
	prefix_api: string
	dev_prefix_api: string
	ssl_secure: boolean
	dev_ssl_secure: boolean
}

export type ClientConfiguration =
	api_client.types.ClientConfiguration &
	RequiredClientConfigParams &
	Partial<OptionalClientConfigParam>;
