/**
 * Log module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

import api_client from 'uranio-api/client';

export function init(urn_log_lib:typeof urn_log):void{
	return api_client.log.init(urn_log_lib);
}

// export function init(log_config?: urn_log.LogLevel):void
// export function init(log_config?: urn_log.LogConfig):void
// export function init(log_config?: urn_log.LogConfig | urn_log.LogLevel):void{
//   /**
//    * This "if else" is needed otherwise Typescript will complain
//    * the overloads don't match.
//    */
//   if(typeof log_config === 'number'){
//     api.log.init(log_config);
//     urn_log.init(log_config);
//   }else{
//     api.log.init(log_config);
//     urn_log.init(log_config);
//   }
// }

