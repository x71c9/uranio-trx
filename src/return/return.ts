/**
 * Middleware module for formatting responses
 *
 * @packageDocumentation
 */

// /*
//  * Import URNResponse namespace with all response types and methods
//  */
import {URNResponse} from './response';

import {URNResponseInjectable} from '../types/injectable';

/**
 * Class URNReturn has all the methods for creating URNResponse objects.
 * Its constructor accepts arrays of function that can be injected in the responses.
 * Most common case is for logging.
 *
 * Each module that import this class should have its own instance
 * and its own injected functions.
 */
class URNReturn {
	
	/**
	 * List of handlers for a Success response
	 */
	// private _success_handlers: SuccessResponseHandler<any>[];

	/**
	 * List of handlers for a Fail response
	 */
	// private _fail_handlers: FailResponseHandler<any>[];
	
	/**
	 * Constructor function
	 *
	 * @param fail_handlers - will set the array of handlers for Fail response
	 * @param success_handlers - will set the array of handlers for Success response
	 */
	constructor(
		public inject?:URNResponseInjectable
	){
		// fail_handlers?:FailResponseHandler<any> | FailResponseHandler<any>[],
		// success_handlers?:SuccessResponseHandler<any> | SuccessResponseHandler<any>[]){
		// this._success_handlers = [];
		// this._fail_handlers = [];
		// if(fail_handlers)
		//   this.fail_inject(fail_handlers);
		// if(success_handlers)
		//   this.success_inject(success_handlers);
	}
	
	/**
	 * Method for checking if the handler is a function and to push it to
	 * the Fail handlers array
	 *
	 * @param handler - the handler to check and add
	 */
	// private _add_fail_handler(handler:FailResponseHandler<any>){
	//   if(typeof handler === 'function'){
	//     this._fail_handlers.push(handler);
	//   }
	// }
	
	/**
	 * Method for checking if the handler is a function and to push it to
	 * the Success handlers array
	 *
	 * @param handler - the handler to check and add
	 */
	// private _add_success_handler(handler:SuccessResponseHandler<any>){
	//   if(typeof handler === 'function'){
	//     this._success_handlers.push(handler);
	//   }
	// }
	
	/**
	 * Method that accept one or an array of handlers and will add it to the
	 * Success handlers array
	 *
	 * @param handlers - the handler/s to add
	 */
	// public success_inject(handlers:SuccessResponseHandler<any> | SuccessResponseHandler<any>[])
	//     :void{
	//   if(Array.isArray(handlers)){
	//     for(const h of handlers)
	//       this._add_success_handler(h);
	//   }else if(handlers){
	//     this._add_success_handler(handlers);
	//   }
	// }
	
	/**
	 * Method that accept one or an array of handlers and will add it to the
	 * Fail handlers array
	 */
	// public fail_inject(handlers:FailResponseHandler<any> | FailResponseHandler<any>[])
	//     :void{
	//   if(Array.isArray(handlers)){
	//     for(const h of handlers)
	//       this._add_fail_handler(h);
	//   }else if(handlers){
	//     this._add_fail_handler(handlers);
	//   }
	// }
	
	/**
	 * Method that will run all the Success handlers for a Success response
	 *
	 * @param response - the Success response that will be given to the handlers
	 */
	// private run_success_handlers(response: URNResponse.Success<any>)
	//     :void{
	//   for(const handler of this._success_handlers)
	//     handler(response);
	// }
	
	/**
	 * Method that will run all the Fail handlers for a Fail response
	 *
	 * @param response - the Fail response that will be given to the handlers
	 */
	// private run_fail_handlers(response: URNResponse.Fail<any>)
	//     :void{
	//   for(const handler of this._fail_handlers)
	//     handler(response);
	// }
	
	/**
	 * Returns a response for an async function
	 *
	 * The return type of this function is a Response
	 * with success generic type T equal to the return type of the async handler Promise
	 *
	 * @param handler [optional] - The function to call
	 * @param name [optional] - The name of the response
	 */
	public async_res<R>(handler:(...args:any[]) => Promise<R>, name?:string){
		return async (param_object?:any):Promise<URNResponse.Response<R>> => {
			try{
				const response:URNResponse.Success<R> = {
					status: 200,
					success: true,
					payload: await handler(param_object)
				};
				if(this.inject && this.inject.success_handler){
					return this.inject.success_handler(response);
				}
				// this.run_success_handlers(response);
				return response;
			}catch(ex){
				return this.return_error(500, 'URANIO ERROR ['+name+'] - '+ex.message, null, ex);
			}
		};
	}

	/**
	 * Returns a response for a function
	 *
	 * The return type of this function is a Response
	 * with success generic type T equal to the return type of the handler function
	 *
	 * @param handler [optional] - The function to call
	 * @param name [optional] - The name of the response
	 */
	public res<R>(handler:(...args:any[]) => R, name?:string){
		return (param_object?:any):URNResponse.Response<ReturnType<typeof handler>> => {
			try{
				const response:URNResponse.Success<R> = {
					status: 200,
					success: true,
					payload: handler(param_object)
				};
				if(this.inject && this.inject.success_handler){
					return this.inject.success_handler(response);
				}
				// this.run_success_handlers(response);
				return response;
			}catch(ex){
				return this.return_error(500, 'URANIO ERROR ['+name+'] - '+ex.message, null, ex);
			}
		};
	}
	
