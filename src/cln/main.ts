/**
 * Main module for client
 *
 * @packageDocumentation
 */

import core from 'uranio-core/client';

import api from 'uranio-api/client';

// export * from '../api/client';

import * as base from '../base/index';

import * as auth from '../auth/index';

import * as media from '../media/index';

import * as book from '../book/client';

import * as conf from '../conf/client';

import * as log from '../log/client';

import * as types from './types';

import {schema} from '../sch/index';

import {hooks} from '../hooks/index';

export * from '../init/client';

export * from '../reg/client';

export {
	core,
	api,
	base,
	auth,
	media,
	book,
	conf,
	log,
	types,
	schema,
	hooks,
};
