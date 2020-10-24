/**
 *
 * Module for Hook Users
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import urn_mdls from 'urn-mdls';

import {RawInstance} from '../raw';

import {Hook} from './hook';

@urn_log.decorators.debug_constructor
@urn_log.decorators.debug_methods
class URNHookUsers extends Hook<urn_mdls.User> {
	
	constructor(_raw_instance:RawInstance){
		
		super(_raw_instance, '/users');
		
	}
	
}


/*
 * Export only type of class URNHookUser
 */
export type HookUsersInstance = InstanceType<typeof URNHookUsers>;


export function create(raw_instance:RawInstance)
		:HookUsersInstance{
	
	urn_log.fn_debug('create for URNHookUsers');
	
	return new URNHookUsers(raw_instance);
}
