
import {URNTRXResource} from './resources';

import {URNTRXRAW} from '../../raw/raw';

import {URNUser} from '../../models/user';

export class URNTRXUsers extends URNTRXResource<URNUser> {
	
	constructor(_rawInstance:URNTRXRAW){
		
		super(_rawInstance);
		
		this._path = '/users';
		
	}
	
}

