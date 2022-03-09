/**
 * TRX dev module
 *
 * @packageDocumentation
 */

import uranio from './server';
uranio.init();

const service = uranio.api.service.create();
service.listen(async () => {
	const res = await uranio.hooks.media.count();
	console.log(res);
});
