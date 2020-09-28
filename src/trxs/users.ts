
import {URNTRXResource} from './resources';

import {URNTRXRAWInstance} from '../urn_raw';

export class URNTRXUsers extends URNTRXResource {
	
	constructor(_rawInstance:URNTRXRAWInstance){
		super(_rawInstance);
		this._path = '/users';
	}
	
}

