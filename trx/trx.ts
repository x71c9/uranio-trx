/**
 * Module for TRX
 *
 * Main class that contains all the Hooks
 *
 * @packageDocumentation
 */

// import {urn_log} from 'urn-lib';

// import {TRXConfiguration} from '../types';

// import * as urn_raw from '../raw/';

// @urn_log.decorators.debug_constructor
// @urn_log.decorators.debug_methods
// class URNTRX {
	
//   private _raw:urn_raw.RAW;
	
//   // public base_url:string;
	
//   constructor(config:TRXConfiguration){
		
//     // this.base_url = config.base_url;
		
//     if(config.raw){
//       switch(config.raw){
//         case 'axios':{
//           this._raw = urn_raw.create_axios(config);
//           break;
//         }
//       }
//     }else{
//       this._raw = urn_raw.create_axios(config);
//     }
		
//   }
	
//   public create_hook(atom:AtomName):Hook{
		
//   }
	
// }

/*
 * Export only type of class TRX
 */
// export type TRXInstance = InstanceType<typeof URNTRX>;


// export function create_trx(config:TRXConfiguration)
//     :TRXInstance{
	
//   urn_log.fn_debug('Create URNTRX');
	
//   return new URNTRX(config);
// }
