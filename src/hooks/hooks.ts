/**
 * Auto generate hooks file
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

import {schema} from '../sch/server';
import * as types from '../server/types';
import * as auth from '../auth/server';
import * as base from '../base/server';
import * as media from '../media/server';
import {Hooks} from './types';

let hook_token:string|undefined;

export const hooks:Hooks = {
	set_token: (token:string):void => {
		hook_token = token;
	},
	get_token: ():string|undefined => {
		return hook_token;
	},
};

