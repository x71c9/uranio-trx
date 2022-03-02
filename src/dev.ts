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

// import * as book from './book/server';
// const atom_book = book.get_all_definitions();
// console.log(atom_book.request?.dock?.routes);
