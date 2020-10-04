import urn_trx from './urn_trx';

import * as urn_console from './log/log';

urn_console.config.log_level = urn_console.LogLevel.FUNCTION_DEBUG;

const utrx = urn_trx.create({base_url: 'http://localhost:80/api'});

urn_console.log('Initializing...');

utrx.users.get().then((response) => {
	urn_console.log('resolve',response);
}).catch((error) => {
	urn_console.error('reject',error);
});

