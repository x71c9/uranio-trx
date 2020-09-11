
import {URNTRXResource} from './rsrcs';

import {IURNUser} from '../rsrc/user';

export class URNTRXUsers extends URNTRXResource<IURNUser> {
	
	constructor(){
		super();
	}
	
	public async get()
			:Promise<IURNUser>{
		return new Promise((resolve) => {
			resolve({});
		});
	}
	
}

