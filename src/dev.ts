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
	const res = await uranio.hooks.users.find_id('61e9980a5bea5d4f9044f19b', {query: {options: {depth: 1}}});
	console.log(res);
});
