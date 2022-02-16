/**
 * Main module for server
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
import * as base from '../base/index';
import * as auth from '../auth/index';
import * as media from '../media/index';
import { hooks } from '../hooks/index';
import * as book from '../book/index';
import * as conf from '../conf/index';
import * as types from './types';
import { schema } from '../sch/index';
import * as util from '../util/index';
export * from '../init/index';
export * from '../reg/index';
export { api, base, auth, media, hooks, book, conf, util, schema, types, };
