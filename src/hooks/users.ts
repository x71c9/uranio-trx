/**
 *
 * Module for Hook Users
 *
 * @packageDocumentation
 */

import {RawInstance} from '../raw';

import {Hook} from './hook';

import urn_mdls from 'urn-mdls';

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
	return new URNHookUsers(raw_instance);
}
