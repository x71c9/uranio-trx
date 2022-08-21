/**
 * Conf type module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import {RawName} from '../typ/raw';

type RequiredConfigParams = {
}

type OptionalConfigParam = {
	fetch: RawName,
	// service_domain: string
	// dev_service_domain: string
	// service_url: string
	// dev_service_url: string
	// service_protocol: string
	// dev_service_protocol: string
	// service_port: number
	// dev_service_port: number
	// fetch_url: string
	// dev_fetch_url: string
	ssl_secure: boolean
	dev_ssl_secure: boolean
	service_proxy: string
	dev_service_proxy: string
}

export type Configuration =
	api.types.Configuration &
	RequiredConfigParams &
	Partial<OptionalConfigParam>;
