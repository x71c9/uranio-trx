/**
 * Main module for server
 *
 * @packageDocumentation
 */

// import core from 'uranio-core';

import api from 'uranio-api';

import * as base from '../base/index';

import * as auth from '../auth/index';

import * as media from '../media/index';

import {hooks} from '../hooks/index';

import * as book from '../book/index';

import * as conf from '../conf/index';

import * as types from './types';

import {schema} from '../sch/index';

import * as util from '../util/index';

/*
 * First level methods.
 * If other methods are added, urn-cli must be updated.
 * Go to urn-cli/src/cmd/transpose.ts and
 * add the new method names.
 */
export * from '../init/index';

export * from '../reg/index';

export {
	api,
	// core,
	base,
	auth,
	media,
	hooks,
	book,
	conf,
	util,
	schema,
	types,
};
