/**
 * Client Conf type module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import {RawName} from '../typ/raw_cln';

type RequiredClientConfigParams = {
	fetch: RawName
	service_url: string
	dev_service_url: string
}

type OptionalClientConfigParam = {
}

export type ClientConfiguration =
	api_client.types.ClientConfiguration &
	RequiredClientConfigParams &
	Partial<OptionalClientConfigParam>;
