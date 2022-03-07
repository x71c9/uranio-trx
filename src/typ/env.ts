/**
 * Env type module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

type RequiredEnvParams = {
}

type OptionalEnvParam = {
}

export type Environment =
	api.types.Environment &
	RequiredEnvParams &
	Partial<OptionalEnvParam>;
