/**
 * TRX run module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init({
	log_level: urn_log.LogLevel.FUNCTION_DEBUG,
	color: true,
	debug_info: false,
	prefix_type: false
});

import uranio from './server';
uranio.init();

// const service = uranio.api.service.create();
// service.listen(() => {
//   const reqs = uranio.base.create('request');
//   reqs.hook('count')({}).then((r) => {
//     console.log(r);
//   });
// });
