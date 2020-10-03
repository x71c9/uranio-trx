
import {URNResponse} from '../return/response';

import {URNTRXRAW} from '../urn_raw';

export abstract class URNTRXResource {
	
	private _raw:URNTRXRAW;
	
	protected _path:string;
	
	public constructor(_rawInstance:URNTRXRAW){
		this._raw = _rawInstance;
		
		/*
		 * _path must be overwritten in subclasses
		 */
		this._path = '';
	}
	
	public async get()
			:Promise<URNResponse.Response<any,any>>{
		return this._raw.get(this._path);
	}
}

