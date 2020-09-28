/**
 * Middleware module for formatting responses
 *
 * @packageDocumentation
 */

/*
 * Import console for logging
 */
// import * as urn_console from '../tools/console';

import {URNResponse} from './response';

export class URNReturn {
	
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
				return {
					status: 200,
					success: true,
					payload: await handler(param_object)
				};
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
				return {
					status: 200,
					success: true,
					payload: handler(param_object)
				};
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
	 * @param name - The name of the response
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
	public return_error(status:number, message:string, payload?:null, ex?:Error|null):URNResponse.Fail;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error|null):URNResponse.Fail<T>;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error|null):URNResponse.Fail<T>|URNResponse.Fail{
		// if there is a payload
		if(arguments.length > 2){
			const urn_response:URNResponse.Fail<T> = {
				status: status,
				payload: payload,
				message: message,
				ex: (ex) ? ex : null,
				success: false
			};
			// urn_console.error(urn_response);
			return urn_response;
		}else{
			const urn_response:URNResponse.Fail = {
				status: status,
				message: message,
				payload: null,
				ex: null,
				success: false
			};
			// urn_console.error(urn_response);
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
	public return_success<T>(message:string, payload:T):URNResponse.Success<T>|URNResponse.Success{
		// if there is a payload
		if(arguments.length > 1){
			const urn_response:URNResponse.Success<T> = {
				status: 200,
				success: true,
				message: message,
				payload: payload
			};
			return urn_response;
		}else{
			const urn_response:URNResponse.Success = {
				status: 200,
				success: true,
				message: message,
				payload: null
			};
			return urn_response;
		}
	}

	/**
	 * Returns a successful boolean response with optional message
	 *
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
