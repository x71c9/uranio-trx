import urn_trx from './urn_trx';

import * as urn_console from './log/log';
urn_console.config.log_level = urn_console.LogLevel.FUNCTION_DEBUG;

const utrx = urn_trx.create({base_url: 'http://localhost:80/api'});

import {URNResponse} from './return/return.t';

urn_console.log('Initializing...');

utrx.users.get().then((response) => {
	if(URNResponse.isSuccess(response))
		urn_console.log(response.payload[0].first_name);
});

// utrx.users.get().then((response) => {
//   if(response.success == false)
//     urn_console.error('resolve', response);
//   else
//     urn_console.log('resolve', response);
//   // console.log('resolve', response);
// }).catch((error) => {
//   urn_console.error('reject',error);
//   // console.error('reject', error);
// });

// import * as urn_log from './log/log';
// urn_log.config.log_level = 5;
// // urn_log.config.injectors = [];

// import './tst/console_tst';
