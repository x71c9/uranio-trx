/**
 * Class for URNTRX
 *
 * Main class that will contain all the TRX classes for each Resource
 *
 * @packageDocumentation
 */

import urn_trx_raw, {URNTRXRAW} from './urn_raw';

import {URNTRXConfig} from './types/config';

import {URNTRXUsers} from './trxs/users';

export class URNTRX {
	
	private _trx_raw:URNTRXRAW;
	
	public users:URNTRXUsers;
	
	constructor(config:URNTRXConfig){
		
		this._trx_raw = urn_trx_raw.create(config);
		
		this.users = new URNTRXUsers(this._trx_raw);
		
	}
}
