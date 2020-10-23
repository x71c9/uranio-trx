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

export class TRX {
	
	private _raw:urn_raw.Raw;
	
	public users:urn_hooks.users.HookUsers;
	
	constructor(config:TRXConfig){
		
		this._raw = urn_raw.create(config);
		
		this.users = urn_hooks.users.create(this._raw);
		
	}
	
}
