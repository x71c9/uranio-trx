/**
 * Client Env type module
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

type RequiredClientEnvParams = {
}

type OptionalClientEnvParam = {
}

export type ClientEnvironment =
	api_client.types.ClientEnvironment &
	RequiredClientEnvParams &
	Partial<OptionalClientEnvParam>;
