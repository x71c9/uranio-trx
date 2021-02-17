/**
 * Index module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import urn_trx, {book} from './main';

const utrx = urn_trx.create({base_url:'http://localhost:3000/'});

utrx.users.get().then(function(data){
	urn_log.debug(data);
	// console.log(data);
}).catch(function(){
	// console.error(err);
});


export default urn_trx;
