
import {urn_log, urn_response} from 'urn-lib';

import urn_trx from './urn_trx';

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

const utrx = urn_trx.create({base_url: 'http://localhost:80/api'});

urn_log.debug('Initializing...');

utrx.users.get().then((response) => {
	if(urn_response.isSuccess(response))
		urn_log.debug(response.payload[0].first_name);
	else
		urn_log.error(response);
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
