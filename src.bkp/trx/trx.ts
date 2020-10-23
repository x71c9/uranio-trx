/**
 * Class for URNTRX
 *
 * Main class that will contain all the TRX classes for each Resource
 *
 * @packageDocumentation
 */

/*
 *
 */
import * as urn_trx_raw from '../raw/raw';

import {URNTRXConfig} from '../urn_trx.t';

import {URNTRXUsers} from './trxs/users';

export class URNTRX {
	
	private _trx_raw:urn_trx_raw.URNTRXRAW;
	
	public users:URNTRXUsers;
	
	constructor(config:URNTRXConfig){
		
		this._trx_raw = urn_trx_raw.create(config);
		
		this.users = new URNTRXUsers(this._trx_raw);
		
	}
}
