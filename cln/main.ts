/**
 * Main module for client
 *
 * @packageDocumentation
 */

import core from 'uranio-core/client';

import api from 'uranio-api/client';

import * as base from '../base/';

import * as hooks from '../hooks/';

import * as book from '../book/client';

import * as conf from '../conf/client';

import * as types from './types';

/*
 * First level methods.
 * If other methods are added, urn-cli must be updated.
 * Go to urn-cli/src/cmd/transpose.ts and
 * add the new method names.
 */
export * from '../init/client';

export {
	core,
	api,
	base,
	hooks,
	book,
	conf,
	types
};
