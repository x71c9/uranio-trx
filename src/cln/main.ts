/**
 * Main module for client
 *
 * @packageDocumentation
 */

// import core from 'uranio-core/client';

import api from 'uranio-api/client';

import * as base from '../base/index';

import * as auth from '../auth/index';

import * as media from '../media/index';

import {hooks} from '../hooks/index';

import * as book from '../book/client';

import * as conf from '../conf/client';

import * as types from './types';

import {schema} from '../sch/index';

/*
 * First level methods.
 * If other methods are added, urn-cli must be updated.
 * Go to urn-cli/src/cmd/transpose.ts and
 * add the new method names.
 */
export * from '../init/client';

export {
	// core,
	api,
	base,
	auth,
	media,
	hooks,
	book,
	conf,
	schema,
	types
};
