/**
 * Module for TRX
 *
 * Main class that contains all the Hooks
 *
 * @packageDocumentation
 */

import * as urn_raw from '../raw/';

import * as urn_hooks from '../hooks';

export interface TRXConfig extends urn_raw.Config {}

class URNTRX {
	
	private _raw:urn_raw.RawInstance;
	
	public users:urn_hooks.users.HookUsersInstance;
	
	constructor(config:TRXConfig){
		
		this._raw = urn_raw.create(config);
		
		this.users = urn_hooks.users.create(this._raw);
		
	}
	
}

/*
 * Export only type of class TRX
 */
export type TRXInstance = InstanceType<typeof URNTRX>;


export function create(config:TRXConfig)
		:TRXInstance{
	return new URNTRX(config);
}
