/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
// export * from './hooks';

// import {urn_response} from 'urn-lib';

// import * as types from '../cln/types';

// import {schema} from '../sch/index';

// import {create as auth_create} from '../auth/index';

// import {create as base_create} from '../base/index';

// import {create as media_create} from '../media/index';

import {Hooks} from './types';

let hook_token:string|undefined;

export const hooks:Hooks = {
	set_token: (token:string):void => {
		hook_token = token;
	},
	get_token: ():string|undefined => {
		return hook_token;
	}
};
