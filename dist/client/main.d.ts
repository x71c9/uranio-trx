/**
 * Main module for client
 *
 * @packageDocumentation
 */
import core from 'uranio-core/client';
import api from 'uranio-api/client';
import * as base from '../base/client';
import * as auth from '../auth/client';
import * as media from '../media/client';
import * as book from '../book/client';
import * as conf from '../conf/client';
import * as log from '../log/client';
import * as register from '../reg/client';
import * as required from '../req/client';
import * as types from './types';
import { schema } from '../sch/client';
import { hooks } from '../hooks/client';
export * from '../init/client';
export { core, api, base, auth, media, book, conf, log, types, register, required, schema, hooks, };
