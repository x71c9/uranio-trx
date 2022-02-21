/**
 * Main module for server
 *
 * @packageDocumentation
 */

import core from 'uranio-core';

import api from 'uranio-api';

// export * from '../api/index';

import * as base from '../base/index';

import * as auth from '../auth/index';

import * as media from '../media/index';

import * as book from '../book/index';

import * as conf from '../conf/index';

import * as util from '../util/index';

import * as log from '../log/index';

import * as types from './types';

import {schema} from '../sch/index';

import {hooks} from '../hooks/index';

export * from '../init/index';

export * from '../reg/index';

export {
	core,
	api,
	base,
	auth,
	media,
	book,
	conf,
	util,
	log,
	types,
	schema,
	hooks,
};
