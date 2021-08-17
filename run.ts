/**
 * TRX run module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import urn_trx from './client';

console.log(urn_trx.types.AuthAction);

const users = urn_trx.trx.create('user');
const find_id = users.hook('find');

const args:urn_trx.types.HookArguments<'user', 'find_id'> = {
	params: {
		id: 'dskfjdslkfjlsdkjf'
	},
	// query: {
	//   // filter: {
	//   //   email: ''
	//   // }
	// }
};

// find_id({params: {id:''}, query: {options: ''}}).then(r => console.log(r)).catch(e => console.error(e));
find_id(args).then(r => console.log(r)).catch(e => console.error(e));



// console.log(urn_api.lib.log.defaults);

// const express_service = urn_api.service.create();

// express_service.listen(3000, () => {
//   urn_log.debug(`Listening on port 3000...`);
// });

// import * as types from './types';

// const event = {
//   rawURL: '',
//   rawQuery: '',
//   path: '/uranio/api/requests',
//   httpMethod: types.RouteMethod.GET,
//   headers: {},
//   multiValueHeaders: {},
//   queryStringParameters: null,
//   multiValueQueryStringParametes: null,
//   body: null,
//   isBase64Encoded: false
// };
// const context = {
//   callbackWaitsForEmptyEventLoop: false,
//   functionName: '',
//   functionVersion: '',
//   invokedFunctionArn: '',
//   memoryLimitInMB: '',
//   awsRequestId: '',
//   logGroupName: '',
//   logStreamName: '',
//   getRemainingTimeInMillis: () => 3
// };
// const urn_lambda = urn_api.lambda.create();
// urn_lambda.handle(event, context).then((_r) => {
//   console.log(_r);
// });
