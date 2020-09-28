/*
 * Main file for URN TRX Factory singleton
 *
 * The object has a function that will create instances of URNTRX class
 *
 * @packageDocumentation
 */

/*
 * Import URNTRXConfig interface for initializing the URNTRX class
 * Import URNTRX class
 */
import {URNTRX} from './trx';
import {URNTRXConfig} from './interfaces/config';

/*
 * URN TRX Singleton factory
 */
const urn_trx_factory = {
	
	/*
	 * It will create instances of URNTRX
	 *
	 * @param config - A configuratio object for setting up the class
	 *
	 * @returns an instance of URNTRX class
	 */
	create(config:URNTRXConfig)
			:URNTRX{
		
		return new URNTRX(config);
		
	}
	
};

export default urn_trx_factory;


