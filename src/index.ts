/**
 * Index module
 *
 * @packageDocumentation
 */

import urn_trx from './main';

const utrx = urn_trx.create({base_url:'http://localhost:80/api'});

import {urn_log} from 'urn-lib';
urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

utrx.users.get().then(function(data){
	urn_log.debug(data);
}).catch(function(){
	// console.error(err);
});

export default urn_trx;
