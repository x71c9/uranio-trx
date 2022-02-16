/**
 * Main module for client
 *
 * @packageDocumentation
 */
import api from 'uranio-api/client';
import * as base from '../base/index';
import * as auth from '../auth/index';
import * as media from '../media/index';
import * as book from '../book/client';
import * as conf from '../conf/client';
import * as types from './types';
export * from '../init/client';
export { api, base, auth, media, book, conf, types };
