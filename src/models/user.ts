/*
 * Main file for URN Resource User
 */

/*
 * Import interface IURN_OBJ
 */
import {URNResource} from './resource';

export interface URNUser extends URNResource {
	
	/*
	 * Email
	 */
	email:string;
	
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