/*
 * Main file for URN Resource User
 */

/*
 * Import interface IURN_OBJ
 */
import {IURN_OBJ} from './obj';

export interface IURNUser extends IURN_OBJ {
	
	
	
	
	/*
	 * First name
	 */
	first_name?:string;
	
	/*
	 * Last name
	 */
	last_name?:string;
	
	/*
	 * Username
	 */
	username?:string;
	
	/*
	 * Email
	 */
	email?:string;
	
	/*
	 * Type
	 */
	type?:string;
	
	/*
	 * Active
	 */
	active?:boolean;
	
	/*
	 * Bio
	 */
	bio?:string;
	
	/*
	 * Password
	 */
	password?:string;
	
}
