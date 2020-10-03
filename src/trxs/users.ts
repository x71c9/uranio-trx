
import {URNTRXResource} from './resources';

import {URNTRXRAW} from '../urn_raw';

export class URNTRXUsers extends URNTRXResource {
	
	constructor(_rawInstance:URNTRXRAW){
		
		super(_rawInstance);
		
		this._path = '/users';
		
	}
	
}

