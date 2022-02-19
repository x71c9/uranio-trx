/**
 * TRX run module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.FUNCTION_DEBUG);

// import urn_trx from './client';

import uranio from './index';
uranio.init();

// console.log(uranio.types.AuthAction);

// urn_log.fn_debug(`aaaaaaaaaaaaa`);

const service = uranio.api.service.create();
service.listen(() => {
	
	urn_log.debug(`Listening on port ${uranio.conf.get(`service_port`)}...`);
	
	// const pro_bll = uranio.api.core.bll.basic.create('superuser');
	// pro_bll.count({}).then(c => console.log(c));
	
	const base_media = uranio.base.create('media');
	base_media.hook('count')({}).then((resp) => {
		console.log(resp.sj);
	});
	
	// setTimeout(async () => {
	// uranio.hooks.media.find({}).then((resp) => {
	//   console.log(resp);
	// });
	// const karts = uranio.base.create('kart');
	// const mycustom = karts.hook('mycustom');
	// const args:uranio.types.HookArguments<'kart', 'mycustom'> = {
	//   params: {
	//     id: '611bedc525e7b32c3f6415d8',
	//     date: 'kajflkdsa'
	//   },
	//   query: {
	//     sick: {
	//       email: '',
	//       email2: 'SS'
	//     }
	//   }
	// };
	// mycustom(args).then(r => console.log(r)).catch(e => console.error(e));
	// const a = await uranio.hooks.karts.mycustom('611bedc525e7b32c3f6415d8', 'djkhd');
	// console.log(a);
	// uranio.hooks.products.delete('6128faa891988267692430a7').then(e => console.log(e)).catch(e => console.error(e));
	// }, 3000);
	
});



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

