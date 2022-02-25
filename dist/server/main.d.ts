/**
 * Main module for server
 *
 * @packageDocumentation
 */
import core from 'uranio-core';
import api from 'uranio-api';
import * as base from '../base/server';
import * as auth from '../auth/server';
import * as media from '../media/server';
import * as book from '../book/server';
import * as conf from '../conf/server';
import * as util from '../util/server';
import * as log from '../log/server';
import * as register from '../reg/server';
import * as types from './types';
import { schema } from '../sch/server';
import { hooks } from '../hooks/server';
export * from '../init/server';
export { core, api, base, auth, media, book, conf, util, log, types, register, schema, hooks, };
