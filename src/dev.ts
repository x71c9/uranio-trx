/**
 * TRX dev module
 *
 * @packageDocumentation
 */

import uranio from './server';
uranio.init();

// console.log(uranio.env.get_all());
// console.log(uranio.conf.get_all());

const service = uranio.api.service.create();
service.listen(async () => {
	// const res = await uranio.hooks.users.find_id('61e9980a5bea5d4f9044f19b', {query: {options: {depth: 1}}});
	// console.log(res);
});

// import uranio_client from './client';
// uranio_client.init();

// // console.log(uranio_client.conf.get_all());
// uranio_client.hooks.superusers.find({}).then((data) => {console.log(data.payload?.[0])}).catch((data) => console.error(data));
