/*
 * Class for URNTRX
 *
 * Main class that will contain all the TRX classes for each Resource
 *
 * @packageDocumentation
 */

import {URNTRXUsers} from '../rtrx/users';

/*
 * Interface for config object
 */
export interface URNTRXConfig{
	
	/*
	 * The base URL for URANIO core
	 */
	base_url:string
	
}

export class URNTRX {
	
	public base_url:string;
	
	public users:URNTRXUsers;
	
	constructor(config:URNTRXConfig){
		
		this.base_url = config.base_url;
		
		this.users = new URNTRXUsers();
		
	}
}
