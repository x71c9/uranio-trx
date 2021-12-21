/**
 * Main module for server
 *
 * @packageDocumentation
 */

import core from 'uranio-core';

import api from 'uranio-api';

import * as base from '../base/';

import * as auth from '../auth/';

import * as hooks from '../hooks/';

import * as book from '../book/';

import * as conf from '../conf/';

import * as types from './types';

/*
 * First level methods.
 * If other methods are added, urn-cli must be updated.
 * Go to urn-cli/src/cmd/transpose.ts and
 * add the new method names.
 */
export * from '../init/';

export {
	api,
	core,
	base,
	auth,
	hooks,
	book,
	conf,
	types,
};
