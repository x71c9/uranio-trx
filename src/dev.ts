/**
 * TRX dev module
 *
 * @packageDocumentation
 */

import uranio from './server';
uranio.init();

console.log(uranio.env.get_all());
console.log(uranio.conf.get_all());

const service = uranio.api.service.create();
service.listen(async () => {
	const res = await uranio.hooks.media.count();
	console.log(res);
});
