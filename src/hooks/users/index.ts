/**
 *
 * Module for Hook Users
 *
 * @packageDocumentation
 */

import {Raw} from '../../raw';

import {Hook} from '../hook';

import {URNUser} from 'urn-models';

class URNHookUsers extends Hook<URNUser> {
	
	constructor(_raw_instance:Raw){
		
		super(_raw_instance);
		
	}
	
	public set_path(){
		return this._path = '/users';
	}
	
}


/*
 * Export only type of class URNHookUser
 */
export type HookUsers = InstanceType<typeof URNHookUsers>;


export function create(raw_instance:Raw)
		:HookUsers{
	return new URNHookUsers(raw_instance);
}
