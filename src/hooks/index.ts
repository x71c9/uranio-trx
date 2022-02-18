/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
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
