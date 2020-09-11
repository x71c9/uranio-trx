/*
 * Main file for URN Resource User
 */

/*
 * Import interface IURN_OBJ
 */
import {IURNResource} from './rsrc';

export interface IURNUser extends IURNResource {
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
