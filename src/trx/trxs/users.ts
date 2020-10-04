
import {URNTRXResource} from './resources';

import {URNTRXRAW} from '../../raw/raw';

export class URNTRXUsers extends URNTRXResource {
	
	constructor(_rawInstance:URNTRXRAW){
		
		super(_rawInstance);
		
		this._path = '/users';
		
	}
	
}