	/**
	 * Returns a response object by looking into its payload.
	 * If there is an error will not look into its playload.
	 * If the payload has an error will return that error.
	 * Otherwse will return the payload and the message of its payload.
	 *
	 * @param result - The main response
	 * @param name [optional] - The name of the response
	 */
	inherit_res(result:URNResponse.Response<URNResponse.Response>, name?:string):URNResponse.Response{
		
		const return_result:URNResponse.Response = {
			status: 200,
			message: '',
			success: false,
			payload: null
		};
		
		if(URNResponse.isFail(result)){
			return_result.status = result.status;
			return_result.message = (name) ? name + ' - ' + result.message : result.message;
			return_result.ex = result.ex;
			return return_result;
		}
		if(!URNResponse.isFail(result.payload) && !URNResponse.isSuccess(result.payload)){
			return_result.message = (name) ? name + ' - ' + result.message : result.message;
			return return_result;
		}
		if(URNResponse.isFail(result.payload)){
			return_result.status = result.payload.status;
			return_result.message = (name) ? name + ' - ' + result.payload.message : result.payload.message;
			return_result.ex = result.payload.ex;
			return return_result;
		}
		return_result.message = (name) ? name + ' - ' + result.payload.message : result.payload.message;
		return_result.payload = result.payload.payload;
		return return_result;
		
	}
	
	/**
	 * Returns a response error object
	 *
	 * Method overload: different return type for different arguments
	 * If payload in present will return a Fail with generic type the type of the payload
	 *
	 * @param status - Status as number. It follows the HTTP status codes
	 * @param message [optional] - A human readable message of the response
	 * @param payload [optional] - A payload
	 * @param ex [optional] - An exception
	 */
	public return_error(status:number, message:string, payload?:null, ex?:Error | null):URNResponse.Fail;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error | null):URNResponse.Fail<T>;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error | null):URNResponse.Fail<T> | URNResponse.Fail{
		// if there is a payload
		if(arguments.length > 2){
			const urn_response:URNResponse.Fail<T> = {
				status: status,
				payload: payload,
				message: message,
				ex: (ex) ? ex : null,
				success: false
			};
			if(this.inject && this.inject.fail_handler){
				return this.inject.fail_handler(urn_response);
			}
			// this.run_fail_handlers(urn_response);
			return urn_response;
		}else{
			const urn_response:URNResponse.Fail = {
				status: status,
				message: message,
				payload: null,
				ex: null,
				success: false
			};
			if(this.inject && this.inject.fail_handler){
				return this.inject.fail_handler(urn_response);
			}
			// this.run_fail_handlers(urn_response);
			return urn_response;
		}
	}
	
	/**
	 * Returns a successful response object
	 *
	 * Method overload: different return type for different arguments
	 * If payload in present will return a Success with generic type the type of the payload
	 *
	 * @param message [optional] - A human readable message of the response
	 * @param payload [optional] - A payload
	 */
	public return_success(message:string, payload?:null):URNResponse.Success;
	public return_success<T>(message:string, payload:T):URNResponse.Success<T>;
	public return_success<T>(message:string, payload:T):URNResponse.Success<T> | URNResponse.Success{
		// if there is a payload
		if(arguments.length > 1){
			const urn_response:URNResponse.Success<T> = {
				status: 200,
				success: true,
				message: message,
				payload: payload
			};
			if(this.inject && this.inject.success_handler){
				return this.inject.success_handler(urn_response);
			}
			// this.run_success_handlers(urn_response);
			return urn_response;
		}else{
			const urn_response:URNResponse.Success = {
				status: 200,
				success: true,
				message: message,
				payload: null
			};
			if(this.inject && this.inject.success_handler){
				return this.inject.success_handler(urn_response);
			}
			// this.run_success_handlers(urn_response);
			return urn_response;
		}
	}
	
	/**
	 * Returns a successful boolean response with optional message
	 *
	 * @param message [optional] - A message to append
	 */
	return_true(message?:string):URNResponse.UBoolean<true>{
		const urn_boolean:URNResponse.UBoolean<true> = {
			success: true
		};
		if(arguments.length>0)
			urn_boolean.message = message;
		return urn_boolean;
	}
	
	/**
	 * Retunrs a not successful boolean response with optional message
	 *
	 * @param message [optional] - A message to append
	 */
	return_false(message?:string):URNResponse.UBoolean<false>{
		const urn_boolean:URNResponse.UBoolean<false> = {
			success: false
		};
		if(arguments.length>0)
			urn_boolean.message = message;
		return urn_boolean;
	}
	
}

/**
 * A function the will create a URNReturn instance.
 * Its parameters are the same as the constructor of the class.
 */
// function create_instance(
//   fail_handlers?:FailResponseHandler<any>|FailResponseHandler<any>[],
//   success_handlers?:SuccessResponseHandler<any>|SuccessResponseHandler<any>[])
//     :URNReturn{
//   return new URNReturn(fail_handlers, success_handlers);
// }
function create_instance(inject?:URNResponseInjectable):URNReturn{
	return new URNReturn(inject);
}

/*
 * Export the function that will create the instance of the class.
 */
export default create_instance;


