/*
 * Import URNResponse namespace with all response types and methods
 */
// import {URNResponse} from '../return/response';

/**
 * Type for handling Success reponse. The type is a Function type that accept
 * a Success response object as its main parameter.
 */
// export type SuccessResponseHandler<T> = (p:URNResponse.Success<T>) => void;

/**
 * Type for handling Fail reponse. The type is a Function type that accept
 * a Fail response object as its main parameter.
 */
// export type FailResponseHandler<T> = (p:URNResponse.Fail<T>) => void;



export interface URNResponseInjectable{
	
	success_handler<T>(p:T):T;
	
	fail_handler<T>(p:T):T;
	
}
