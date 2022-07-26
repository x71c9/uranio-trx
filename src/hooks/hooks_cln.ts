/**
 * Auto generate hooks file
 *
 * @packageDocumentation
 */

import {urn_response} from 'urn-lib';

import {schema} from '../sch/client';
import * as types from '../client/types';
import * as auth from '../auth/client';
import * as base from '../base/client';
import * as media from '../media/client';
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

